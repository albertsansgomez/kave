import { Suspense } from 'react';

import Hero from '@/components/ui/Hero';
import Stories, { type StoryItem } from '@/components/ui/Stories';
import CarouselHome from '@/components/ui/CarouselHome';
import Pagination from '@/components/ui/Pagination';
import Category from '@/components/ui/Category';

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
      <Suspense fallback={<>Loading</>}>
        <CarouselHome />
      </Suspense>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-[37px] lg:gap-x-2 lg:gap-y-[60px] px-6 lg:px-17">
        {Array.from({ length: 4 }, (_, index) => (
          <Category key={index} />
        ))}
      </section>

      <Pagination
        className="mt-[60px] mb-[56px]"
        currentPage={1}
        totalPages={7}
      />

      <Stories stories={stories} />
    </>
  );
}
