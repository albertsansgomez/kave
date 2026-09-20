import { Suspense } from 'react';

import Hero from '@/components/ui/Hero';
import Stories, { type StoryItem } from '@/components/ui/Stories';

import CarouselHome from '@/components/ui/CarouselHome';
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
      <Stories stories={stories} />
    </>
  );
}
