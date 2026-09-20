import { Suspense } from 'react';

import { type Category } from '@/types/category';

import { getCategory } from '@/services/category';

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


  let category: Category | null = null;
  let hasError = false;

  try {
    category = await getCategory({ slug });

  } catch (error) {
    console.error('Failed to fetch products:', error);
    hasError = true;
  }


  if (hasError || !category) {
    return (
      <section className="py-10 px-6 lg:py-[105px] lg:px-17">
        <p>Error loading products</p>
      </section>
    );
  }
  
  const { name, description } = category;

  return (
    <>
      <PageIntro
        title={name}
        description={description}
      />
      <Suspense fallback={<>Loading CategoryHome</>}>
        <ProductList currentPage={currentPage} />
      </Suspense>
    </>
  );
}
