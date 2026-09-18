'use client';

import { cn } from '@/utils/cn';

import Heart from '@/components/icons/Heart.svg';

interface WishlistLinkButtonProps {
  isActive: boolean;
  className?: string;
}

export default function WishlistLinkButton({
  isActive,
  className,
}: WishlistLinkButtonProps) {
  const heartClassName = cn(
    className,
    'h-6 w-6 cursor-pointer transition-colors',
    {
      'text-[#FF5A5F] [--heart-fill:#FF5A5F] hover:text-[#E53935] hover:[--heart-fill:#E53935]':
        isActive,
      'text-[#6B6A66] [--heart-fill:#FFFFFF] hover:text-[#1F1F1C] hover:[--heart-fill:#FFFFFF]':
        !isActive,
    },
  );

  return (
    <button
      type="button"
      aria-label="Agregar a la lista de deseados"
      className={heartClassName}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <Heart className="h-full w-full" />
    </button>
  );
}
