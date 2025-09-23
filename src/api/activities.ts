import { Data } from '@/types/activity';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Config from 'react-native-config';

const API = Config.API;

const fetchActivities = async () => {
  const res = await fetch(`${API}/activities`);  
  if (!res.ok) throw new Error('error fetch activities');
  return res.json() as Promise<Data[]>;
};

export const useActivities = () => {
  return useQuery<Data[]>({
    queryKey: ['activities'],
    queryFn: fetchActivities,
  });
};

const addFavorite = async (id: number) => {
  const res = await fetch(`${API}/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  if (!res.ok) throw new Error('error to add favorite');
  return res.json();
};

export const useAddFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activities'] });
    },
  });
};
