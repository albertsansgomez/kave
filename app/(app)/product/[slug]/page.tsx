import Image from 'next/image';
import { Metadata } from 'next';

import { Product } from '@/types/product';

import { getProduct } from '@/services/product';

import ErrorData from '@/components/ui/ErrorData';
import Shipping from '@/components/icons/Shipping.svg';
import AddCard from '@/components/ui/AddCard';
import ProductBenefits from '@/components/ui/ProductBenefits';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generación de metadatos para la página
 * de categoría.
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sku = slug.split('-').pop();

  const product = await getProduct({ sku: sku ?? '' });

  if (!product) {
    return {};
  }

  const { description } = product;

  const title = `${product.title} | Kave Home`;

  return {
    title,
    description: description,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description: description,
      images: product?.mainImage?.url ? [product.mainImage.url] : [],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const sku = slug.split('-').pop();

  let product: Product | null = null;
  let hasError = false;

  try {
    product = await getProduct({ sku: sku ?? '' });
  } catch (error) {
    console.error('Failed to fetch product:', error);
    hasError = true;
  }

  if (hasError || !product) {
    return <ErrorData message="Error al cargar producto" />;
  }

  const { title, description, price, images } = product;

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
            src={product?.mainImage?.url ?? '/images/no-image.png'}
            width={810}
            height={1017}
            className="h-auto w-full"
            alt={title}
          />
          <ul className="hidden lg:grid grid-cols-3 gap-1">
            {images.map((image, index) => (
              <li key={index} className="min-w-0 bg-blue-600">
                <button
                  type="button"
                  aria-label={`Ver imagen ${index + 1} de ${title}`}
                  className="block w-full"
                >
                  <Image
                    src={image.url}
                    width={206}
                    height={258}
                    alt={`${title} - Imagen ${index + 1}`}
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
            {title}
          </h1>
          <p className="font-normal text-[13px] leading-5">{description}</p>
          <p className="font-normal font-[670] text-[27px] leading-[27px] mt-4">
            {price} €
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
