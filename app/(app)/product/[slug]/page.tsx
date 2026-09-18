import Image from 'next/image';

import ProductBenefits from '@/components/ui/ProductBenefits';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <>
      <section
        aria-labelledby="product-title"
        className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_630px]"
      >
        <section
          className="bg-amber-300 min-w-0"
          aria-label="Galería de imágenes del producto"
        >
          <Image
            src="https://picsum.photos/810/1017"
            width={810}
            height={1017}
            className="h-auto w-full"
            alt="Lorem ipsum dolor sit amet"
          />
          <ul className="hidden lg:grid grid-cols-3 gap-1">
            {Array.from({ length: 4 }, (_, index) => (
              <li key={index} className="min-w-0 bg-blue-600">
                <button
                  type="button"
                  aria-label="Ver imagen 1 de Artis"
                  className="block w-full"
                >
                  <Image
                    src="https://picsum.photos/206/258"
                    width={206}
                    height={258}
                    alt="Lorem ipsum dolor sit amet"
                    className="block h-auto w-full object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-green-700 p-6 lg:p-12">
          <h1
            id="product-title"
            className="font-normal text-[46px] leading-[46px]"
          >
            Artis
          </h1>
          <p className="font-normal text-[13px] leading-5">
            Mesa extensible redonda Artis de madera maciza y chapa de roble FSC
            100% 120 (170) x 80 cm
          </p>
          <p className="font-normal font-[670] text-[27px] leading-[27px] mt-4">
            399 €
          </p>
          <p className="font-normal text-[12px] leading-[18px]">
            Fracciona tu pago en cómodas cuotas.{' '}
            <a href="#" className="underline">
              Más información
            </a>
          </p>
        </section>
      </section>
      <ProductBenefits className="mt-8" />
    </>
  );
}
