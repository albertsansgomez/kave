import Link from 'next/link';

import Heart from '@/components/icons/Heart.svg';

interface FavoriteLinkProps {
  href: string;
}

export default function FavoriteLink({ href }: FavoriteLinkProps) {
  return (
    <Link href={href} aria-label="Favoritos">
      <Heart className="h-6 w-6 cursor-pointer stroke-black hover:stroke-gray-600" />
    </Link>
  );
}
