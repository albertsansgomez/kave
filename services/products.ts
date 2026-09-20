import type { Response } from '@/types/response';
import type { Products } from '@/types/products';

import { getProductsMock } from '@/services/mock/products';
import { PRODUCTS_ENDPOINT } from '@/services/api/products';

import { USE_MOCK } from '@/constants/mock';

export async function getProducts({
  page,
}: {
  page: number;
}): Promise<Response<Products>> {
  if (USE_MOCK) {
    return getProductsMock(page);
  }

  const response = await fetch(`${PRODUCTS_ENDPOINT}?page=${page}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}
