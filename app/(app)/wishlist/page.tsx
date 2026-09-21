'use client';

import { useFavorites } from '@/contexts/FavoritesContext';

import PageIntro from '@/components/ui/PageIntro';
import Product from '@/components/ui/Product';
import NoData from '@/components/ui/NoData';

export default function Wishlist() {
  const { favorites } = useFavorites();

  return (
    <div className="flex min-h-[calc(100dvh-64px)] flex-col">
      <PageIntro
        title="Wishlist"
        description="Aquí vienen las piezas que te gustan."
      />
      {favorites.length === 0 ? (
        <NoData
          className="flex-1"
          message="No tienes productos en tu lista de deseos."
        />
      ) : (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-[37px] lg:gap-x-2 lg:gap-y-[60px]">
          {favorites.map((product, index) => (
            <Product
              key={product.sku}
              priority={index <= 4}
              product={product}
            />
          ))}
        </section>
      )}
    </div>
  );
}
