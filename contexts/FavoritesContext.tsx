'use client';

import {
  createContext,
  useContext,
  useSyncExternalStore,
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

/**
 * Snapshot vacío estable.
 *
 * Es importante que sea una referencia constante porque
 * useSyncExternalStore compara los snapshots por referencia.
 */
const EMPTY_FAVORITES: FavoriteProduct[] = [];

let favoritesStore: FavoriteProduct[] | undefined;

const listeners = new Set<() => void>();

/**
 * Obtiene el estado actual de favoritos en el cliente.
 */
function getFavoritesSnapshot(): FavoriteProduct[] {
  if (favoritesStore === undefined) {
    const storedFavorites = localStorage.getItem(STORAGE_KEY);

    favoritesStore = storedFavorites
      ? JSON.parse(storedFavorites)
      : EMPTY_FAVORITES;
  }

  return favoritesStore ?? EMPTY_FAVORITES;
}

/**
 * Snapshot utilizado durante SSR.
 *
 * Debe devolver siempre la misma referencia.
 */
function getServerSnapshot(): FavoriteProduct[] {
  return EMPTY_FAVORITES;
}

/**
 * Se suscribe a los cambios del store.
 */
function subscribe(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

/**
 * Actualiza el store y persiste los favoritos.
 */
function updateFavorites(favorites: FavoriteProduct[]) {
  favoritesStore = favorites;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));

  listeners.forEach((listener) => listener());
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const favorites = useSyncExternalStore(
    subscribe,
    getFavoritesSnapshot,
    getServerSnapshot,
  );

  const addFavorite = (product: FavoriteProduct) => {
    if (favorites.some((favorite) => favorite.sku === product.sku)) {
      return;
    }

    updateFavorites([...favorites, product]);
  };

  const removeFavorite = (sku: string) => {
    updateFavorites(favorites.filter((favorite) => favorite.sku !== sku));
  };

  const isFavorite = (sku: string) => {
    return favorites.some((favorite) => favorite.sku === sku);
  };

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
