import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import api from 'data/api/AxiosApi';
import { IActivity } from 'data/models/IActivity';
import { useEffect } from 'react';

const useGetActivities = () => {
  const { data, isLoading, error, refetch, isFetching } = useQuery<IActivity[], AxiosError>({
    queryKey: ['activities'],
    queryFn: () => api.get<IActivity[]>(`/activities`).then(dto => dto.data),
  });

  const parsedError: string | undefined | null = error?.response?.data?.error?.message ?? error?.message;

  useEffect(() => {
    if (parsedError) {
      console.log(`Error: useGetActivities - ${parsedError}`);
    }
  }, [parsedError]);

  return {
    data,
    isLoading,
    error,
    refetch,
    isFetching,
  };
};

export default useGetActivities;
