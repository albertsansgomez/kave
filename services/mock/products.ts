import type { Response } from '@/types/response';
import type { Product } from '@/types/product';

import { PRODUCTS_ENDPOINT } from '../api/products';

const PAGE_SIZE = 8;

const products: Product[] = [
  {
    sku: 'D02479CR12',
    title: 'Ambientador en espray The Essence 200 ml',
    description:
      'Esta fragancia recoge todo el carácter de Kave Home. Es la esencia que te envuelve cuando entras en una de nuestras tiendas, un aroma que te transporta a la tranquilidad del Mediterráneo a través de sus notas florales, amaderadas y un toque verde.',
    slug: 'ambientador-en-espray-the-essence-200-ml',
    stock: 2923,
    price: 29.99,
    ecoPart: 0,
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

    collection: 'The Essence',
    categories: [
      'Decoración y accesorios',
      'Ambientadores y fragancias',
      'Ambientadores en sticks',
    ],
    tags: [],
    isCustomisable: false,
    attributes: {
      width: {
        label: 'Ancho',
        value: 6.5,
      },
      height: {
        label: 'Altura',
        value: 15,
      },
      length: {
        label: 'Largo',
        value: 6.5,
      },
      sizes: {
        label: 'Medidas',
        value: '6.5 x 6.5 x 15.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
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
    brothers: {
      sizes: [],
      colors: [],
    },
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
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'normal',
    bulletPoints: [
      'Ambientador en espray de 200 ml con esencia de producción europea.',
      'Notas de salida: verde y mandarina.',
      'Notas corazón: iris, rosa y muguet.',
      'Notas de fondo: almizcle, ámbar y sándalo.',
    ],
  },
  {
    sku: '100408140NR39',
    title: 'Metraje Nordic crudo A140 cm',
    description: '',
    slug: 'metraje-nordic-crudo-a140-cm',
    stock: 99,
    price: 13.99,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [
      {
        code: '100408140NR39_1V01',
        url: 'https://d.media.kavehome.com/image/upload/v1734420172/products/100408140NR39_1V01.jpg',
        type: 'V',
        order: 0,
      },
      {
        code: '100408140NR39_1D01',
        url: 'https://d.media.kavehome.com/image/upload/v1734420219/products/100408140NR39_1D01.jpg',
        type: 'D',
        order: 0,
      },
    ],
    mainImage: {
      code: '100408140NR39_1V01',
      url: 'https://d.media.kavehome.com/image/upload/v1734420172/products/100408140NR39_1V01.jpg',
      type: 'V',
      order: 0,
    },

    collection: 'Metraje',
    categories: [],
    tags: [],
    isCustomisable: false,
    attributes: {
      width: {
        label: 'Ancho',
        value: 1,
      },
      height: {
        label: 'Altura',
        value: 0.01,
      },
      length: {
        label: 'Largo',
        value: 1,
      },
      sizes: {
        label: 'Medidas',
        value: '1.0 x 1.0 x 0.01 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: '',
        value: null,
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value: ' - ',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '13.99',
      hasMatchMe: false,
      titleEn: 'Nordic fabric ecru A140 cm',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'normal',
    bulletPoints: [],
  },
  {
    sku: 'S81321PERE',
    title: 'Sofá Veliro 2 plazas Tejido personalizado',
    description:
      'Diseño de inspiración mid century\n\nEl reposapiés Veliro combina la elegancia atemporal de las líneas de mediados del siglo XX con nuevas proporciones, pensadas para ofrecer el máximo confort en cualquier ambiente.\n\nSentada blanda y cojín desenfundable\n\nTiene una sentada blanda gracias a la combinación de espumas Air System de 28 kg/m³, de alta durabilidad y alta capacidad de recuperación, junto con fibra de efecto plumón para un efecto envolvente. El cojín desenfundable añade funcionalidad y facilita la limpieza y el mantenimiento.\n\nEstructura de madera FSC Mix Credit\n\nLa estructura interna, fabricada en madera de pino, está certificada con FSC Mix Credit, elaborada con una mezcla de materiales procedentes de bosques certificados por FSC y madera controlada FSC.\n\nPatas de acero con acabado negro\n\nLas patas de acero, con un elegante acabado negro pintado en polvo microtexturizado mate, aportan estabilidad y un toque contemporáneo al conjunto. Producido en España, este reposapiés es una pieza polivalente, capaz de integrarse fácilmente en cualquier espacio gracias a su diseño equilibrado y su asiento, pensado para proporcionar un alto confort y adaptarse a diferentes estilos de vida.',
    slug: 'sofa-veliro-2-plazas-tejido-personalizado-s81321pere',
    stock: 99,
    price: 1799,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [],
    mainImage: null,

    collection: 'Veliro',
    categories: ['Sofás', 'Sofás 2 plazas'],
    tags: [
      {
        label: 'NEW IN',
        variant: 'light-grey',
        textStyle: 'uppercase',
      },
      {
        label: 'Personalizable',
        variant: 'white',
        textStyle: 'uppercase',
      },
    ],
    isCustomisable: true,
    attributes: {
      width: {
        label: 'Ancho',
        value: 180,
      },
      height: {
        label: 'Altura',
        value: 96,
      },
      length: {
        label: 'Largo',
        value: 106,
      },
      sizes: {
        label: 'Medidas',
        value: '106.0 x 180.0 x 96.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con un cuchillo. Guardar el embalaje unos días para en caso de retorno y mantener las instrucciones de montaje para posibles consultas.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value:
          '35% Madera de pino (Pinus pinaster), 17% Fibras sintéticas, 15% Espuma (poliuretano), 12% Fibras acrílicas, 10% Tejido, 6% MDF E0 (tablero de fibra de densidad media con bajas emisiones de formaldehido clase E0), 5% Cincha - Tapizado',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '1799.00',
      hasMatchMe: false,
      titleEn: 'Veliro 2-seater sofa Custom fabric',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'customised',
    bulletPoints: [
      'Sentada blanda gracias a la mezcla de espumas de 28kg/m3 Air System, de alta durabilidad y capacidad de recuperación, fibra de efecto plumón y sistema de suspensión de cinchas. Cojín del respaldo y riñonero rellenos de fibra de efecto plumón.',
      'Asiento, respaldo y cojín riñonero desenfundables.',
    ],
  },
  {
    sku: 'S81321PERD',
    title: 'Sofá Veliro 2 plazas Tejido personalizado',
    description:
      'Diseño de inspiración mid century\n\nEl reposapiés Veliro combina la elegancia atemporal de las líneas de mediados del siglo XX con nuevas proporciones, pensadas para ofrecer el máximo confort en cualquier ambiente.\n\nSentada blanda y cojín desenfundable\n\nTiene una sentada blanda gracias a la combinación de espumas Air System de 28 kg/m³, de alta durabilidad y alta capacidad de recuperación, junto con fibra de efecto plumón para un efecto envolvente. El cojín desenfundable añade funcionalidad y facilita la limpieza y el mantenimiento.\n\nEstructura de madera FSC Mix Credit\n\nLa estructura interna, fabricada en madera de pino, está certificada con FSC Mix Credit, elaborada con una mezcla de materiales procedentes de bosques certificados por FSC y madera controlada FSC.\n\nPatas de acero con acabado negro\n\nLas patas de acero, con un elegante acabado negro pintado en polvo microtexturizado mate, aportan estabilidad y un toque contemporáneo al conjunto. Producido en España, este reposapiés es una pieza polivalente, capaz de integrarse fácilmente en cualquier espacio gracias a su diseño equilibrado y su asiento, pensado para proporcionar un alto confort y adaptarse a diferentes estilos de vida.',
    slug: 'sofa-veliro-2-plazas-tejido-personalizado-s81321perd',
    stock: 99,
    price: 1699,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [],
    mainImage: null,

    collection: 'Veliro',
    categories: ['Sofás', 'Sofás 2 plazas'],
    tags: [
      {
        label: 'NEW IN',
        variant: 'light-grey',
        textStyle: 'uppercase',
      },
      {
        label: 'Personalizable',
        variant: 'white',
        textStyle: 'uppercase',
      },
    ],
    isCustomisable: true,
    attributes: {
      width: {
        label: 'Ancho',
        value: 180,
      },
      height: {
        label: 'Altura',
        value: 96,
      },
      length: {
        label: 'Largo',
        value: 106,
      },
      sizes: {
        label: 'Medidas',
        value: '106.0 x 180.0 x 96.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con un cuchillo. Guardar el embalaje unos días para en caso de retorno y mantener las instrucciones de montaje para posibles consultas.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value:
          '35% Madera de pino (Pinus pinaster), 17% Fibras sintéticas, 15% Espuma (poliuretano), 12% Fibras acrílicas, 10% Tejido, 6% MDF E0 (tablero de fibra de densidad media con bajas emisiones de formaldehido clase E0), 5% Cincha - Tapizado',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '1699.00',
      hasMatchMe: false,
      titleEn: 'Veliro 2-seater sofa Custom fabric',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'customised',
    bulletPoints: [
      'Sentada blanda gracias a la mezcla de espumas de 28kg/m3 Air System, de alta durabilidad y capacidad de recuperación, fibra de efecto plumón y sistema de suspensión de cinchas. Cojín del respaldo y riñonero rellenos de fibra de efecto plumón.',
      'Asiento, respaldo y cojín riñonero desenfundables.',
    ],
  },
  {
    sku: 'S81321PERC',
    title: 'Sofá Veliro 2 plazas Tejido personalizado',
    description:
      'Diseño de inspiración mid century\n\nEl reposapiés Veliro combina la elegancia atemporal de las líneas de mediados del siglo XX con nuevas proporciones, pensadas para ofrecer el máximo confort en cualquier ambiente.\n\nSentada blanda y cojín desenfundable\n\nTiene una sentada blanda gracias a la combinación de espumas Air System de 28 kg/m³, de alta durabilidad y alta capacidad de recuperación, junto con fibra de efecto plumón para un efecto envolvente. El cojín desenfundable añade funcionalidad y facilita la limpieza y el mantenimiento.\n\nEstructura de madera FSC Mix Credit\n\nLa estructura interna, fabricada en madera de pino, está certificada con FSC Mix Credit, elaborada con una mezcla de materiales procedentes de bosques certificados por FSC y madera controlada FSC.\n\nPatas de acero con acabado negro\n\nLas patas de acero, con un elegante acabado negro pintado en polvo microtexturizado mate, aportan estabilidad y un toque contemporáneo al conjunto. Producido en España, este reposapiés es una pieza polivalente, capaz de integrarse fácilmente en cualquier espacio gracias a su diseño equilibrado y su asiento, pensado para proporcionar un alto confort y adaptarse a diferentes estilos de vida.',
    slug: 'sofa-veliro-2-plazas-tejido-personalizado-s81321perc',
    stock: 99,
    price: 1599,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [],
    mainImage: null,

    collection: 'Veliro',
    categories: ['Sofás', 'Sofás 2 plazas'],
    tags: [
      {
        label: 'NEW IN',
        variant: 'light-grey',
        textStyle: 'uppercase',
      },
      {
        label: 'Personalizable',
        variant: 'white',
        textStyle: 'uppercase',
      },
    ],
    isCustomisable: true,
    attributes: {
      width: {
        label: 'Ancho',
        value: 180,
      },
      height: {
        label: 'Altura',
        value: 96,
      },
      length: {
        label: 'Largo',
        value: 106,
      },
      sizes: {
        label: 'Medidas',
        value: '106.0 x 180.0 x 96.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con un cuchillo. Guardar el embalaje unos días para en caso de retorno y mantener las instrucciones de montaje para posibles consultas.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value:
          '35% Madera de pino (Pinus pinaster), 17% Fibras sintéticas, 15% Espuma (poliuretano), 12% Fibras acrílicas, 10% Tejido, 6% MDF E0 (tablero de fibra de densidad media con bajas emisiones de formaldehido clase E0), 5% Cincha - Tapizado',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '1599.00',
      hasMatchMe: false,
      titleEn: 'Veliro 2-seater sofa Custom fabric',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'customised',
    bulletPoints: [
      'Sentada blanda gracias a la mezcla de espumas de 28kg/m3 Air System, de alta durabilidad y capacidad de recuperación, fibra de efecto plumón y sistema de suspensión de cinchas. Cojín del respaldo y riñonero rellenos de fibra de efecto plumón.',
      'Asiento, respaldo y cojín riñonero desenfundables.',
    ],
  },
  {
    sku: 'S81321PERB',
    title: 'Sofá Veliro 2 plazas Tejido personalizado',
    description:
      'Diseño de inspiración mid century\n\nEl reposapiés Veliro combina la elegancia atemporal de las líneas de mediados del siglo XX con nuevas proporciones, pensadas para ofrecer el máximo confort en cualquier ambiente.\n\nSentada blanda y cojín desenfundable\n\nTiene una sentada blanda gracias a la combinación de espumas Air System de 28 kg/m³, de alta durabilidad y alta capacidad de recuperación, junto con fibra de efecto plumón para un efecto envolvente. El cojín desenfundable añade funcionalidad y facilita la limpieza y el mantenimiento.\n\nEstructura de madera FSC Mix Credit\n\nLa estructura interna, fabricada en madera de pino, está certificada con FSC Mix Credit, elaborada con una mezcla de materiales procedentes de bosques certificados por FSC y madera controlada FSC.\n\nPatas de acero con acabado negro\n\nLas patas de acero, con un elegante acabado negro pintado en polvo microtexturizado mate, aportan estabilidad y un toque contemporáneo al conjunto. Producido en España, este reposapiés es una pieza polivalente, capaz de integrarse fácilmente en cualquier espacio gracias a su diseño equilibrado y su asiento, pensado para proporcionar un alto confort y adaptarse a diferentes estilos de vida.',
    slug: 'sofa-veliro-2-plazas-tejido-personalizado-s81321perb',
    stock: 99,
    price: 1499,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [],
    mainImage: null,

    collection: 'Veliro',
    categories: ['Sofás', 'Sofás 2 plazas'],
    tags: [
      {
        label: 'NEW IN',
        variant: 'light-grey',
        textStyle: 'uppercase',
      },
      {
        label: 'Personalizable',
        variant: 'white',
        textStyle: 'uppercase',
      },
    ],
    isCustomisable: true,
    attributes: {
      width: {
        label: 'Ancho',
        value: 180,
      },
      height: {
        label: 'Altura',
        value: 96,
      },
      length: {
        label: 'Largo',
        value: 106,
      },
      sizes: {
        label: 'Medidas',
        value: '106.0 x 180.0 x 96.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con un cuchillo. Guardar el embalaje unos días para en caso de retorno y mantener las instrucciones de montaje para posibles consultas.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value:
          '35% Madera de pino (Pinus pinaster), 17% Fibras sintéticas, 15% Espuma (poliuretano), 12% Fibras acrílicas, 10% Tejido, 6% MDF E0 (tablero de fibra de densidad media con bajas emisiones de formaldehido clase E0), 5% Cincha - Tapizado',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '1499.00',
      hasMatchMe: false,
      titleEn: 'Veliro 2-seater sofa Custom fabric',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'customised',
    bulletPoints: [
      'Sentada blanda gracias a la mezcla de espumas de 28kg/m3 Air System, de alta durabilidad y capacidad de recuperación, fibra de efecto plumón y sistema de suspensión de cinchas. Cojín del respaldo y riñonero rellenos de fibra de efecto plumón.',
      'Asiento, respaldo y cojín riñonero desenfundables.',
    ],
  },
  {
    sku: 'S81321PERA',
    title: 'Sofá Veliro 2 plazas Tejido personalizado',
    description:
      'Diseño de inspiración mid century\n\nEl reposapiés Veliro combina la elegancia atemporal de las líneas de mediados del siglo XX con nuevas proporciones, pensadas para ofrecer el máximo confort en cualquier ambiente.\n\nSentada blanda y cojín desenfundable\n\nTiene una sentada blanda gracias a la combinación de espumas Air System de 28 kg/m³, de alta durabilidad y alta capacidad de recuperación, junto con fibra de efecto plumón para un efecto envolvente. El cojín desenfundable añade funcionalidad y facilita la limpieza y el mantenimiento.\n\nEstructura de madera FSC Mix Credit\n\nLa estructura interna, fabricada en madera de pino, está certificada con FSC Mix Credit, elaborada con una mezcla de materiales procedentes de bosques certificados por FSC y madera controlada FSC.\n\nPatas de acero con acabado negro\n\nLas patas de acero, con un elegante acabado negro pintado en polvo microtexturizado mate, aportan estabilidad y un toque contemporáneo al conjunto. Producido en España, este reposapiés es una pieza polivalente, capaz de integrarse fácilmente en cualquier espacio gracias a su diseño equilibrado y su asiento, pensado para proporcionar un alto confort y adaptarse a diferentes estilos de vida.',
    slug: 'sofa-veliro-2-plazas-tejido-personalizado',
    stock: 99,
    price: 1399,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [],
    mainImage: null,

    collection: 'Veliro',
    categories: ['Sofás', 'Sofás 2 plazas'],
    tags: [
      {
        label: 'NEW IN',
        variant: 'light-grey',
        textStyle: 'uppercase',
      },
      {
        label: 'Personalizable',
        variant: 'white',
        textStyle: 'uppercase',
      },
    ],
    isCustomisable: true,
    attributes: {
      width: {
        label: 'Ancho',
        value: 180,
      },
      height: {
        label: 'Altura',
        value: 96,
      },
      length: {
        label: 'Largo',
        value: 106,
      },
      sizes: {
        label: 'Medidas',
        value: '106.0 x 180.0 x 96.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con un cuchillo. Guardar el embalaje unos días para en caso de retorno y mantener las instrucciones de montaje para posibles consultas.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value:
          '35% Madera de pino (Pinus pinaster), 17% Fibras sintéticas, 15% Espuma (poliuretano), 12% Fibras acrílicas, 10% Tejido, 6% MDF E0 (tablero de fibra de densidad media con bajas emisiones de formaldehido clase E0), 5% Cincha - Tapizado',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '1399.00',
      hasMatchMe: false,
      titleEn: 'Veliro 2-seater sofa Custom fabric',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'customised',
    bulletPoints: [
      'Sentada blanda gracias a la mezcla de espumas de 28kg/m3 Air System, de alta durabilidad y capacidad de recuperación, fibra de efecto plumón y sistema de suspensión de cinchas. Cojín del respaldo y riñonero rellenos de fibra de efecto plumón.',
      'Asiento, respaldo y cojín riñonero desenfundables.',
    ],
  },
  {
    sku: 'S81310PERE',
    title: 'Butaca Veliro Tejido personalizado',
    description:
      'Diseño de inspiración mid century\n\nLa butaca Veliro combina la elegancia atemporal de las líneas de mediados del siglo XX con nuevas proporciones, pensadas para ofrecer el máximo confort en cualquier ambiente.\n\nSentada blanda y cojín desenfundable\n\nTiene una sentada blanda gracias a la combinación de espumas Air System de 28 kg/m³, de alta durabilidad y alta capacidad de recuperación, junto con fibra de efecto plumón para un efecto envolvente. El cojín desenfundable añade funcionalidad y facilita la limpieza y el mantenimiento.\n\nEstructura de madera FSC Mix Credit\n\nLa estructura interna, fabricada en madera de pino, está certificada con FSC Mix Credit, elaborada con una mezcla de materiales procedentes de bosques certificados por FSC y madera controlada FSC.\n\nPatas de acero con acabado negro\n\nLas patas de acero, con un elegante acabado negro pintado en polvo microtexturizado mate, aportan estabilidad y un toque contemporáneo al conjunto. Producido en España, este reposapiés es una pieza polivalente, capaz de integrarse fácilmente en cualquier espacio gracias a su diseño equilibrado y su asiento, pensado para proporcionar un alto confort y adaptarse a diferentes estilos de vida.',
    slug: 'butaca-veliro-tejido-personalizado-s81310pere',
    stock: 99,
    price: 1299,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [],
    mainImage: null,

    collection: 'Veliro',
    categories: ['Sofás', 'Sillones, butacas y mecedoras', 'Sillones'],
    tags: [
      {
        label: 'NEW IN',
        variant: 'light-grey',
        textStyle: 'uppercase',
      },
      {
        label: 'Personalizable',
        variant: 'white',
        textStyle: 'uppercase',
      },
    ],
    isCustomisable: true,
    attributes: {
      width: {
        label: 'Ancho',
        value: 100,
      },
      height: {
        label: 'Altura',
        value: 96,
      },
      length: {
        label: 'Largo',
        value: 106,
      },
      sizes: {
        label: 'Medidas',
        value: '106.0 x 100.0 x 96.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con un cuchillo. Guardar el embalaje unos días para en caso de retorno y mantener las instrucciones de montaje para posibles consultas.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value:
          '35% Madera de pino (Pinus pinaster), 17% Fibras sintéticas, 15% Espuma (poliuretano), 12% Fibras acrílicas, 10% Tejido, 6% MDF E0 (tablero de fibra de densidad media con bajas emisiones de formaldehido clase E0), 5% Cincha - Tapizado',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '1299.00',
      hasMatchMe: false,
      titleEn: 'Veliro armchair Custom fabric',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'customised',
    bulletPoints: [
      'Sentada blanda gracias a la mezcla de espumas de 28kg/m3 Air System, de alta durabilidad y capacidad de recuperación, fibra de efecto plumón y sistema de suspensión de cinchas. Cojín del respaldo y riñonero rellenos de fibra de efecto plumón.',
      'Asiento, respaldo y cojín riñonero desenfundables.',
    ],
  },
  {
    sku: 'S81310PERD',
    title: 'Butaca Veliro Tejido personalizado',
    description:
      'Diseño de inspiración mid century\n\nLa butaca Veliro combina la elegancia atemporal de las líneas de mediados del siglo XX con nuevas proporciones, pensadas para ofrecer el máximo confort en cualquier ambiente.\n\nSentada blanda y cojín desenfundable\n\nTiene una sentada blanda gracias a la combinación de espumas Air System de 28 kg/m³, de alta durabilidad y alta capacidad de recuperación, junto con fibra de efecto plumón para un efecto envolvente. El cojín desenfundable añade funcionalidad y facilita la limpieza y el mantenimiento.\n\nEstructura de madera FSC Mix Credit\n\nLa estructura interna, fabricada en madera de pino, está certificada con FSC Mix Credit, elaborada con una mezcla de materiales procedentes de bosques certificados por FSC y madera controlada FSC.\n\nPatas de acero con acabado negro\n\nLas patas de acero, con un elegante acabado negro pintado en polvo microtexturizado mate, aportan estabilidad y un toque contemporáneo al conjunto. Producido en España, este reposapiés es una pieza polivalente, capaz de integrarse fácilmente en cualquier espacio gracias a su diseño equilibrado y su asiento, pensado para proporcionar un alto confort y adaptarse a diferentes estilos de vida.',
    slug: 'butaca-veliro-tejido-personalizado-s81310perd',
    stock: 99,
    price: 1199,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [],
    mainImage: null,

    collection: 'Veliro',
    categories: ['Sofás', 'Sillones, butacas y mecedoras', 'Sillones'],
    tags: [
      {
        label: 'NEW IN',
        variant: 'light-grey',
        textStyle: 'uppercase',
      },
      {
        label: 'Personalizable',
        variant: 'white',
        textStyle: 'uppercase',
      },
    ],
    isCustomisable: true,
    attributes: {
      width: {
        label: 'Ancho',
        value: 100,
      },
      height: {
        label: 'Altura',
        value: 96,
      },
      length: {
        label: 'Largo',
        value: 106,
      },
      sizes: {
        label: 'Medidas',
        value: '106.0 x 100.0 x 96.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con un cuchillo. Guardar el embalaje unos días para en caso de retorno y mantener las instrucciones de montaje para posibles consultas.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value:
          '35% Madera de pino (Pinus pinaster), 17% Fibras sintéticas, 15% Espuma (poliuretano), 12% Fibras acrílicas, 10% Tejido, 6% MDF E0 (tablero de fibra de densidad media con bajas emisiones de formaldehido clase E0), 5% Cincha - Tapizado',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '1199.00',
      hasMatchMe: false,
      titleEn: 'Veliro armchair Custom fabric',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'customised',
    bulletPoints: [
      'Sentada blanda gracias a la mezcla de espumas de 28kg/m3 Air System, de alta durabilidad y capacidad de recuperación, fibra de efecto plumón y sistema de suspensión de cinchas. Cojín del respaldo y riñonero rellenos de fibra de efecto plumón.',
      'Asiento, respaldo y cojín riñonero desenfundables.',
    ],
  },
  {
    sku: 'S81310PERC',
    title: 'Butaca Veliro Tejido personalizado',
    description:
      'Diseño de inspiración mid century\n\nLa butaca Veliro combina la elegancia atemporal de las líneas de mediados del siglo XX con nuevas proporciones, pensadas para ofrecer el máximo confort en cualquier ambiente.\n\nSentada blanda y cojín desenfundable\n\nTiene una sentada blanda gracias a la combinación de espumas Air System de 28 kg/m³, de alta durabilidad y alta capacidad de recuperación, junto con fibra de efecto plumón para un efecto envolvente. El cojín desenfundable añade funcionalidad y facilita la limpieza y el mantenimiento.\n\nEstructura de madera FSC Mix Credit\n\nLa estructura interna, fabricada en madera de pino, está certificada con FSC Mix Credit, elaborada con una mezcla de materiales procedentes de bosques certificados por FSC y madera controlada FSC.\n\nPatas de acero con acabado negro\n\nLas patas de acero, con un elegante acabado negro pintado en polvo microtexturizado mate, aportan estabilidad y un toque contemporáneo al conjunto. Producido en España, este reposapiés es una pieza polivalente, capaz de integrarse fácilmente en cualquier espacio gracias a su diseño equilibrado y su asiento, pensado para proporcionar un alto confort y adaptarse a diferentes estilos de vida.',
    slug: 'butaca-veliro-tejido-personalizado-s81310perc',
    stock: 99,
    price: 1099,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [],
    mainImage: null,

    collection: 'Veliro',
    categories: ['Sofás', 'Sillones, butacas y mecedoras', 'Sillones'],
    tags: [
      {
        label: 'NEW IN',
        variant: 'light-grey',
        textStyle: 'uppercase',
      },
      {
        label: 'Personalizable',
        variant: 'white',
        textStyle: 'uppercase',
      },
    ],
    isCustomisable: true,
    attributes: {
      width: {
        label: 'Ancho',
        value: 100,
      },
      height: {
        label: 'Altura',
        value: 96,
      },
      length: {
        label: 'Largo',
        value: 106,
      },
      sizes: {
        label: 'Medidas',
        value: '106.0 x 100.0 x 96.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con un cuchillo. Guardar el embalaje unos días para en caso de retorno y mantener las instrucciones de montaje para posibles consultas.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value:
          '35% Madera de pino (Pinus pinaster), 17% Fibras sintéticas, 15% Espuma (poliuretano), 12% Fibras acrílicas, 10% Tejido, 6% MDF E0 (tablero de fibra de densidad media con bajas emisiones de formaldehido clase E0), 5% Cincha - Tapizado',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '1099.00',
      hasMatchMe: false,
      titleEn: 'Veliro armchair Custom fabric',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'customised',
    bulletPoints: [
      'Sentada blanda gracias a la mezcla de espumas de 28kg/m3 Air System, de alta durabilidad y capacidad de recuperación, fibra de efecto plumón y sistema de suspensión de cinchas. Cojín del respaldo y riñonero rellenos de fibra de efecto plumón.',
      'Asiento, respaldo y cojín riñonero desenfundables.',
    ],
  },
  {
    sku: 'S81310PERB',
    title: 'Butaca Veliro Tejido personalizado',
    description:
      'Diseño de inspiración mid century\n\nLa butaca Veliro combina la elegancia atemporal de las líneas de mediados del siglo XX con nuevas proporciones, pensadas para ofrecer el máximo confort en cualquier ambiente.\n\nSentada blanda y cojín desenfundable\n\nTiene una sentada blanda gracias a la combinación de espumas Air System de 28 kg/m³, de alta durabilidad y alta capacidad de recuperación, junto con fibra de efecto plumón para un efecto envolvente. El cojín desenfundable añade funcionalidad y facilita la limpieza y el mantenimiento.\n\nEstructura de madera FSC Mix Credit\n\nLa estructura interna, fabricada en madera de pino, está certificada con FSC Mix Credit, elaborada con una mezcla de materiales procedentes de bosques certificados por FSC y madera controlada FSC.\n\nPatas de acero con acabado negro\n\nLas patas de acero, con un elegante acabado negro pintado en polvo microtexturizado mate, aportan estabilidad y un toque contemporáneo al conjunto. Producido en España, este reposapiés es una pieza polivalente, capaz de integrarse fácilmente en cualquier espacio gracias a su diseño equilibrado y su asiento, pensado para proporcionar un alto confort y adaptarse a diferentes estilos de vida.',
    slug: 'butaca-veliro-tejido-personalizado-s81310perb',
    stock: 99,
    price: 1050,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [],
    mainImage: null,

    collection: 'Veliro',
    categories: ['Sofás', 'Sillones, butacas y mecedoras', 'Sillones'],
    tags: [
      {
        label: 'NEW IN',
        variant: 'light-grey',
        textStyle: 'uppercase',
      },
      {
        label: 'Personalizable',
        variant: 'white',
        textStyle: 'uppercase',
      },
    ],
    isCustomisable: true,
    attributes: {
      width: {
        label: 'Ancho',
        value: 100,
      },
      height: {
        label: 'Altura',
        value: 96,
      },
      length: {
        label: 'Largo',
        value: 106,
      },
      sizes: {
        label: 'Medidas',
        value: '106.0 x 100.0 x 96.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con un cuchillo. Guardar el embalaje unos días para en caso de retorno y mantener las instrucciones de montaje para posibles consultas.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value:
          '35% Madera de pino (Pinus pinaster), 17% Fibras sintéticas, 15% Espuma (poliuretano), 12% Fibras acrílicas, 10% Tejido, 6% MDF E0 (tablero de fibra de densidad media con bajas emisiones de formaldehido clase E0), 5% Cincha - Tapizado',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '1050.00',
      hasMatchMe: false,
      titleEn: 'Veliro armchair Custom fabric',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'customised',
    bulletPoints: [
      'Sentada blanda gracias a la mezcla de espumas de 28kg/m3 Air System, de alta durabilidad y capacidad de recuperación, fibra de efecto plumón y sistema de suspensión de cinchas. Cojín del respaldo y riñonero rellenos de fibra de efecto plumón.',
      'Asiento, respaldo y cojín riñonero desenfundables.',
    ],
  },
  {
    sku: 'S81310PERA',
    title: 'Butaca Veliro Tejido personalizado',
    description:
      'Diseño de inspiración mid century\n\nLa butaca Veliro combina la elegancia atemporal de las líneas de mediados del siglo XX con nuevas proporciones, pensadas para ofrecer el máximo confort en cualquier ambiente.\n\nSentada blanda y cojín desenfundable\n\nTiene una sentada blanda gracias a la combinación de espumas Air System de 28 kg/m³, de alta durabilidad y alta capacidad de recuperación, junto con fibra de efecto plumón para un efecto envolvente. El cojín desenfundable añade funcionalidad y facilita la limpieza y el mantenimiento.\n\nEstructura de madera FSC Mix Credit\n\nLa estructura interna, fabricada en madera de pino, está certificada con FSC Mix Credit, elaborada con una mezcla de materiales procedentes de bosques certificados por FSC y madera controlada FSC.\n\nPatas de acero con acabado negro\n\nLas patas de acero, con un elegante acabado negro pintado en polvo microtexturizado mate, aportan estabilidad y un toque contemporáneo al conjunto. Producido en España, este reposapiés es una pieza polivalente, capaz de integrarse fácilmente en cualquier espacio gracias a su diseño equilibrado y su asiento, pensado para proporcionar un alto confort y adaptarse a diferentes estilos de vida.',
    slug: 'butaca-veliro-tejido-personalizado',
    stock: 99,
    price: 999,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [],
    mainImage: null,

    collection: 'Veliro',
    categories: ['Sofás', 'Sillones, butacas y mecedoras', 'Sillones'],
    tags: [
      {
        label: 'NEW IN',
        variant: 'light-grey',
        textStyle: 'uppercase',
      },
      {
        label: 'Personalizable',
        variant: 'white',
        textStyle: 'uppercase',
      },
    ],
    isCustomisable: true,
    attributes: {
      width: {
        label: 'Ancho',
        value: 100,
      },
      height: {
        label: 'Altura',
        value: 96,
      },
      length: {
        label: 'Largo',
        value: 106,
      },
      sizes: {
        label: 'Medidas',
        value: '106.0 x 100.0 x 96.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con un cuchillo. Guardar el embalaje unos días para en caso de retorno y mantener las instrucciones de montaje para posibles consultas.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value:
          '35% Madera de pino (Pinus pinaster), 17% Fibras sintéticas, 15% Espuma (poliuretano), 12% Fibras acrílicas, 10% Tejido, 6% MDF E0 (tablero de fibra de densidad media con bajas emisiones de formaldehido clase E0), 5% Cincha - Tapizado',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '999.00',
      hasMatchMe: false,
      titleEn: 'Veliro armchair Custom fabric',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'customised',
    bulletPoints: [
      'Sentada blanda gracias a la mezcla de espumas de 28kg/m3 Air System, de alta durabilidad y capacidad de recuperación, fibra de efecto plumón y sistema de suspensión de cinchas. Cojín del respaldo y riñonero rellenos de fibra de efecto plumón.',
      'Asiento, respaldo y cojín riñonero desenfundables.',
    ],
  },
  {
    sku: 'X03218PL05',
    title:
      'Relleno de cojín Nubu de microfibra reciclada con efecto gel 60 x 60 cm hecho en España',
    description:
      'El relleno de cojín Nubu está confeccionado con microfibra 100% reciclada de alto gramaje, diseñada para ofrecer una gran sensación de confort. Su fibra con efecto gel proporciona una acogida especialmente suave, mullida y agradable al tacto, adaptándose de forma natural a la presión. Además, su mayor densidad favorece una excelente recuperación de la forma tras el uso, ayudando a mantener el volumen y la apariencia del cojín durante más tiempo. Fabricado en España, combina comodidad, calidad y durabilidad para el uso diario.',
    slug: 'relleno-de-cojin-nubu-de-microfibra-reciclada-con-efecto-gel-60-x-60-cm-hecho-en-espana',
    stock: 306,
    price: 15.99,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [
      {
        code: 'X03218PL05_1V01',
        url: 'https://d.media.kavehome.com/image/upload/v1789372670/products/X03218PL05_1V01.jpg',
        type: 'V',
        order: 0,
      },
      {
        code: 'A000002402_4',
        url: 'https://d.media.kavehome.com/image/upload/v1718786721/ambiences/A000002402_4.jpg',
        type: 'A',
        order: 0,
      },
    ],
    mainImage: {
      code: 'X03218PL05_1V01',
      url: 'https://d.media.kavehome.com/image/upload/v1789372670/products/X03218PL05_1V01.jpg',
      type: 'V',
      order: 0,
    },

    collection: 'Nubu',
    categories: ['Textil del hogar', 'Rellenos de cojín'],
    tags: [],
    isCustomisable: false,
    attributes: {
      width: {
        label: 'Ancho',
        value: 50,
      },
      height: {
        label: 'Altura',
        value: 10,
      },
      length: {
        label: 'Largo',
        value: 50,
      },
      sizes: {
        label: 'Medidas',
        value: '50.0 x 50.0 x 10.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con cuchillo. Mantener el embalaje unos días en caso de devolución.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value: '50% Tejido, 50% Fibras recicladas - ',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '15.99',
      hasMatchMe: false,
      titleEn:
        'Nubu cushion filler made from recycled microfibre with gel effect 60 x 60 cm, made in Spain',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'normal',
    bulletPoints: [
      'Relleno de cojín de fibra gel de alto gramaje para una mayor sensación de confort.',
      'Efecto gel al tacto, con una acogida suave y agradable.',
      'Mayor densidad de fibra para una mejor recuperación de la forma tras el uso.',
      'Confeccionado con fibra 100% reciclada.',
      'Hecho en España.',
    ],
  },
  {
    sku: 'X03204PL05',
    title: 'Relleno de cojín Dulnia 100% pluma 50 x 50 cm hecho en España',
    description:
      'Alto confort y volumen mullido\n\nLa colección Dulnia reúne rellenos de cojín elaborados con un 100% de pluma de pato, un relleno que destaca por su ligereza, volumen y capacidad para adaptarse al uso. Su composición proporciona una apariencia mullida y permite recuperar fácilmente el volumen del cojín al ahuecarlo, aportando una sensación confortable y acogedora.',
    slug: 'relleno-de-cojin-dulnia-100-pluma-50-x-50-cm-hecho-en-espana',
    stock: 414,
    price: 25.99,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [
      {
        code: 'X03204PL05_1V01',
        url: 'https://d.media.kavehome.com/image/upload/v1789548592/X03204PL05_1V01.jpg',
        type: 'V',
        order: 0,
      },
      {
        code: 'A000002402_4',
        url: 'https://d.media.kavehome.com/image/upload/v1718786721/ambiences/A000002402_4.jpg',
        type: 'A',
        order: 0,
      },
    ],
    mainImage: {
      code: 'X03204PL05_1V01',
      url: 'https://d.media.kavehome.com/image/upload/v1789548592/X03204PL05_1V01.jpg',
      type: 'V',
      order: 0,
    },

    collection: 'Dulnia',
    categories: ['Textil del hogar', 'Rellenos de cojín'],
    tags: [],
    isCustomisable: false,
    attributes: {
      width: {
        label: 'Ancho',
        value: 50,
      },
      height: {
        label: 'Altura',
        value: 10,
      },
      length: {
        label: 'Largo',
        value: 50,
      },
      sizes: {
        label: 'Medidas',
        value: '50.0 x 50.0 x 10.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con cuchillo. Mantener el embalaje unos días en caso de devolución.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value: '100% Plumas - ',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '25.99',
      hasMatchMe: false,
      titleEn: 'Dulnia 100% feather cushion filler 50 x 50 cm made in Spain',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'normal',
    bulletPoints: [
      'Cojín hecho de 100% pluma de pato.',
      'Su producción en España contribuye a reducir las emisiones de CO₂ para un menor impacto medioambiental.',
    ],
  },
  {
    sku: 'X03203PL05',
    title: 'Relleno de cojín Dulnia 100% pluma 45 x 45 cm hecho en España',
    description:
      'Alto confort y volumen mullido\n\nLa colección Dulnia reúne rellenos de cojín elaborados con un 100% de pluma de pato, un relleno que destaca por su ligereza, volumen y capacidad para adaptarse al uso. Su composición proporciona una apariencia mullida y permite recuperar fácilmente el volumen del cojín al ahuecarlo, aportando una sensación confortable y acogedora.',
    slug: 'relleno-de-cojin-dulnia-100-pluma-45-x-45-cm-hecho-en-espana',
    stock: 414,
    price: 19.99,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [
      {
        code: 'X03203PL05_1V01',
        url: 'https://d.media.kavehome.com/image/upload/v1789548591/X03203PL05_1V01.jpg',
        type: 'V',
        order: 0,
      },
      {
        code: 'A000002402_4',
        url: 'https://d.media.kavehome.com/image/upload/v1718786721/ambiences/A000002402_4.jpg',
        type: 'A',
        order: 0,
      },
    ],
    mainImage: {
      code: 'X03203PL05_1V01',
      url: 'https://d.media.kavehome.com/image/upload/v1789548591/X03203PL05_1V01.jpg',
      type: 'V',
      order: 0,
    },

    collection: 'Dulnia',
    categories: ['Textil del hogar', 'Rellenos de cojín'],
    tags: [],
    isCustomisable: false,
    attributes: {
      width: {
        label: 'Ancho',
        value: 45,
      },
      height: {
        label: 'Altura',
        value: 10,
      },
      length: {
        label: 'Largo',
        value: 45,
      },
      sizes: {
        label: 'Medidas',
        value: '45.0 x 45.0 x 10.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con cuchillo. Mantener el embalaje unos días en caso de devolución.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value: '100% Plumas - ',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '19.99',
      hasMatchMe: false,
      titleEn: 'Dulnia 100% feather cushion filler 45 x 45 cm made in Spain',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'normal',
    bulletPoints: [
      'Cojín hecho de 100% pluma de pato.',
      'Su producción en España contribuye a reducir las emisiones de CO₂ para un menor impacto medioambiental.',
    ],
  },
  {
    sku: 'X03202PL05',
    title: 'Relleno de cojín Dulnia 100% pluma 60 x 60 cm hecho en España',
    description:
      'Alto confort y volumen mullido\n\nLa colección Dulnia reúne rellenos de cojín elaborados con un 100% de pluma de pato, un relleno que destaca por su ligereza, volumen y capacidad para adaptarse al uso. Su composición proporciona una apariencia mullida y permite recuperar fácilmente el volumen del cojín al ahuecarlo, aportando una sensación confortable y acogedora.',
    slug: 'relleno-de-cojin-dulnia-100-pluma-60-x-60-cm-hecho-en-espana',
    stock: 217,
    price: 29.99,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [
      {
        code: 'X03202PL05_1V01',
        url: 'https://d.media.kavehome.com/image/upload/v1789548591/X03202PL05_1V01.jpg',
        type: 'V',
        order: 0,
      },
      {
        code: 'A000002402_4',
        url: 'https://d.media.kavehome.com/image/upload/v1718786721/ambiences/A000002402_4.jpg',
        type: 'A',
        order: 0,
      },
    ],
    mainImage: {
      code: 'X03202PL05_1V01',
      url: 'https://d.media.kavehome.com/image/upload/v1789548591/X03202PL05_1V01.jpg',
      type: 'V',
      order: 0,
    },

    collection: 'Dulnia',
    categories: ['Textil del hogar', 'Rellenos de cojín'],
    tags: [],
    isCustomisable: false,
    attributes: {
      width: {
        label: 'Ancho',
        value: 60,
      },
      height: {
        label: 'Altura',
        value: 10,
      },
      length: {
        label: 'Largo',
        value: 60,
      },
      sizes: {
        label: 'Medidas',
        value: '60.0 x 60.0 x 10.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con cuchillo. Mantener el embalaje unos días en caso de devolución.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value: '100% Plumas - ',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '29.99',
      hasMatchMe: false,
      titleEn: 'Dulnia 100% feather cushion filler 60 x 60 cm made in Spain',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'normal',
    bulletPoints: [
      'Cojín hecho de 100% pluma de pato.',
      'Su producción en España contribuye a reducir las emisiones de CO₂ para un menor impacto medioambiental.',
    ],
  },
  {
    sku: 'X03201PL05',
    title: 'Relleno de cojín Dulnia 100% pluma 40 x 60 cm hecho en España',
    description:
      'Alto confort y volumen mullido\n\nLa colección Dulnia reúne rellenos de cojín elaborados con un 100% de pluma de pato, un relleno que destaca por su ligereza, volumen y capacidad para adaptarse al uso. Su composición proporciona una apariencia mullida y permite recuperar fácilmente el volumen del cojín al ahuecarlo, aportando una sensación confortable y acogedora.',
    slug: 'relleno-de-cojin-dulnia-100-pluma-40-x-60-cm-hecho-en-espana',
    stock: 219,
    price: 25.99,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [
      {
        code: 'X03201PL05_1V01',
        url: 'https://d.media.kavehome.com/image/upload/v1789548591/products/X03201PL05_1V01.jpg',
        type: 'V',
        order: 0,
      },
      {
        code: 'A000002402_11',
        url: 'https://d.media.kavehome.com/image/upload/v1718786731/ambiences/A000002402_11.jpg',
        type: 'A',
        order: 0,
      },
    ],
    mainImage: {
      code: 'X03201PL05_1V01',
      url: 'https://d.media.kavehome.com/image/upload/v1789548591/products/X03201PL05_1V01.jpg',
      type: 'V',
      order: 0,
    },

    collection: 'Dulnia',
    categories: ['Textil del hogar', 'Rellenos de cojín'],
    tags: [],
    isCustomisable: false,
    attributes: {
      width: {
        label: 'Ancho',
        value: 40,
      },
      height: {
        label: 'Altura',
        value: 10,
      },
      length: {
        label: 'Largo',
        value: 60,
      },
      sizes: {
        label: 'Medidas',
        value: '60.0 x 40.0 x 10.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con cuchillo. Mantener el embalaje unos días en caso de devolución.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value: '100% Plumas - ',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '25.99',
      hasMatchMe: false,
      titleEn: 'Dulnia 100% feather cushion filler 40 x 60 cm made in Spain',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'normal',
    bulletPoints: [
      'Cojín hecho de 100% pluma de pato.',
      'Su producción en España contribuye a reducir las emisiones de CO₂ para un menor impacto medioambiental.',
    ],
  },
  {
    sku: 'X03200PL05',
    title: 'Relleno de cojín Dulnia 100% pluma 30 x 50 cm hecho en España',
    description:
      'Alto confort y volumen mullido\n\nLa colección Dulnia reúne rellenos de cojín elaborados con un 100% de pluma de pato, un relleno que destaca por su ligereza, volumen y capacidad para adaptarse al uso. Su composición proporciona una apariencia mullida y permite recuperar fácilmente el volumen del cojín al ahuecarlo, aportando una sensación confortable y acogedora.',
    slug: 'relleno-de-cojin-dulnia-100-pluma-30-x-50-cm-hecho-en-espana',
    stock: 222,
    price: 15.99,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [
      {
        code: 'X03200PL05_1V01',
        url: 'https://d.media.kavehome.com/image/upload/v1789548592/products/X03200PL05_1V01.jpg',
        type: 'V',
        order: 0,
      },
      {
        code: 'A000002402_12',
        url: 'https://d.media.kavehome.com/image/upload/v1718786736/ambiences/A000002402_12.jpg',
        type: 'A',
        order: 0,
      },
      {
        code: 'A000002402_6',
        url: 'https://d.media.kavehome.com/image/upload/v1718786731/ambiences/A000002402_6.jpg',
        type: 'A',
        order: 1,
      },
    ],
    mainImage: {
      code: 'X03200PL05_1V01',
      url: 'https://d.media.kavehome.com/image/upload/v1789548592/products/X03200PL05_1V01.jpg',
      type: 'V',
      order: 0,
    },

    collection: 'Dulnia',
    categories: ['Textil del hogar', 'Rellenos de cojín'],
    tags: [],
    isCustomisable: false,
    attributes: {
      width: {
        label: 'Ancho',
        value: 30,
      },
      height: {
        label: 'Altura',
        value: 10,
      },
      length: {
        label: 'Largo',
        value: 50,
      },
      sizes: {
        label: 'Medidas',
        value: '50.0 x 30.0 x 10.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con cuchillo. Mantener el embalaje unos días en caso de devolución.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value: '100% Plumas - ',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '15.99',
      hasMatchMe: false,
      titleEn: 'Dulnia 100% feather cushion filler 30 x 50 cm made in Spain',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'normal',
    bulletPoints: [
      'Cojín hecho de 100% pluma de pato.',
      'Su producción en España contribuye a reducir las emisiones de CO₂ para un menor impacto medioambiental.',
    ],
  },
  {
    sku: 'YG0233M46A',
    title:
      'Sobre de chapa de roble para mesa extensible Oqui Ø 120 (200) x 120 cm',
    description: '',
    slug: 'sobre-de-chapa-de-roble-para-mesa-extensible-oqui-o-120-200-x-120-cm',
    stock: 457,
    price: 415,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [],
    mainImage: null,

    collection: 'Oqui',
    categories: ['Mesas'],
    tags: [],
    isCustomisable: false,
    attributes: {
      width: {
        label: 'Ancho',
        value: 129.5,
      },
      height: {
        label: 'Altura',
        value: 15,
      },
      length: {
        label: 'Largo',
        value: 129.5,
      },
      sizes: {
        label: 'Medidas',
        value: '129.5 x 129.5 x 15.0 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: '',
        value: null,
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value: ' - ',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '415.00',
      hasMatchMe: false,
      titleEn:
        'Oak wood veneer table top for the Oqui extendable table, Ø 120 (200) x 120 cm',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'normal',
    bulletPoints: [],
  },
  {
    sku: 'L00050RR12A',
    title: 'Lámpara de escritorio Manie de metal con acabado texturizado beige',
    description:
      'La lámpara de escritorio Manie de metal con acabado texturizado en beige es el complemento ideal para añadir un toque de elegancia y funcionalidad a cualquier espacio. Su diseño minimalista se adapta perfectamente a ambientes modernos y contemporáneos, proporcionando una estética limpia sin perder personalidad. La pantalla cuenta con un foco orientable que permite ajustar la dirección de la luz según tus necesidades, ideal para crear un punto de iluminación puntual para lectura o resaltar elementos decorativos en la pared.\n\nEsta lámpara de escritorio es compatible con bombillas E14 de hasta 25W, ofreciendo la posibilidad de elegir el tipo de iluminación que mejor se adapte a cada espacio y ambiente. La bombilla se vende por separado, permitiéndote personalizar completamente la intensidad y el tono de luz.',
    slug: 'lampara-de-escritorio-manie-de-metal-con-acabado-texturizado-beige-l00050rr12a',
    stock: 0,
    price: 59.99,
    ecoPart: 0,
    salePrice: null,
    dimensionsImage: null,
    minUnitsToSell: 1,
    images: [
      {
        code: 'L00050RR12A_1V01',
        url: 'https://d.media.kavehome.com/image/upload/v1787058421/products/L00050RR12A_1V01.jpg',
        type: 'V',
        order: 0,
      },
      {
        code: 'A25S009_316',
        url: 'https://d.media.kavehome.com/image/upload/v1741256063/ambiences/A25S009_316.jpg',
        type: 'A',
        order: 0,
      },
      {
        code: 'L00050RR12A_1D01',
        url: 'https://d.media.kavehome.com/image/upload/v1787058428/products/L00050RR12A_1D01.jpg',
        type: 'D',
        order: 0,
      },
      {
        code: 'A25S009_317',
        url: 'https://d.media.kavehome.com/image/upload/v1741256068/ambiences/A25S009_317.jpg',
        type: 'A',
        order: 1,
      },
      {
        code: 'L00050RR12A_1D02',
        url: 'https://d.media.kavehome.com/image/upload/v1787058471/products/L00050RR12A_1D02.jpg',
        type: 'D',
        order: 1,
      },
      {
        code: 'L00050RR12A_1D03',
        url: 'https://d.media.kavehome.com/image/upload/v1787058430/products/L00050RR12A_1D03.jpg',
        type: 'D',
        order: 2,
      },
      {
        code: 'L00050RR12A_1D04',
        url: 'https://d.media.kavehome.com/image/upload/v1787058434/products/L00050RR12A_1D04.jpg',
        type: 'D',
        order: 3,
      },
      {
        code: 'L00050RR12A_1D05',
        url: 'https://d.media.kavehome.com/image/upload/v1787058429/products/L00050RR12A_1D05.jpg',
        type: 'D',
        order: 4,
      },
    ],
    mainImage: {
      code: 'L00050RR12A_1V01',
      url: 'https://d.media.kavehome.com/image/upload/v1787058421/products/L00050RR12A_1V01.jpg',
      type: 'V',
      order: 0,
    },

    collection: 'Manie',
    categories: ['Iluminación', 'Lámparas de mesa'],
    tags: [
      {
        label: 'NEW IN',
        variant: 'light-grey',
        textStyle: 'uppercase',
      },
    ],
    isCustomisable: false,
    attributes: {
      width: {
        label: 'Ancho',
        value: 15,
      },
      height: {
        label: 'Altura',
        value: 48.6,
      },
      length: {
        label: 'Largo',
        value: 15,
      },
      sizes: {
        label: 'Medidas',
        value: '15.0 x 15.0 x 48.6 cm',
      },
      technique: {
        label: '',
        value: null,
      },
      edition: {
        label: '',
        value: null,
      },
      descriptiveQuote: {
        label: '',
        value: null,
      },
      descriptiveQuoteAuthor: {
        label: '',
        value: null,
      },
      unpackingSuggestions: {
        label: 'Recomendaciones para el desembalaje',
        value:
          'Vigilar al abrir con un cuchillo. Guardar el embalaje unos días para en caso de retorno y mantener las instrucciones de montaje para posibles consultas.',
      },
      structuredMaterials: {
        label: 'Materiales estructurados',
        value: '90% Hierro, 5% PET, 5% Plástico - ',
      },
    },
    brothers: {
      sizes: [],
      colors: [],
    },
    analyticsInfo: {
      effectivePrice: '59.99',
      hasMatchMe: false,
      titleEn: 'Manie metal desk lamp with beige textured finish',
    },
    isPremium: false,
    material: null,
    secondaryMaterial: null,
    materialHighlight: null,
    requiresMaintenance: false,
    teaserDescription: '',
    teaserAssets: {
      urlMobile: null,
      urlDesktop: null,
    },

    isTopHeavy: false,
    augmentedReality: null,

    returnPolicy: 'normal',
    bulletPoints: [
      'Lámpara de escritorio de metal con acabado texturizado beige.',
      'Pantalla con foco orientable que permite ajustar la dirección de la luz según tus necesidades.',
      'Compatible con bombilla E14 máx. 25W. Se vende por separado.',
      'Disponible en más colores y acabados.',
      'Combinable con el resto de la colección.',
    ],
  },
];

export async function getProductsMock(
  page: number,
): Promise<Response<Product>> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const results = products.slice(start, end);
  const totalPages = Math.ceil(products.length / PAGE_SIZE);

  return {
    count: products.length,
    next: page < totalPages ? `${PRODUCTS_ENDPOINT}?page=${page + 1}` : null,
    previous: page > 1 ? `${PRODUCTS_ENDPOINT}?page=${page - 1}` : null,
    results,
  };
}
