import Link from 'next/link';

import Product from '@/components/ui/Product';
import Pagination from '@/components/ui/Pagination';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <>
      <div className="bg-amber-500 pt-3 pr-6 pb-6 pl-6 lg:pt-12 lg:pr-20 lg:pb-8 lg:pl-20">
        <h1 className="font-normal text-[46px] leading-[46px]">Mesas</h1>
        <p className="font-normal text-[15px] leading-5 lg:w-[644px] mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-[60px]">
        {Array.from({ length: 4 }, (_, index) => (
          <Product key={index} />
        ))}
      </section>
      <Pagination currentPage={2} totalPages={2} />

      <ul>
        <li>
          <Link href="/product/litto-table-made-from-oak-veneer/">Litto</Link>
        </li>
        <li>
          <Link href="/product/tarsel-coffee-table-in-tempered-glass-with-walnut-veneer-tray-with-brushed-stainless-steel-structure">
            Tarsel
          </Link>
        </li>
        <li>
          <Link href="/product/dolven-coffee-table-in-brown-glass-and-brushed-steel">
            Dolven
          </Link>
        </li>
      </ul>
    </>
  );
}
