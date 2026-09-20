import type { Category } from '@/types/category';

import { getCategoryMock } from '@/services/mock/category';
import { CATEGORY_ENDPOINT } from '@/services/api/category';

import { USE_MOCK } from '@/constants/mock';

export async function getCategory({
  slug,
}: {
  slug: string;
}): Promise<Category> {
  if (USE_MOCK) {
    return getCategoryMock();
  }

  const response = await fetch(`${CATEGORY_ENDPOINT}/${slug}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status}`);
  }

  return response.json();
}
