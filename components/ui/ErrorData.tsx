interface ErrorDataProps {
  message: string;
}

export default function ErrorData({ message }: ErrorDataProps) {
  return (
    <div className="flex min-h-[calc(100dvh-64px)] flex-col">
      <div className="flex items-center justify-center flex-1">{message}</div>
    </div>
  );
}
