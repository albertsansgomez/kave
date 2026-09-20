import type { Category } from '@/types/categories';

import { getCategories } from '@/services/categories';

import Carousel, { type ProductCategory } from '@/components/ui/Carousel';

/**
 * Transforma una categoría de producto en
 * el formato requerido por el componente de Carousel.
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
  let categories: ProductCategory[] = [];
  let hasError = false;

  try {
    const response = await getCategories();
    categories = response.results.map(mapCategoryToCarousel);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    hasError = true;
  }

  if (hasError) {
    return (
      <section className="py-10 px-6 lg:py-[105px] lg:px-17">
        <p>Error loading categories</p>
      </section>
    );
  }

  return <Carousel className="py-10 lg:py-[105px]" categories={categories} />;
}
