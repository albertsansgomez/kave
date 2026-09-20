import type { Categories } from '@/types/categories';

import { getCategories } from '@/services/categories';

import Pagination from '@/components/ui/Pagination';
import Category from '@/components/ui/Category';
import { PAGINATION_COUNT } from '@/constants/pagination';

interface CategoryHomeProps {
  currentPage: number;
}

export default async function CategoryHome({
  currentPage = 1,
}: CategoryHomeProps) {
  let categories: Categories[] = [];
  let count = 0;
  let hasError = false;

  try {
    const response = await getCategories({ page: currentPage });

    categories = response.results;
    count = response.count;
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
        anchorLink="#categories-list"
        className="mt-[60px] mb-[56px]"
        currentPage={currentPage}
        totalPages={Math.ceil(count / PAGINATION_COUNT)}
      />
    </>
  );
}
