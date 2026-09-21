import type { Category } from '@/types/category';

import { category } from './category-data';

export async function getCategoryMock(): Promise<Category> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return category;
}
