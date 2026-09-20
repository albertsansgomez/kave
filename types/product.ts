export interface Product {
  sku: string;
  title: string;
  description: string;
  slug: string;
  stock: number;
  price: number;
  ecoPart: number;
  salePrice: number | null;
  dimensionsImage: string | null;
  minUnitsToSell: number;
  images: ProductImage[];
  mainImage: ProductImage | null;
  collection: string | null;
  categories: string[];
  tags: ProductTag[];
  isCustomisable: boolean;
  attributes: ProductAttributes;
  brothers: ProductBrothers;
  analyticsInfo: ProductAnalyticsInfo;
  isPremium: boolean;
  material: string | null;
  secondaryMaterial: string | null;
  materialHighlight: string | null;
  requiresMaintenance: boolean;
  teaserDescription: string;
  teaserAssets: ProductTeaserAssets;
  isTopHeavy: boolean;
  augmentedReality: unknown | null;
  returnPolicy: string;
  bulletPoints: string[];
}

export interface ProductImage {
  code: string;
  url: string;
  type: string;
  order: number;
}

export interface ProductTag {
  label: string;
  variant: string;
  textStyle: string;
}

export interface ProductAttributes {
  width: ProductAttribute<number>;
  height: ProductAttribute<number>;
  length: ProductAttribute<number>;
  sizes: ProductAttribute<string>;
  technique: ProductAttribute<string | null>;
  edition: ProductAttribute<string | null>;
  descriptiveQuote: ProductAttribute<string | null>;
  descriptiveQuoteAuthor: ProductAttribute<string | null>;
  unpackingSuggestions: ProductAttribute<string | null>;
  structuredMaterials: ProductAttribute<string | null>;
}

export interface ProductAttribute<T> {
  label: string;
  value: T;
}

export interface ProductBrothers {
  sizes: unknown[];
  colors: unknown[];
}

export interface ProductAnalyticsInfo {
  effectivePrice: string;
  hasMatchMe: boolean;
  titleEn: string;
}

export interface ProductTeaserAssets {
  urlMobile: string | null;
  urlDesktop: string | null;
}
