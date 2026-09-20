import Image from 'next/image';
import Link from 'next/link';

export default function Category() {
  return (
    <Link href="/product/tarsel-coffee-table-in-tempered-glass-with-walnut-veneer-tray-with-brushed-stainless-steel-structure">
      <article>
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="https://picsum.photos/375/300"
            fill
            alt="Lorem ipsum dolor sit amet"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-[6px] pt-2 pr-2 pl-2">
          <h3 className="mt-4 font-kave-text text-base leading-[100%]">Artis</h3>
        </div>
      </article>
    </Link>
  );
}
