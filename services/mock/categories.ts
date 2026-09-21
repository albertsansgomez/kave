import type { Categories } from '@/types/categories';
import type { Response } from '@/types/response';

import { CATEGORIES_ENDPOINT } from '../api/categories';

import { categories } from './categories-data';

const PAGE_SIZE = 20;

export async function getCategoriesMock(
  page: number,
): Promise<Response<Categories>> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const offset = (page - 1) * PAGE_SIZE;

  const results = categories.slice(offset, offset + PAGE_SIZE);

  const totalPages = Math.ceil(categories.length / PAGE_SIZE);

  return {
    count: categories.length,
    next: page < totalPages ? `${CATEGORIES_ENDPOINT}?page=${page + 1}` : null,
    previous: page > 1 ? `${CATEGORIES_ENDPOINT}?page=${page - 1}` : null,
    results,
  };
}
