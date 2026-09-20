import ButtonLink from './ButtonLink';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-[calc(100vh-62px)] w-full"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/SS26_Spot_Slide_Desktop.mp4" type="video/mp4" />
      </video>

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
          <div className="flex items-end gap-2">
            <ButtonLink text="Ver editorial" href="#" />
            <ButtonLink text="Ver productos" href="/products" />
          </div>
        </div>
      </div>
    </section>
  );
}
