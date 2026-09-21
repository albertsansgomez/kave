import Header from "@/components/layout/Header";

export default function NotFound() {
  return (

    <div className="min-h-screen w-full">
      <Header />
      <main className="w-full">
        <div className="flex min-h-[calc(100dvh-64px)] flex-col">
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-[40px]">Se ha producido un error</h1>
            <p>La página que está buscando no existe.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
