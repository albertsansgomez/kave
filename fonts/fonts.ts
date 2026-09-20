import localFont from 'next/font/local';

export const kaveHafferText = localFont({
  src: [
    {
      path: './KaveHafferText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './KaveHafferText-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-haffer-text',
});

export const martinaText = localFont({
  src: [
    {
      path: './MartinaPlantijn-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-martina-text',
});
