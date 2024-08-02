import { isAxiosError } from 'axios'
import { useMutation } from 'react-query'
import { favoritesService } from '../services/favorites/favorites.service'
import { QUERY_KEYS } from '../shared/consts/app-keys.const'
import { getError } from '../utils/get-error.util'
import { useActivityStore } from '../store/activities.store'

type TUseFavoritesReturn = {
  handleFavorite: (id: number) => Promise<void>
  isFavLoading: boolean
}
export const UseFavorites = (): TUseFavoritesReturn => {
  const { activity, activities, setActivities, setActivity } =
    useActivityStore()
  const { mutateAsync: mutationAddToFav, isLoading: isFavLoading } =
    useMutation(
      [QUERY_KEYS.FAVORITES],
      (id: number) => favoritesService.postSetFav(id),
      {
        onSuccess: async () => {
          if (activity) {
            setActivity({ ...activity, isFav: activity.isFav ? false : true })
            setActivities(
              activities.map(activityEl =>
                activityEl.id === activity.id
                  ? { ...activityEl, isFav: activity.isFav ? false : true }
                  : activityEl,
              ),
            )
          }
        },
        onError: (error: any) => {
          if (isAxiosError(error)) {
            console.log(error.response?.data)
          }
          getError(error)
        },
      },
    )
  const handleFavorite = async (id: number) => {
    await mutationAddToFav(id)
  }
  return { handleFavorite, isFavLoading }
}
