'use client';

import { useFavorites } from '@/contexts/FavoritesContext';

import PageIntro from '@/components/ui/PageIntro';
import ProductComponent from '@/components/ui/Product';

export default function Wishlist() {
  const { favorites } = useFavorites();

  return (
    <>
      <PageIntro
        title="Wishlist"
        description="Aquí vienen las piezas que te gustan."
      />
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-[37px] lg:gap-x-2 lg:gap-y-[60px]">
        {favorites.map((product, index) => (
          <ProductComponent
            key={product.sku}
            priority={index <= 4}
            product={product}
          />
        ))}</section>
    </>
  );
}
