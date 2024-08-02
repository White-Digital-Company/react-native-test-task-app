import { Activity } from '../../screens/types/activity'

export interface ActivityListProps {
  onPress: (item: Activity) => void
  items: Activity[]
}
