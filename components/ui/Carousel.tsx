'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ProductCategory {
  name: string;
  image: string;
  alt: string;
  href: string;
}

interface CarouselProps {
  categories: ProductCategory[];
}

export default function Carousel({ categories }: CarouselProps) {
  const carouselRef = useRef<HTMLUListElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  /**
   * Actualiza el estado de las flechas en
   * función de la posición actual del scroll.
   */
  const updateScrollState = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = carousel;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const onClick = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const firstCard = carousel.querySelector('li');

    if (!firstCard) {
      return;
    }

    /**
     * Calculamos el desplezamiento por
     * lo que ocupa el item del carrusel.
     */
    const gap = 8;
    const amount = firstCard.getBoundingClientRect().width + gap;

    carousel.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  /**
   * Gestión del estado de desplazamiento
   * del carrusel.
   *
   * Necesitamos conocer los desplazamientos
   * realizados mediante swipe, trackpad o
   * scroll manual, no solamente los realizados
   * mediante las flechas.
   */
  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    updateScrollState();

    carousel.addEventListener('scroll', updateScrollState);
    return () => {
      carousel.removeEventListener('scroll', updateScrollState);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="flex items-center justify-between px-6 lg:px-17">
        <h2>Pieces designed for everyday life</h2>

        <div className="flex gap-6">
          <button
            type="button"
            aria-label="Previous"
            disabled={!canScrollLeft}
            onClick={() => onClick('left')}
            className="disabled:opacity-30"
          >
            ←
          </button>

          <button
            type="button"
            aria-label="Next"
            disabled={!canScrollRight}
            onClick={() => onClick('right')}
            className="disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>

      <ul
        ref={carouselRef}
        className="scrollbar-none flex gap-2 overflow-x-auto px-6 lg:px-17"
      >
        {categories.map((category) => (
          <li
            key={category.name}
            className="w-[250px] min-w-[250px] shrink-0 lg:w-[calc((100vw-112px)/4.3)] lg:min-w-[calc((100vw-112px)/4.3)]"
          >
            <Link href={category.href}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(min-width: 1024px) 23vw, 50vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-4 font-kave-text text-base leading-[100%]">
                {category.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
