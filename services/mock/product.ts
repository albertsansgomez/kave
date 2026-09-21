import type { Product } from '@/types/product';

import { product } from './product-data';

export async function getProductMock(): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return product;
}
