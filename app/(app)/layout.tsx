import { Header } from '@/components/layout/Header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full">{children}</main>
    </div>
  );
}
