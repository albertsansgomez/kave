import type { Product, ProductImage } from './product';

export type Products = Omit<
  Product,
  'mainImage' | 'collection' | 'tags' | 'documents' | 'storytellings' | 'videos'
> & {
  mainImage: ProductImage | null;
  collection: string | null;
  tags: ProductTag[];
};

export interface ProductTag {
  label: string;
  variant: string;
  textStyle: string;
}
