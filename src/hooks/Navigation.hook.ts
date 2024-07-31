/* eslint-disable unicorn/consistent-function-scoping */
import { RouterKeys } from '../router/keys'
import { navigationRef } from '../router/root-navigation'

interface UseNavigationReturn {
  goBack: () => void
  goToActivity: () => void
}
export const UseNavigation = (): UseNavigationReturn => {
  const goBack = () => {
    navigationRef.goBack()
  }
  const goToActivity = () => {
    navigationRef.navigate(RouterKeys.ACTIVITY)
  }
  return {
    goBack,
    goToActivity,
  }
}
