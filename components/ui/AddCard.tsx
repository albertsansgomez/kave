import DropDown from '@/components/ui/DropDown';
import ButtonAddCart from '@/components/ui/ButtonAddCart';

import { cn } from '@/utils/cn';

interface AddCartProps {
  className?: string;
}

export default function AddCart({ className }: AddCartProps) {
  const addClassName = cn(className, 'flex items-center gap-6');

  return (
    <div className={addClassName}>
      <DropDown
        options={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
        ]}
      />
      <ButtonAddCart className="flex-1" />
    </div>
  );
}
