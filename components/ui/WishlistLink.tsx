import Link from 'next/link';

import Heart from '@/components/icons/Heart.svg';

interface WishlistLinkProps {
  href: string;
}

export default function WishlistLink({ href }: WishlistLinkProps) {
  return (
    <Link href={href} aria-label="Lista de deseados">
      <Heart className="h-6 w-6 cursor-pointer text-black hover:text-[#E53935] hover:[--heart-fill:#E53935]" />
    </Link>
  );
}
