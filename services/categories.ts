import type { Response } from '@/types/response';
import type { Categories } from '@/types/categories';

import { getCategoriesMock } from '@/services/mock/categories';

import { CATEGORIES_ENDPOINT } from '@/services/api/categories';

const USE_MOCK = true;

export async function getCategories(
  url: string = CATEGORIES_ENDPOINT,
): Promise<Response<Categories>> {
  if (USE_MOCK) {
    return getCategoriesMock(url);
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status}`);
  }

  return response.json();
}
