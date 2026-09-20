import Image from 'next/image';
import Link from 'next/link';

import type { Categories } from '@/types/categories';

interface CategoryProps {
  category: Categories;
}

export default function Category({
  category: { name, highlightImage, seoDescription },
}: CategoryProps) {
  return (
    <Link href={`/category/${name}`}>
      <article>
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={highlightImage}
            fill
            alt={seoDescription}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-[6px] pt-2 pr-2 pl-2">
          <h3 className="mt-4 font-kave-text text-base leading-[100%]">
            {name}
          </h3>
        </div>
      </article>
    </Link>
  );
}
