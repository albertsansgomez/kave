import type { Response } from '@/types/response';
import type { Products } from '@/types/products';

import { PRODUCTS_ENDPOINT } from '../api/products';

import { products } from './products-data';

const PAGE_SIZE = 20;

export async function getProductsMock(
  page: number,
): Promise<Response<Products>> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const offset = (page - 1) * PAGE_SIZE;

  const results = products.slice(offset, offset + PAGE_SIZE);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  return {
    count: products.length,
    next: page < totalPages ? `${PRODUCTS_ENDPOINT}?page=${page + 1}` : null,
    previous: page > 1 ? `${PRODUCTS_ENDPOINT}?page=${page - 1}` : null,
    results,
  };
}
