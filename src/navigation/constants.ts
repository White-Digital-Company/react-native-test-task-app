export const SCREENS = {
  HOME: 'Home',
  ACTIVITY_DETAILS: 'ActivityDetails',
} as const

export const ROUTE_PARAMS = {
  ACTIVITY: 'activity',
} as const

export type ScreenNames = (typeof SCREENS)[keyof typeof SCREENS]
export type RouteParams = (typeof ROUTE_PARAMS)[keyof typeof ROUTE_PARAMS]
