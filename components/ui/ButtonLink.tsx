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
    'h-10 whitespace-nowrap bg-white px-5 py-2 text-center text-[14px] hover:bg-gray-400 hover:text-white',
  );

  return (
    <Link href={href} className={buttonClassName}>
      {text}
    </Link>
  );
}
