import type { Product, ProductImage } from './product';

export type Products = Omit<
  Product,
  | 'mainImage'
  | 'collection'
  | 'tags'
  | 'documents'
  | 'storytellings'
  | 'videos'
  | 'dimensionsImage'
  | 'material'
> & {
  mainImage: ProductImage | null;
  dimensionsImage: ProductImage | null;
  collection: string | null;
  tags: ProductTag[];
  documents: unknown[];
  material: ProductMaterial | null;
  storytellings: unknown[];
  videos: unknown[];
};

export interface ProductTag {
  label: string;
  variant: string;
  textStyle: string;
}

export interface ProductMaterial {
  label: string;
  imageUrl: string;
  description: string;
  maintenanceInstructions: string;
  certifications: unknown[];
  code: string;
}
