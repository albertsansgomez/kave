import { Suspense } from 'react';

import Hero from '@/components/ui/Hero';
import Stories, { type StoryItem } from '@/components/ui/Stories';
import CarouselHome from '@/components/ui/CarouselHome';
import CategoryHome from '@/components/ui/CategoryHome';

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

export default function Home() {
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

      {/**
       * La sección de categorías si gestiona la páginación.
       * En el diseño proporcionado en el Figma no existe
       * pero he agregado el listado con la paginación para
       * permitir la navegación entre las diferentes páginas
       * de categorías.
       */}
      <Suspense fallback={<>Loading CategoryHome</>}>
        <CategoryHome />
      </Suspense>

      <Stories stories={stories} />
    </>
  );
}
