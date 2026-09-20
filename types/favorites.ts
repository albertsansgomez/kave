import type { Products } from './products';

export type FavoriteProduct = Pick<
  Products,
  'sku' | 'title' | 'slug' | 'price' | 'mainImage'
>;