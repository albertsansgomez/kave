import Image from 'next/image';

import Shipping from '@/components/icons/Shipping.svg';
import AddCard from '@/components/ui/AddCard';
import ProductBenefits from '@/components/ui/ProductBenefits';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const sku = slug.split('-').pop();

  return (
    <>
      <section
        aria-labelledby="product-title"
        className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_630px]"
      >
        <section
          className="min-w-0"
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
        <section className="p-6 lg:p-12">
          <h1
            id="product-title"
            className="font-normal text-[46px] leading-[46px]"
          >
            Artis {sku}
          </h1>
          <p className="font-normal text-[13px] leading-5">
            Mesa extensible redonda Artis de madera maciza y chapa de roble FSC
            100% 120 (170) x 80 cm
          </p>
          <p className="font-normal font-[670] text-[27px] leading-[27px] mt-4">
            399 €
          </p>
          <p className="mt-1 font-normal text-[12px] leading-[18px]">
            Fracciona tu pago en cómodas cuotas.{' '}
            <a href="#" className="underline">
              Más información
            </a>
          </p>
          <AddCard className="mt-6 lg:mt-24" />
          <div className="mt-4 flex items-start gap-2 text-[12px] font-normal text-[#1A1A14]">
            <Shipping className="stroke-[#1A1A14] size-5 shrink-0 " />
            <p className="leading-5">
              Compra ahora y recíbelo aproximadamente entre el <b>28/08</b> y el{' '}
              <b>04/09</b>.
            </p>
          </div>
        </section>
      </section>
      <ProductBenefits className="mt-8" />
    </>
  );
}
