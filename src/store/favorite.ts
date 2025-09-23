import { create } from 'zustand'

interface FavoriteState {
  favorite: number[];
  addFavorite: (id: number) => void;
}

export const useFavorite = create<FavoriteState>((set) => ({
  favorite: [],
  addFavorite: (id) =>
    set((state) => ({
      favorite: [...state.favorite, id],
    })),
}));
