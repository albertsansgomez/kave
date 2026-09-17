import Link from 'next/link';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Categoria: {slug}</h1>
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
    </main>
  );
}
