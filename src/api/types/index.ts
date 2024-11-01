export interface Activity {
  id: number;
  description: string;
  location: string;
  name: string;
  photoUrl: string;
  price: number;
  rating: number;

}
export const queryIds={
  'GET_ACTIVITY':'activities'
}
export type ActivitiesResponse = Activity[];
