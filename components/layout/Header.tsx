import Link from 'next/link';

import { HeartLink } from "@/components/ui/HeartLink";
import LogoKaveBig from '@/components/elements/LogoKaveBig.svg';

export function Header() {
    return (
        <header className="w-full bg-red-500">
            <div className="flex h-16 items-center justify-between pt-2 pr-4 pb-2 pl-6">
                <Link href="/"><LogoKaveBig className="h-[16px] lg:h-[20px] w-auto" /></Link>
                <nav className="hidden lg:flex gap-3">
                    <a href="#" className="bg-gray-200 block h-[20px] w-[89px]" />
                    <a href="#" className="bg-gray-200 block h-[20px] w-[79px]" />
                    <a href="#" className="bg-gray-200 block h-[20px] w-[75px]" />
                    <a href="#" className="bg-gray-200 block h-[20px] w-[104px]" />
                    <a href="#" className="bg-gray-200 block h-[20px] w-[87px]" />
                    <a href="#" className="bg-gray-200 block h-[20px] w-[93px]" />
                </nav>
                <div className="flex items-center gap-4">
                    <button className="bg-gray-200 block h-[20px] w-[20px]" />
                    <HeartLink href="/" />
                    <button className="bg-gray-200 block h-[20px] w-[20px]" />
                </div>
            </div>
        </header>
    );
}