import type { Category } from '@/types/categories';

import { getCategories } from '@/services/categories';

import Carousel, { type ProductCategory } from '@/components/ui/Carousel';

/**
 * Transforma una categoría de producto en
 * el formato requerido por el componente de
 * Carousel
 */
function mapCategoryToCarousel(category: Category): ProductCategory {
  return {
    name: category.name,
    image: category.highlightImage,
    alt: category.name,
    href: `/categories/${category.slug}`,
  };
}

export default async function CarouselHome() {
  const response = await getCategories();

  const categories = response.results.map(mapCategoryToCarousel);

  return <Carousel className="py-10 lg:py-[105px]" categories={categories} />;
}
