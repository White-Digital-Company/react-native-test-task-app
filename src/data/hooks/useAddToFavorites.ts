import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import api from 'data/api/AxiosApi';
import { useEffect } from 'react';

const useAddToFavorites = () => {
  const { isPending, error, data, mutate, isSuccess } = useMutation<number, AxiosError, number>({
    mutationFn: (id: number) => api.post(`favorites`, { id }).then(response => response),
  });

  const parsedError: string | undefined | null = error?.response?.data?.error?.message ?? error?.message;

  const addToFavorites = (id: number) => {
    mutate(id);
  };

  useEffect(() => {
    if (parsedError) {
      console.log(`Error: useAddToFavorites - ${parsedError}`);
    }
  }, [parsedError]);

  return { isPending, error, data, parsedError, addToFavorites, isSuccess };
};

export default useAddToFavorites;
