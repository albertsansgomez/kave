import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { kaveHafferText, martinaText } from '@/fonts/fonts';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Kave',
  description: 'Kave',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${kaveHafferText.variable} ${martinaText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
