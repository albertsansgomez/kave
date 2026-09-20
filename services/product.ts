import type { Product } from '@/types/product';

import { getProductMock } from '@/services/mock/product';
import { PRODUCT_ENDPOINT } from '@/services/api/product';

import { USE_MOCK } from '@/constants/mock';

export async function getProduct({ sku }: { sku: string }): Promise<Product> {
  if (USE_MOCK) {
    return getProductMock();
  }

  const response = await fetch(`${PRODUCT_ENDPOINT}${sku}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  return response.json();
}
