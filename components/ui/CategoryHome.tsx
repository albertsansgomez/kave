import type { Categories } from '@/types/categories';

import { getCategories } from '@/services/categories';

import Pagination from '@/components/ui/Pagination';
import Category from '@/components/ui/Category';

interface CategoryHomeProps {
  currentPage: number;
}

export default async function CategoryHome({
  currentPage = 1,
}: CategoryHomeProps) {
  let categories: Categories[] = [];
  let hasError = false;

  try {
    const response = await getCategories();
    categories = response.results;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    hasError = true;
  }

  if (hasError) {
    return (
      <section className="py-10 px-6 lg:py-[105px] lg:px-17">
        <p>Error loading categories</p>
      </section>
    );
  }

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-[37px] lg:gap-x-2 lg:gap-y-[60px]">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </section>

      <Pagination
        className="mt-[60px] mb-[56px]"
        currentPage={currentPage}
        totalPages={7}
      />
    </>
  );
}
