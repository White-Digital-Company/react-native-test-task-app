import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import api from 'data/api/AxiosApi';
import { IActivities } from 'data/models/IActivities';
import { useEffect } from 'react';

const useGetActivities = () => {
  const { data, isLoading, error, refetch, isFetching } = useQuery<IActivities, AxiosError>({
    queryKey: ['activities'],
    queryFn: () => api.get(`/activities`).then(dto => dto.data.data),
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
