import DropDown from '@/components/ui/DropDown';
import ButtonAction from '@/components/ui/ButtonAction';

import { cn } from '@/utils/cn';

interface AddCartProps {
  className?: string;
}

export default function AddCart({ className }: AddCartProps) {
  const addClassName = cn(className, 'flex items-center gap-6');

  return (
    <div className={addClassName}>
      <DropDown />
      <ButtonAction className="flex-1" />
    </div>
  );
}
