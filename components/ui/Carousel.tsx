'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ProductCategory {
  name: string;
  image: string;
  alt: string;
}

const categories: ProductCategory[] = [
  {
    name: 'Sofas',
    image: 'https://picsum.photos/320/432',
    alt: 'Sofas',
  },
  {
    name: 'Tables',
    image: 'https://picsum.photos/320/432',
    alt: 'Tables',
  },
  {
    name: 'Chairs',
    image: 'https://picsum.photos/320/432',
    alt: 'Chairs',
  },
  {
    name: 'TV stands',
    image: 'https://picsum.photos/320/432',
    alt: 'TV stands',
  },
  {
    name: 'Shelves and shelving units',
    image: 'https://picsum.photos/320/432',
    alt: 'Shelves and shelving units',
  },
  {
    name: 'Decor and accessories',
    image: 'https://picsum.photos/320/432',
    alt: 'Decor and accessories',
  },
  {
    name: 'Soft furnishings',
    image: 'https://picsum.photos/320/432',
    alt: 'Soft furnishings',
  },
];

export default function ProductCategoriesCarousel() {
  const carouselRef = useRef<HTMLUListElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = carousel;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const firstCard = carousel.querySelector('li');

    if (!firstCard) {
      return;
    }

    const gap = 8;
    const amount = firstCard.getBoundingClientRect().width + gap;

    carousel.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

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
            onClick={() => handleScroll('left')}
            className="disabled:opacity-30"
          >
            ←
          </button>

          <button
            type="button"
            aria-label="Next"
            disabled={!canScrollRight}
            onClick={() => handleScroll('right')}
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
          </li>
        ))}
      </ul>
    </section>
  );
}
