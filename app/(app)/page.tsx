import { Suspense } from 'react';

import Hero from '@/components/ui/Hero';
import Stories, { type StoryItem } from '@/components/ui/Stories';
import CarouselHome from '@/components/ui/CarouselHome';
import CategoryHome from '@/components/ui/CategoryHome';
import PageIntro from '@/components/ui/PageIntro';

/**
 * Listado de historias destacadas.
 */
const stories: StoryItem[] = [
  {
    title: 'Seasons of Change',
    label: 'New in',
    href: '#',
    image: '/images/home_story_1.jpg',
    alt: 'Seasons of Change',
  },
  {
    title: 'Vivir entre dentro y fuera',
    label: 'Descubrir',
    href: '#',
    image: '/images/home_story_2.png',
    alt: 'Vivir entre dentro y fuera',
  },
  {
    title: 'El valor de lo que permanece',
    label: 'Selected Collection',
    href: '#',
    image: '/images/home_story_3.png',
    alt: 'El valor de lo que permanece',
  },
];

interface PageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function Home({ searchParams }: PageProps) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  return (
    <>
      <Hero />

      {/**
       * El carrusel muestra inicialmente la primera
       * página de categorías. No gestiona ningún tipo
       * de paginación. Se limita únicamente el carrusel
       * diseñado en el Figma suministrado.
       */}
      <Suspense fallback={<>Loading CarouselHome</>}>
        <CarouselHome />
      </Suspense>
      <a id="categories-list" />
      <PageIntro
        title="Listado de categorías"
        description={
          <div className="flex flex-col gap-5">
            <p>
              Explora todas las categorías disponibles a través de este listado
              paginado.
            </p>
            <p>
              Aunque esta navegación no aparece definida explícitamente en el
              diseño original de la Home, se ha incorporado para facilitar el
              acceso al catálogo completo de categorías, manteniendo la estética
              y el look & feel de la propuesta visual.
            </p>
            <p>
              El carrusel superior ofrece una primera selección visual, mientras
              que este listado permite descubrir y navegar cómodamente por el
              resto de categorías.
            </p>
          </div>
        }
      />
      {/**
       * La sección de categorías si gestiona la páginación.
       * En el diseño proporcionado en el Figma no existe
       * pero he agregado el listado con la paginación para
       * permitir la navegación entre las diferentes páginas
       * de categorías.
       */}
      <Suspense fallback={<>Loading CategoryHome</>}>
        <CategoryHome currentPage={currentPage} />
      </Suspense>

      <Stories stories={stories} />
    </>
  );
}
