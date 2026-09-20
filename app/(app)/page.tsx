import Link from 'next/link';

import Hero from '@/components/ui/Hero';
import Stories, { type StoryItem } from '@/components/ui/Stories';
import Carousel, { type ProductCategory } from '@/components/ui/Carousel';

/**
 * Listado de categorías de productos.
 */
const categories: ProductCategory[] = [
  {
    name: 'Sofas',
    image: 'https://picsum.photos/320/432',
    alt: 'Sofas',
    href: '/sofa',
  },
  {
    name: 'Tables',
    image: 'https://picsum.photos/320/432',
    alt: 'Tables',
    href: '/tables',
  },
  {
    name: 'Chairs',
    image: 'https://picsum.photos/320/432',
    alt: 'Chairs',
    href: '/chairs',
  },
  {
    name: 'TV stands',
    image: 'https://picsum.photos/320/432',
    alt: 'TV stands',
    href: '/tv-stands',
  },
  {
    name: 'Shelves and shelving units',
    image: 'https://picsum.photos/320/432',
    alt: 'Shelves and shelving units',
    href: '/shelves-and-shelving-units',
  },
  {
    name: 'Decor and accessories',
    image: 'https://picsum.photos/320/432',
    alt: 'Decor and accessories',
    href: '/decor-and-accessories',
  },
  {
    name: 'Soft furnishings',
    image: 'https://picsum.photos/320/432',
    alt: 'Soft furnishings',
    href: '/soft-furnishings',
  },
];

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
      <Carousel className="py-10 lg:py-[105px]" categories={categories} />
      <Stories stories={stories} />
      <section>
        <ul>
          <li></li>
          <li>
            <Link href="/mesas">mesas</Link>
          </li>
          <li>
            <Link href="/sofas">sofas</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
