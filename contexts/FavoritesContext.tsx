'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import type { FavoriteProduct } from '@/types/favorites';

import { STORAGE_KEY } from '@/constants/store';

interface FavoritesContextValue {
  favorites: FavoriteProduct[];
  addFavorite: (product: FavoriteProduct) => void;
  removeFavorite: (sku: string) => void;
  isFavorite: (sku: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(
  undefined,
);

export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favorites, setFavorites] = useState<FavoriteProduct[]>(() => {
    if (typeof window === 'undefined') {
      return [];
    }

    const storedFavorites = localStorage.getItem(STORAGE_KEY);

    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(favorites),
    );
  }, [favorites]);

  const addFavorite = (product: FavoriteProduct) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.some((favorite) => favorite.sku === product.sku)) {
        return currentFavorites;
      }

      return [...currentFavorites, product];
    });
  };

  const removeFavorite = (sku: string) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((favorite) => favorite.sku !== sku),
    );
  };

  const isFavorite = (sku: string) =>
    favorites.some((favorite) => favorite.sku === sku);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      'useFavorites necesita ser usado dentro de un FavoritesProvider',
    );
  }

  return context;
}