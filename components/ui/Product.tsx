import Image from 'next/image';
import Link from 'next/link';

export default function Product() {
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
          <h3 className="text-[14px] font-semibold leading-5">Artis</h3>
          <p className="font-normal text-[12px] leading-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="font-[670] text-[14px] leading-[20px]">399 €</p>
        </div>
      </article>
    </Link>
  );
}
