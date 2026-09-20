import { cn } from '@/utils/cn';

interface ProductBenefitsProps {
  className?: string;
}

export default function ProductBenefits({ className }: ProductBenefitsProps) {
  const sectionClassName = cn(className, 'w-full bg-[#F7F6F4]');

  return (
    <section aria-labelledby="benefits-title" className={sectionClassName}>
      <h2 id="benefits-title" className="sr-only">
        Ventajas de compra
      </h2>
      <ul className="grid lg:grid-cols-3 gap-8 pt-8 pr-6 pb-8 pl-6 lg:h-[143px]">
        <li className="flex flex-col justify-center items-center">
          <h3 className="font-[670] text-[16px] leading-[24px]">
            Devoluciones gratuitas
          </h3>
          <a href="#" className="underline">
            Ver condiciones
          </a>
        </li>

        <li className="flex flex-col justify-center items-center lg:hidden">
          <h3 className="font-[670] text-[16px] leading-[24px]">
            Garantía 10 años
          </h3>
          <a href="#" className="underline">
            Ver condiciones
          </a>
        </li>

        <li className="flex flex-col justify-center items-center">
          <h3 className="font-[670] text-[16px] leading-[24px]">
            Más de 175 puntos de venta
          </h3>
          <a href="#" className="underline">
            Ver tiendas
          </a>
        </li>

        <li className="flex flex-col justify-center items-center">
          <h3 className="font-[670] text-[16px] leading-[24px]">
            Financiación sin intereses
          </h3>
          <a href="#" className="underline">
            Ver opciones
          </a>
        </li>
      </ul>
    </section>
  );
}
