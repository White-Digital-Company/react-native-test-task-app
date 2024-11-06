import { onError } from './errorHandler'
import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      retry: false,
    },
    mutations: {
      onError,
    },
  },
})
