import Link from 'next/link';
import Image from 'next/image';

import { kaveHafferText } from '@/fonts/fonts';

export default function Hero() {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative min-h-[calc(100vh-62px)] w-full"
        >
            <Image
                src="https://picsum.photos/375/300"
                fill
                priority
                alt="Lorem ipsum dolor sit amet"
                className="object-cover"
                sizes="100vw"
            />

            <div className="absolute w-full h-full bg-amber-500">
                <div className="bg-red-600 absolute w-full bottom-0 left-0 pt-[33px] pr-4 pb-4 pl-6 lg:pt-8 lg:pr-[72px] lg:pb-10 lg:pl-[72px] flex flex-row justify-between items-end">
                    <div>
                        <p className="font-normal text-white">New Collection</p>
                        <h1 id="hero-title" className="font-kave-text text-white text-[56px] lg:text-[42px] leading-tight">
                            Estar fuera.
                            <br />
                            Una manera muy nuestra de estar.
                        </h1>
                    </div>
                    <div className="flex items-end gap-2 bg-green-600">
                        <Link
                            href="#"
                            className="text-center font-normal bg-white  hover:bg-gray-400 hover:text-white pt-2 pr-5 pb-2 pl-5 h-10"
                        >
                            Ver editorial
                        </Link>
                        <Link
                            href="#"
                            className="text-center font-normal bg-white  hover:bg-gray-400 hover:text-white pt-2 pr-5 pb-2 pl-5 h-10"
                        >
                            Ver productos
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
