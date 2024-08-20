/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WebsiteImport } from './routes/website'
import { Route as TelemetryImport } from './routes/telemetry'
import { Route as SurveyImport } from './routes/survey'
import { Route as SettingsImport } from './routes/settings'
import { Route as ServerImport } from './routes/server'
import { Route as RegisterImport } from './routes/register'
import { Route as PageImport } from './routes/page'
import { Route as MonitorImport } from './routes/monitor'
import { Route as LoginImport } from './routes/login'
import { Route as FeedImport } from './routes/feed'
import { Route as IndexImport } from './routes/index'
import { Route as WebsiteOverviewImport } from './routes/website/overview'
import { Route as WebsiteAddImport } from './routes/website/add'
import { Route as TelemetryAddImport } from './routes/telemetry/add'
import { Route as TelemetryTelemetryIdImport } from './routes/telemetry/$telemetryId'
import { Route as SurveyAddImport } from './routes/survey/add'
import { Route as StatusSlugImport } from './routes/status/$slug'
import { Route as SettingsWorkspaceImport } from './routes/settings/workspace'
import { Route as SettingsUsageImport } from './routes/settings/usage'
import { Route as SettingsProfileImport } from './routes/settings/profile'
import { Route as SettingsNotificationsImport } from './routes/settings/notifications'
import { Route as SettingsAuditLogImport } from './routes/settings/auditLog'
import { Route as PageAddImport } from './routes/page/add'
import { Route as PageSlugImport } from './routes/page/$slug'
import { Route as MonitorAddImport } from './routes/monitor/add'
import { Route as FeedAddImport } from './routes/feed/add'
import { Route as WebsiteWebsiteIdIndexImport } from './routes/website/$websiteId/index'
import { Route as SurveySurveyIdIndexImport } from './routes/survey/$surveyId/index'
import { Route as MonitorMonitorIdIndexImport } from './routes/monitor/$monitorId/index'
import { Route as FeedChannelIdIndexImport } from './routes/feed/$channelId/index'
import { Route as WebsiteWebsiteIdConfigImport } from './routes/website/$websiteId/config'
import { Route as SurveySurveyIdEditImport } from './routes/survey/$surveyId/edit'
import { Route as MonitorMonitorIdEditImport } from './routes/monitor/$monitorId/edit'
import { Route as FeedChannelIdEditImport } from './routes/feed/$channelId/edit'

// Create/Update Routes

const WebsiteRoute = WebsiteImport.update({
  path: '/website',
  getParentRoute: () => rootRoute,
} as any)

const TelemetryRoute = TelemetryImport.update({
  path: '/telemetry',
  getParentRoute: () => rootRoute,
} as any)

const SurveyRoute = SurveyImport.update({
  path: '/survey',
  getParentRoute: () => rootRoute,
} as any)

