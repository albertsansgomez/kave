import Link from 'next/link';

import Hero from '@/components/ui/Hero';
import HomeStories from '@/components/ui/HomeStories';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeStories />
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
