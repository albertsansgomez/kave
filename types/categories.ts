import type { CategoryChild, Category } from "./category";

export type CategorySummary = Pick<
  CategoryChild,
  'id' | 'pimCode' | 'name' | 'slug' | 'highlightImage'
>;

export type Categories = Pick<
  Category,
  'id' | 'pimCode' | 'name' | 'description' | 'slug' | 'highlightImage'
> & {
  seoTitle: Category['seo']['seoTitle'];
  seoDescription: Category['seo']['seoDescription'];
  secondDescription: Category['seo']['seoSecondDescription'];
  breadcrumbs: string;
  mainChildren: CategorySummary[];
  extraChildren: CategorySummary[];
  mainParent: CategorySummary | null;
  extraParents: CategorySummary[];
};