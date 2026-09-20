import Link from 'next/link';

interface ButtonHeroProps {
  text: string;
  href: string;
}

export default function ButtonHero({ text, href }: ButtonHeroProps) {
  return (
    <Link
      href={href}
      className="shrink-0 whitespace-nowrap text-center font-normal bg-white hover:bg-gray-400 hover:text-white pt-2 pr-5 pb-2 pl-5 h-10"
    >
      {text}
    </Link>
  );
}
