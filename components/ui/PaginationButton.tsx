import Link from 'next/link';

import Arrow from '@/components/icons/Arrow.svg';

import { cn } from '@/utils/cn';

interface PaginationButtonProps {
  href: string;
  direction: 'left' | 'right';
  ariaLabel?: string;
  enabled?: boolean;
}

export default function PaginationButton({
  href,
  direction,
  ariaLabel,
  enabled = true,
}: PaginationButtonProps) {
  const className = cn({
    'flex size-10 items-center justify-center': true,
    'opacity-30': !enabled,
  });

  const classNameIcon = cn({
    'stroke-black size-5': true,
    'rotate-180': direction === 'right',
    'hover:stroke-gray-400': enabled,
  });

  return enabled ? (
    <Link href={href} aria-label={ariaLabel} className={className}>
      <Arrow className={classNameIcon} />
    </Link>
  ) : (
    <span aria-hidden="true" className={className}>
      <Arrow className={classNameIcon} />
    </span>
  );
}
