import Link from 'next/link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <>
      <div className="bg-amber-500 pt-12 pr-20 pb-8 pl-20">
        <h1 className="font-normal text-[46px] leading-[46px]">
          Categoria: Mesas
        </h1>
        <p className="font-normal text-[15px] leading-5 w-[644px] mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

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
