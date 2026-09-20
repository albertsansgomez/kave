'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/utils/cn';

import Arrow from '@/components/icons/Arrow.svg';

export interface CarouselItem {
  name: string;
  image: string;
  alt: string;
  href: string;
}

interface CarouselProps {
  className?: string;
  items: CarouselItem[];
}

/**
 * Como el diseño no especificaba su
 * funcionamiento, se ha definido una
 * navegación horizontal intuitiva:
 *
 * - Avance de una tarjeta por cada clic en
 *   las flechas.
 * - Soporte de scroll/swipe nativo en
 *   dispositivos táctiles.
 * - Las flechas se deshabilitan al llegar
 *   al inicio o al final.
 * - La distancia de desplazamiento se adapta
 *   al tamaño responsive de las tarjetas.
 *
 * Se utilizan APIs nativas del navegador
 * para evitar una dependencia externa,
 * ya que el comportamiento requerido es
 * sencillo.
 */
export default function Carousel({ items, className }: CarouselProps) {
  const carouselRef = useRef<HTMLUListElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const carouselClassName = cn('w-full overflow-hidden bg-white', className);

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
    <section aria-labelledby="carousel-title" className={carouselClassName}>
      <div className="flex items-center justify-between px-6 lg:px-17">
        <h2
          id="carousel-title"
          className="font-kave-heading text-[20px] tracking-[-5%] pt-5 pb-5"
        >
          Todo para tu hogar
        </h2>

        <div className="flex gap-6">
          <button
            type="button"
            aria-controls="categories-items"
            aria-label="Ver más elementos anteriores"
            disabled={!canScrollLeft}
            className="cursor-pointer disabled:cursor-default disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => onClick('left')}
          >
            <Arrow aria-hidden="true" className="stroke-black size-5" />
          </button>

          <button
            type="button"
            aria-controls="categories-items"
            aria-label="Ver más elementos siguientes"
            disabled={!canScrollRight}
            className="cursor-pointer disabled:cursor-default disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={() => onClick('right')}
          >
            <Arrow
              aria-hidden="true"
              className="stroke-black size-5 rotate-180"
            />
          </button>
        </div>
      </div>

      <ul
        ref={carouselRef}
        id="categories-items"
        className="scrollbar-none flex gap-2 overflow-x-auto px-6 lg:px-17 mt-2"
      >
        {items.map(({ name, image, alt, href }) => (
          <li
            key={name}
            className="w-[250px] min-w-[250px] shrink-0 lg:w-[calc((100vw-112px)/4.3)] lg:min-w-[calc((100vw-112px)/4.3)]"
          >
            <Link
              href={href}
              className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  sizes="(min-width: 1024px) 23vw, 50vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-4 font-kave-text text-base leading-[100%]">
                {name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
