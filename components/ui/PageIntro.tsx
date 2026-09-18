interface PageIntroProps {
  title: string;
  description: string;
}

export default function PageIntro({ title, description }: PageIntroProps) {
    return (
        <div className="pt-3 pr-6 pb-6 pl-6 lg:pt-12 lg:pr-20 lg:pb-8 lg:pl-20">
            <h1 className="font-normal text-[46px] leading-[46px]">{title}</h1>
            <p className="font-normal text-[15px] leading-5 lg:w-[644px] mt-3">
                {description}
            </p>
        </div>
    );
}
