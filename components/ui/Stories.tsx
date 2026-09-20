import Image from 'next/image';

import ButtonLink from './ButtonLink';

export interface StoryItem {
  title: string;
  label: string;
  href: string;
  image: string;
  alt: string;
}

interface StoriesProps {
  stories: StoryItem[];
}

export default function Stories({ stories }: StoriesProps) {
  return (
    <section aria-labelledby="featured-stories-title" className="w-full">
      <h2 id="featured-stories-title" className="sr-only">
        Contenidos destacados
      </h2>
      <ul className="grid grid-cols-1 lg:grid-cols-3">
        {stories.map((story) => (
          <li key={story.title}>
            <article className="group relative aspect-[3/4] overflow-hidden">
              <Image
                src={story.image}
                alt={story.alt}
                fill
                sizes="(min-width: 768px) 33.33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-x-0 top-0 pt-6 pr-5 pl-5 lg:pt-8 lg:pr-6 lg:pl-6">
                <h3 className="font-kave-text text-[24px] lg:text-[32px] leading-none tracking-[0px] text-white">
                  {story.title}
                </h3>
              </div>
              <ButtonLink
                className="absolute bottom-5 left-5 lg:bottom-6 lg:left-6"
                text={story.label}
                href={story.href}
              />
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
