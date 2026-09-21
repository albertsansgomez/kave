import { cn } from '@/utils/cn';

interface LoadingProps {
  className?: string;
}

export default function Loading({ className }: LoadingProps) {
  const addClassName = cn(className, 'flex items-center justify-center');

  return (
    <div className={addClassName}>
      <p className="text-center text-[14px]">Loading</p>
    </div>
  );
}
