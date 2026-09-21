'use client';

import { useFavorites } from '@/contexts/FavoritesContext';

import PageIntro from '@/components/ui/PageIntro';
import Product from '@/components/ui/Product';

export default function Wishlist() {
  const { favorites } = useFavorites();

  return (
    <>
      <PageIntro
        title="Wishlist"
        description="Aquí vienen las piezas que te gustan."
      />
      {favorites.length === 0 ? (
        <p className="text-center text-[14px] mt-20">
          No tienes productos en tu lista de deseos.
        </p>
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
    </>
  );
}
