'use client';

import { useRouter } from 'next/navigation';

import Heart from '@/components/icons/Heart.svg';

interface HeartLinkProps {
  href: string;
}

export function HeartLink({ href }: HeartLinkProps) {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push(href)}>
      <Heart className="h-6 w-6 stroke-black hover:stroke-gray-600 cursor-pointer" />
    </button>
  );
}
