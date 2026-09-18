import Image from 'next/image';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <section
      aria-labelledby="product-title"
      className="grid grid-cols-1 lg:grid-cols-[1fr_630px]"
    >
      <section
        className="bg-amber-300"
        aria-label="Galería de imágenes del producto"
      >
        <Image
          src="https://picsum.photos/375/300"
          width={50}
          height={50}
          alt="Lorem ipsum dolor sit amet"
        />
      </section>
      <section className="bg-green-700 p-6 lg:p-12">
        <h1
          id="product-title"
          className="font-normal text-[46px] leading-[46px]"
        >
          Artis
        </h1>
        <p className="font-normal text-[13px] leading-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="font-normal font-[670] text-[27px] leading-[27px] mt-4">
          399 €
        </p>
      </section>
    </section>
  );
}
