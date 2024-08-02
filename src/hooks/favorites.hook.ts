import { isAxiosError } from 'axios'
import { useMutation } from 'react-query'
import { favoritesService } from 'services/favorites/favorites.service'
import { QUERY_KEYS } from 'shared/consts/app-keys.const'
import { getError } from '../utils/get-error.util'

/* eslint-disable unicorn/consistent-function-scoping */
type TUseFavoritesReturn = {
  handleAddToFav: (id: number) => Promise<void>
  handleDelFromFav: (id: number) => Promise<void>
}
export const UseFavorites = (): TUseFavoritesReturn => {
  const { mutateAsync: mutationAddToFav } = useMutation(
    [QUERY_KEYS.FAVORITES],
    (id: number) => favoritesService.postSetFav(id),
    {
      onSuccess: async () => {},
      onError: (error: any) => {
        if (isAxiosError(error)) {
          console.log(error.response?.data)
        }
        getError(error)
      },
    },
  )
  const handleAddToFav = async (id: number) => {
    await mutationAddToFav(id)
  }
  const handleDelFromFav = async (id: number) => {}
  return { handleAddToFav, handleDelFromFav }
}
