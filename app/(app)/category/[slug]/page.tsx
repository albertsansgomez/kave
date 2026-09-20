import { Suspense } from 'react';

import PageIntro from '@/components/ui/PageIntro';
import ProductList from '@/components/ui/ProductList';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function CategoryPage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  return (
    <>
      <PageIntro
        title="Mesas"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <Suspense fallback={<>Loading CategoryHome</>}>
        <ProductList currentPage={currentPage} />
      </Suspense>
    </>
  );
}
