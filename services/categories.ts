import type { Response } from '@/types/response';
import type { Categories } from '@/types/categories';

import { getCategoriesMock } from '@/services/mock/categories';

import { CATEGORIES_ENDPOINT } from '@/services/api/categories';

const USE_MOCK = true;

export async function getCategories(
  { page }: { page: number },
): Promise<Response<Categories>> {
  if (USE_MOCK) {
    return getCategoriesMock(page);
  }

  const response = await fetch(`${CATEGORIES_ENDPOINT}?page=${page}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status}`);
  }

  return response.json();
}
