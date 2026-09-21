import Image from 'next/image';
import Link from 'next/link';

import type { Products } from '@/types/products';
import type { FavoriteProduct } from '@/types/favorites';

import WishlistLinkButton from './WishlistLinkButton';

interface ProductProps {
  product: Products;
  priority?: boolean;
}

export default function Product({ product, priority = false }: ProductProps) {
  const { title, description, price, slug, sku } = product;

  const favoriteProduct: FavoriteProduct = {
    sku,
    title,
    slug,
    price,
    mainImage: product.mainImage,
  };

  return (
    <Link href={`/product/${slug}-${sku}`}>
      <article>
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={product?.mainImage?.url ?? '/images/no-image.png'}
            fill
            alt={description}
            sizes="(max-width: 768px) 50vw, 33.33vw"
            priority={priority}
            className="object-cover"
          />
          <WishlistLinkButton
            className="absolute top-3 right-3 z-10"
            product={favoriteProduct}
          />
        </div>
        <div className="flex flex-col gap-[6px] pt-2 pr-2 pl-2">
          <h3 className="text-[14px] font-semibold leading-5">{title}</h3>
          <p className="font-normal text-[12px] leading-[18px] line-clamp-2 lg:line-clamp-1">
            {description}
          </p>
          <p className="font-[670] text-[14px] leading-[20px]">{price} €</p>
        </div>
      </article>
    </Link>
  );
}
