import { Cron } from 'croner';
import { logger } from '../utils/logger';
import { prisma } from '../model/_client';
import dayjs from 'dayjs';
import { Prisma } from '@prisma/client';
import { env } from '../utils/env';
import { sendNotification } from '../model/notification';
import { token } from '../model/notification/token';
import _ from 'lodash';

type WebsiteEventCountSqlReturn = {
  workspace_id: string;
  count: bigint;
}[];

export function initCronjob() {
  const dailyJob = Cron('0 2 * * *', async () => {
    logger.info('Start daily cronjob');

    try {
      await Promise.all([
        statDailyUsage().catch(logger.error),
        clearMonitorDataDaily().catch(logger.error),
        dailyHTTPCertCheckNotify().catch(logger.error),
      ]);

      logger.info('Daily cronjob completed');
    } catch (err) {
      logger.error('Daily cronjob error:', err);
    }
  });

  logger.info('Daily job will start at:', dailyJob.nextRun()?.toISOString());

  return { dailyJob };
}

async function statDailyUsage() {
  logger.info('[statDailyUsage] Statistics Workspace Daily Usage Start');
  const start = dayjs().subtract(1, 'day').startOf('day').toDate();
  const end = dayjs().startOf('day').toDate();
  const date = dayjs().subtract(1, 'day').toDate();

  const [websiteAcceptCountRes, websiteEventCountRes, monitorExecutionCount] =
    await Promise.all([
      await prisma.$queryRaw<WebsiteEventCountSqlReturn>`
        SELECT
          w.id AS workspace_id,
          COALESCE(COUNT(we.id), 0) AS count
        FROM
          "Workspace" w
        LEFT JOIN
          "Website" ws ON w.id = ws."workspaceId"
        LEFT JOIN
          "WebsiteEvent" we ON ws.id = we."websiteId"
            AND we."createdAt" >= ${start}
            AND we."createdAt" < ${end}
        GROUP BY
          w.id, w.name
        ORDER BY
          w.id`,
      await prisma.$queryRaw<WebsiteEventCountSqlReturn>`
        SELECT
          w.id AS workspace_id,
          COALESCE(COUNT(we.id), 0) AS count
        FROM
          "Workspace" w
        LEFT JOIN
          "Website" ws ON w.id = ws."workspaceId"
        LEFT JOIN
          "WebsiteEvent" we ON ws.id = we."websiteId"
            AND we."eventType" = 2
            AND we."createdAt" >= ${start}
            AND we."createdAt" < ${end}
        GROUP BY
          w.id, w.name
        ORDER BY
          w.id`,
      await prisma.$queryRaw<WebsiteEventCountSqlReturn>`
        SELECT
          w.id AS workspace_id,
          COALESCE(COUNT(md.id), 0) AS count
        FROM
          "Workspace" w
        LEFT JOIN
          "Monitor" m ON w.id = m."workspaceId"
        LEFT JOIN
          "MonitorData" md ON m.id = md."monitorId"
            AND md."createdAt" >= ${start}
            AND md."createdAt" < ${end}
        GROUP BY
          w.id
        ORDER BY
          w.id`,
    ]);

  const map: Map<string, Prisma.WorkspaceDailyUsageCreateManyInput> = new Map();

  const blank: Omit<Prisma.WorkspaceDailyUsageCreateManyInput, 'workspaceId'> =
    {
      websiteAcceptedCount: 0,
      websiteEventCount: 0,
      monitorExecutionCount: 0,
      date,
    };

  websiteAcceptCountRes.forEach((item) => {
    const workspaceId = item.workspace_id;
    map.set(workspaceId, {
      ...blank,
      ...map.get(workspaceId),
      workspaceId,
      websiteAcceptedCount: Number(item.count),
    });
  });

  websiteEventCountRes.forEach((item) => {
    const workspaceId = item.workspace_id;
    map.set(workspaceId, {
      ...blank,
      ...map.get(workspaceId),
      workspaceId,
      websiteEventCount: Number(item.count),
    });
  });

  monitorExecutionCount.forEach((item) => {
    const workspaceId = item.workspace_id;
    map.set(workspaceId, {
      ...blank,
      ...map.get(workspaceId),
      workspaceId,
      monitorExecutionCount: Number(item.count),
    });
  });

  await prisma.workspaceDailyUsage.createMany({
    data: Array.from(map.values()),
    skipDuplicates: true,
  });

  logger.info('[statDailyUsage] Statistics Workspace Daily Usage Completed');
}

/**
 * Clear over 2 week data
 */
async function clearMonitorDataDaily() {
  if (env.disableAutoClear) {
    return;
  }

  const date = dayjs().subtract(2, 'weeks').toDate();
  logger.info(
    '[clearMonitorDataDaily] Start clear monitor data before:',
    date.toISOString()
  );
  const res = await prisma.monitorData.deleteMany({
    where: {
      createdAt: {
        lte: date,
      },
    },
  });

  logger.info(
    '[clearMonitorDataDaily] Clear monitor completed, delete record:',
    res.count
  );
}

/**
 * Https notify
 */

async function dailyHTTPCertCheckNotify() {
  logger.info('[dailyHTTPCertCheckNotify] Start run dailyHTTPCertCheckNotify');
  const start = Date.now();

  const res = await prisma.$queryRaw<
    { monitorId: string; daysRemaining: number }[]
  >`
    SELECT "monitorId", (payload -> 'certInfo' ->> 'daysRemaining')::int as "daysRemaining"
    FROM "MonitorStatus"
    WHERE "statusName" = 'tls'
      AND "updatedAt" >= now() - interval '1 day'
      AND (payload -> 'certInfo' ->> 'daysRemaining')::int in (1, 3, 7, 14);
  `;

  logger.info(`[dailyHTTPCertCheckNotify] find ${res.length} records`);

  const monitors = await prisma.monitor.findMany({
    where: {
      id: {
        in: res.map((r) => r.monitorId),
      },
    },
    include: {
      notifications: true,
    },
  });

  let sendCount = 0;

  for (const m of monitors) {
    if (m.active === false) {
      continue;
    }

    for (const n of m.notifications) {
      const daysRemaining = res.find(
        (item) => item.monitorId === m.id
      )?.daysRemaining;
      if (!daysRemaining) {
        continue;
      }

      const content = `[${m.name}][${_.get(m.payload, 'url')}] Certificate will be expired in ${daysRemaining} days`;

      try {
        await sendNotification(n, content, [token.text(content)]).catch(
          logger.error
        );
        sendCount++;
      } catch (err) {
        logger.error(err);
      }
    }
  }

  logger.info(
    `[dailyHTTPCertCheckNotify] run completed, send ${sendCount} notifications, time usage: ${Date.now() - start}ms`
  );
}
