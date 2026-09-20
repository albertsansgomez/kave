import Image from 'next/image';
import Link from 'next/link';

import type { Product } from '@/types/product';

import WishlistLinkButton from './WishlistLinkButton';

interface ProductProps {
  product: Product;
}

export default function Product({ product }: ProductProps) {
  const { title, description, price } = product;

  return (
    <Link href="/product/tarsel-coffee-table-in-tempered-glass-with-walnut-veneer-tray-with-brushed-stainless-steel-structure">
      <article>
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={product?.mainImage?.url ?? '/images/no-image.png'}
            fill
            alt={description}
            className="object-cover"
          />
          <WishlistLinkButton
            className="absolute top-3 right-3 z-10"
            isActive={true}
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
