import Link from 'next/link';

import { cn } from '@/utils/cn';

interface ButtonLinkProps {
  className?: string;
  text: string;
  href: string;
}

export default function ButtonLink({ text, href, className }: ButtonLinkProps) {
  const buttonClassName = cn(
    className,
    'whitespace-nowrap text-center font-normal bg-white hover:bg-gray-400 hover:text-white pt-2 pr-5 pb-2 pl-5 h-10',
  );

  return (
    <Link href={href} className={buttonClassName}>
      {text}
    </Link>
  );
}
