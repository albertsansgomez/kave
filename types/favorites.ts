import type { Products } from './products';

export type FavoriteProduct = Pick<
  Products,
  'sku' | 'title' | 'description' | 'slug' | 'price' | 'mainImage'
>;
