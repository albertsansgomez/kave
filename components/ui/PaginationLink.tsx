import Link from 'next/link';

import { cn } from '@/utils/cn';

interface PaginationLinkProps {
  href: string;
  content: string | number;
  ariaLabel?: string;
  isCurrent?: boolean;
  enabled?: boolean;
}

export default function PaginationLink({
  href,
  content,
  ariaLabel,
  isCurrent = false,
  enabled = true,
}: PaginationLinkProps) {
  const disabled = !enabled;

  const className = cn({
    'flex h-10 w-10 items-center justify-center text-[20px]': true,
    'after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-black':
      isCurrent,
    'opacity-30': disabled,
    'hover:text-gray-400': !disabled,
  });

  return enabled ? (
    <Link href={href} aria-label={ariaLabel} className={className}>
      {content}
    </Link>
  ) : (
    <span aria-hidden="true" className={className}>
      {content}
    </span>
  );
}