const SettingsRoute = SettingsImport.update({
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const ServerRoute = ServerImport.update({
  path: '/server',
  getParentRoute: () => rootRoute,
} as any)

const RegisterRoute = RegisterImport.update({
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const PageRoute = PageImport.update({
  path: '/page',
  getParentRoute: () => rootRoute,
} as any)

const MonitorRoute = MonitorImport.update({
  path: '/monitor',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const FeedRoute = FeedImport.update({
  path: '/feed',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const WebsiteOverviewRoute = WebsiteOverviewImport.update({
  path: '/overview',
  getParentRoute: () => WebsiteRoute,
} as any)

const WebsiteAddRoute = WebsiteAddImport.update({
  path: '/add',
  getParentRoute: () => WebsiteRoute,
} as any)

const TelemetryAddRoute = TelemetryAddImport.update({
  path: '/add',
  getParentRoute: () => TelemetryRoute,
} as any)

const TelemetryTelemetryIdRoute = TelemetryTelemetryIdImport.update({
  path: '/$telemetryId',
  getParentRoute: () => TelemetryRoute,
} as any)

const SurveyAddRoute = SurveyAddImport.update({
  path: '/add',
  getParentRoute: () => SurveyRoute,
} as any)

const StatusSlugRoute = StatusSlugImport.update({
  path: '/status/$slug',
  getParentRoute: () => rootRoute,
} as any)

const SettingsWorkspaceRoute = SettingsWorkspaceImport.update({
  path: '/workspace',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsUsageRoute = SettingsUsageImport.update({
  path: '/usage',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsProfileRoute = SettingsProfileImport.update({
  path: '/profile',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsNotificationsRoute = SettingsNotificationsImport.update({
  path: '/notifications',
  getParentRoute: () => SettingsRoute,
} as any)

const SettingsAuditLogRoute = SettingsAuditLogImport.update({
  path: '/auditLog',
  getParentRoute: () => SettingsRoute,
} as any)

const PageAddRoute = PageAddImport.update({
  path: '/add',
  getParentRoute: () => PageRoute,
} as any)

const PageSlugRoute = PageSlugImport.update({
  path: '/$slug',
  getParentRoute: () => PageRoute,
} as any)

const MonitorAddRoute = MonitorAddImport.update({
  path: '/add',
  getParentRoute: () => MonitorRoute,
} as any)

const FeedAddRoute = FeedAddImport.update({
  path: '/add',
  getParentRoute: () => FeedRoute,
} as any)

const WebsiteWebsiteIdIndexRoute = WebsiteWebsiteIdIndexImport.update({
  path: '/$websiteId/',
  getParentRoute: () => WebsiteRoute,
} as any)

const SurveySurveyIdIndexRoute = SurveySurveyIdIndexImport.update({
  path: '/$surveyId/',
  getParentRoute: () => SurveyRoute,
} as any)

const MonitorMonitorIdIndexRoute = MonitorMonitorIdIndexImport.update({
  path: '/$monitorId/',
  getParentRoute: () => MonitorRoute,
} as any)

const FeedChannelIdIndexRoute = FeedChannelIdIndexImport.update({
  path: '/$channelId/',
  getParentRoute: () => FeedRoute,
} as any)

const WebsiteWebsiteIdConfigRoute = WebsiteWebsiteIdConfigImport.update({
  path: '/$websiteId/config',
  getParentRoute: () => WebsiteRoute,
} as any)

const SurveySurveyIdEditRoute = SurveySurveyIdEditImport.update({
  path: '/$surveyId/edit',
  getParentRoute: () => SurveyRoute,
} as any)

const MonitorMonitorIdEditRoute = MonitorMonitorIdEditImport.update({
  path: '/$monitorId/edit',
  getParentRoute: () => MonitorRoute,
} as any)

const FeedChannelIdEditRoute = FeedChannelIdEditImport.update({
  path: '/$channelId/edit',
  getParentRoute: () => FeedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/feed': {
      preLoaderRoute: typeof FeedImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/monitor': {
      preLoaderRoute: typeof MonitorImport
      parentRoute: typeof rootRoute
    }
    '/page': {
      preLoaderRoute: typeof PageImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      preLoaderRoute: typeof RegisterImport
      parentRoute: typeof rootRoute
    }
    '/server': {
      preLoaderRoute: typeof ServerImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
    '/survey': {
      preLoaderRoute: typeof SurveyImport
      parentRoute: typeof rootRoute
    }
    '/telemetry': {
      preLoaderRoute: typeof TelemetryImport
      parentRoute: typeof rootRoute
    }
    '/website': {
      preLoaderRoute: typeof WebsiteImport
      parentRoute: typeof rootRoute
    }
    '/feed/add': {
      preLoaderRoute: typeof FeedAddImport
      parentRoute: typeof FeedImport
    }
    '/monitor/add': {
      preLoaderRoute: typeof MonitorAddImport
      parentRoute: typeof MonitorImport
    }
    '/page/$slug': {
      preLoaderRoute: typeof PageSlugImport
      parentRoute: typeof PageImport
    }
    '/page/add': {
      preLoaderRoute: typeof PageAddImport
      parentRoute: typeof PageImport
    }
    '/settings/auditLog': {
      preLoaderRoute: typeof SettingsAuditLogImport
      parentRoute: typeof SettingsImport
    }
    '/settings/notifications': {
      preLoaderRoute: typeof SettingsNotificationsImport
      parentRoute: typeof SettingsImport
    }
    '/settings/profile': {
      preLoaderRoute: typeof SettingsProfileImport
      parentRoute: typeof SettingsImport
    }
    '/settings/usage': {
      preLoaderRoute: typeof SettingsUsageImport
      parentRoute: typeof SettingsImport
    }
    '/settings/workspace': {
      preLoaderRoute: typeof SettingsWorkspaceImport
      parentRoute: typeof SettingsImport
    }
    '/status/$slug': {
      preLoaderRoute: typeof StatusSlugImport
      parentRoute: typeof rootRoute
    }
    '/survey/add': {
      preLoaderRoute: typeof SurveyAddImport
      parentRoute: typeof SurveyImport
    }
    '/telemetry/$telemetryId': {
      preLoaderRoute: typeof TelemetryTelemetryIdImport
      parentRoute: typeof TelemetryImport
    }
    '/telemetry/add': {
      preLoaderRoute: typeof TelemetryAddImport
      parentRoute: typeof TelemetryImport
    }
    '/website/add': {
      preLoaderRoute: typeof WebsiteAddImport
      parentRoute: typeof WebsiteImport
    }
    '/website/overview': {
      preLoaderRoute: typeof WebsiteOverviewImport
      parentRoute: typeof WebsiteImport
    }
    '/feed/$channelId/edit': {
      preLoaderRoute: typeof FeedChannelIdEditImport
      parentRoute: typeof FeedImport
    }
    '/monitor/$monitorId/edit': {
      preLoaderRoute: typeof MonitorMonitorIdEditImport
      parentRoute: typeof MonitorImport
    }
    '/survey/$surveyId/edit': {
      preLoaderRoute: typeof SurveySurveyIdEditImport
      parentRoute: typeof SurveyImport
    }
    '/website/$websiteId/config': {
      preLoaderRoute: typeof WebsiteWebsiteIdConfigImport
      parentRoute: typeof WebsiteImport
    }
    '/feed/$channelId/': {
      preLoaderRoute: typeof FeedChannelIdIndexImport
      parentRoute: typeof FeedImport
    }
    '/monitor/$monitorId/': {
      preLoaderRoute: typeof MonitorMonitorIdIndexImport
      parentRoute: typeof MonitorImport
    }
    '/survey/$surveyId/': {
      preLoaderRoute: typeof SurveySurveyIdIndexImport
      parentRoute: typeof SurveyImport
    }
    '/website/$websiteId/': {
      preLoaderRoute: typeof WebsiteWebsiteIdIndexImport
      parentRoute: typeof WebsiteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  FeedRoute.addChildren([
    FeedAddRoute,
    FeedChannelIdEditRoute,
    FeedChannelIdIndexRoute,
  ]),
  LoginRoute,
  MonitorRoute.addChildren([
    MonitorAddRoute,
    MonitorMonitorIdEditRoute,
    MonitorMonitorIdIndexRoute,
  ]),
  PageRoute.addChildren([PageSlugRoute, PageAddRoute]),
  RegisterRoute,
  ServerRoute,
  SettingsRoute.addChildren([
    SettingsAuditLogRoute,
    SettingsNotificationsRoute,
    SettingsProfileRoute,
    SettingsUsageRoute,
    SettingsWorkspaceRoute,
  ]),
  SurveyRoute.addChildren([
    SurveyAddRoute,
    SurveySurveyIdEditRoute,
    SurveySurveyIdIndexRoute,
  ]),
  TelemetryRoute.addChildren([TelemetryTelemetryIdRoute, TelemetryAddRoute]),
  WebsiteRoute.addChildren([
    WebsiteAddRoute,
    WebsiteOverviewRoute,
    WebsiteWebsiteIdConfigRoute,
    WebsiteWebsiteIdIndexRoute,
  ]),
  StatusSlugRoute,
])

/* prettier-ignore-end */
