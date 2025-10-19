import { QueryClient } from '@tanstack/react-query'

export const defaultQueryConfig = {
  staleTime: 1000 * 60 * 5,
  gcTime: 1000 * 60 * 30,
  retry: 3,
  refetchOnWindowFocus: false,
  refetchOnMount: true,
  refetchOnReconnect: true,
}

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: defaultQueryConfig,
      mutations: {
        retry: 1,
      },
    },
  })
}

export const getQueryConfig = (overrides = {}) => ({
  ...defaultQueryConfig,
  ...overrides,
})
