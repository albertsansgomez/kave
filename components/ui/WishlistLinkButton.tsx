'use client';

import type { FavoriteProduct } from '@/types/favorites';

import { useFavorites } from '@/contexts/FavoritesContext';
import { cn } from '@/utils/cn';

import Heart from '@/components/icons/Heart.svg';

interface WishlistLinkButtonProps {
  product: FavoriteProduct;
  className?: string;
}

export default function WishlistLinkButton({
  product,
  className,
}: WishlistLinkButtonProps) {
  const { sku } = product;

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const isActive = isFavorite(sku);

  const heartClassName = cn(
    className,
    'h-6 w-6 cursor-pointer transition-colors',
    {
      'text-[#FF5A5F] [--heart-fill:#FF5A5F] hover:text-[#E53935] hover:[--heart-fill:#E53935]':
        isActive,
      'text-[#6B6A66] [--heart-fill:#FFFFFF] hover:text-[#1F1F1C] hover:[--heart-fill:#FFFFFF]':
        !isActive,
    },
  );

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (isActive) {
      removeFavorite(sku);
      return;
    }

    addFavorite(product);
  };

  return (
    <button
      type="button"
      aria-label={
        isActive
          ? 'Eliminar de la lista de deseados'
          : 'Agregar a la lista de deseados'
      }
      className={heartClassName}
      onClick={onClick}
    >
      <Heart className="h-full w-full" />
    </button>
  );
}
