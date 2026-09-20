import type { Products } from '@/types/products';

import { getProducts } from '@/services/products';

import Pagination from '@/components/ui/Pagination';
import ProductComponent from '@/components/ui/Product';
import { PAGINATION_COUNT } from '@/constants/pagination';

interface ProductList {
  currentPage: number;
}

export default async function ProductList({ currentPage = 1 }: ProductList) {
  let products: Products[] = [];
  let count = 0;
  let hasError = false;

  try {
    const response = await getProducts({ page: currentPage });

    products = response.results;
    count = response.count;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    hasError = true;
  }

  if (hasError) {
    return (
      <section className="py-10 px-6 lg:py-[105px] lg:px-17">
        <p>Error loading products</p>
      </section>
    );
  }

  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-[37px] lg:gap-x-2 lg:gap-y-[60px]">
        {products.map((product) => (
          <ProductComponent key={product.sku} product={product} />
        ))}
      </section>
      <Pagination
        anchorLink="#products-list"
        className="mt-[60px] mb-[56px]"
        currentPage={currentPage}
        totalPages={Math.ceil(count / PAGINATION_COUNT)}
      />
    </>
  );
}
