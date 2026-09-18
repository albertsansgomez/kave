import { cn } from '@/utils/cn';

interface ButtonActionProps {
  className?: string;
}

export default function ButtonAction({ className }: ButtonActionProps) {
  const buttonClassName = cn(className, 'flex-1 bg-[#383831] hover:bg-[#97978a] px-6 py-3 text-white cursor-pointer');

  return (
    <button
      type="button"
      className={buttonClassName}
    >
      Añadir a mi cesta
    </button>
  );
}
