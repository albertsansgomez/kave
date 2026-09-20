import type { Product } from '@/types/product';

const product: Product = {
  sku: 'D02479CR12',
  title: 'Ambientador en espray The Essence 200 ml',
  description:
    'Esta fragancia recoge todo el carácter de Kave Home. Es la esencia que te envuelve cuando entras en una de nuestras tiendas, un aroma que te transporta a la tranquilidad del Mediterráneo a través de sus notas florales, amaderadas y un toque verde.',
  slug: 'ambientador-en-espray-the-essence-200-ml',
  stock: 2923,
  price: 29.99,
  ecoPart: 0.0,
  salePrice: null,
  dimensionsImage: null,
  minUnitsToSell: 1,
  images: [
    {
      code: 'D02479CR12_1V01',
      url: 'https://d.media.kavehome.com/image/upload/v1785132011/products/D02479CR12_1V01.jpg',
      type: 'V',
      order: 0,
    },
    {
      code: 'A26S002_001',
      url: 'https://d.media.kavehome.com/image/upload/v1787642862/ambiences/A26S002_001.jpg',
      type: 'A',
      order: 0,
    },
    {
      code: 'D02479CR12_1D01',
      url: 'https://d.media.kavehome.com/image/upload/v1785132013/products/D02479CR12_1D01.jpg',
      type: 'D',
      order: 0,
    },
    {
      code: 'D02479CR12_1D02',
      url: 'https://d.media.kavehome.com/image/upload/v1785132013/products/D02479CR12_1D02.jpg',
      type: 'D',
      order: 1,
    },
    {
      code: 'D02479CR12_1D03',
      url: 'https://d.media.kavehome.com/image/upload/v1785132012/products/D02479CR12_1D03.jpg',
      type: 'D',
      order: 2,
    },
  ],
  mainImage: {
    code: 'D02479CR12_1V01',
    url: 'https://d.media.kavehome.com/image/upload/v1785132011/products/D02479CR12_1V01.jpg',
    type: 'V',
    order: 0,
  },
  documents: [],
  collection: 'The Essence',
  categories: [
    'Decoración y accesorios',
    'Ambientadores y fragancias',
    'Ambientadores en sticks',
  ],
  tags: [],
  isCustomisable: false,
  attributes: {
    width: { label: 'Ancho', value: 6.5 },
    height: { label: 'Altura', value: 15.0 },
    length: { label: 'Largo', value: 6.5 },
    sizes: { label: 'Medidas', value: '6.5 x 6.5 x 15.0 cm' },
    technique: { label: '', value: null },
    edition: { label: '', value: null },
    descriptiveQuote: { label: '', value: null },
    descriptiveQuoteAuthor: { label: '', value: null },
    unpackingSuggestions: {
      label: 'Recomendaciones para el desembalaje',
      value:
        'Vigilar al abrir con cuchillo. Mantener el embalaje unos días en caso de devolución.',
    },
    structuredMaterials: {
      label: 'Materiales estructurados',
      value: '100% Cristal - Teñido',
    },
  },
  brothers: { sizes: [], colors: [] },
  analyticsInfo: {
    effectivePrice: '29.99',
    hasMatchMe: false,
    titleEn: 'The Essence 200 ml room spray',
  },
  isPremium: false,
  material: null,
  secondaryMaterial: null,
  materialHighlight: null,
  requiresMaintenance: false,
  teaserDescription: '',
  teaserAssets: { urlMobile: null, urlDesktop: null },
  storytellings: [],
  isTopHeavy: false,
  augmentedReality: null,
  videos: [],
  returnPolicy: 'normal',
  bulletPoints: [
    'Ambientador en espray de 200 ml con esencia de producción europea.',
    'Notas de salida: verde y mandarina.',
    'Notas corazón: iris, rosa y muguet.',
    'Notas de fondo: almizcle, ámbar y sándalo.',
  ],
};

export async function getProductMock(): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return product;
}
