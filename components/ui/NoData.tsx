import { cn } from '@/utils/cn';

interface NoDataProps {
  className?: string;
  message?: string;
}

export default function NoData({ className, message }: NoDataProps) {
  const addClassName = cn(className, 'flex items-center justify-center');

  return (
    <div className={addClassName}>
      <p className="text-center text-[14px]">{message}</p>
    </div>
  );
}
