import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-[calc(100vh-62px)] w-full"
    >
      <Image
        src="https://picsum.photos/375/300"
        fill
        priority
        alt="Lorem ipsum dolor sit amet"
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute w-full h-full">
        <div className="absolute w-full bottom-0 left-0 pt-[33px] pr-4 pb-4 pl-6 lg:pt-8 lg:pr-[72px] lg:pb-10 lg:pl-[72px] flex flex-col gap-6 lg:gap-[120px] lg:flex-row items-start lg:justify-between lg:items-end">
          <div>
            <p className="font-normal text-[18px] font-martina-text text-white">
              New Collection
            </p>
            <h1
              id="hero-title"
              className="font-kave-text text-white text-[32px] leading-[100%] tracking-[0%] lg:text-[56px] lg:text-[42px] lg:tracking-[0px] mt-2"
            >
              Estar fuera.
              <br />
              Una manera muy nuestra de estar.
            </h1>
          </div>
          <div className="flex items-end gap-2 bg-green-600">
            <Link
              href="#"
              className="shrink-0 whitespace-nowrap text-center font-normal bg-white hover:bg-gray-400 hover:text-white pt-2 pr-5 pb-2 pl-5 h-10"
            >
              Ver editorial
            </Link>
            <Link
              href="#"
              className="shrink-0 whitespace-nowrap text-center font-normal bg-white hover:bg-gray-400 hover:text-white pt-2 pr-5 pb-2 pl-5 h-10"
            >
              Ver productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
