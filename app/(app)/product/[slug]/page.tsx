interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Producto: {slug}</h1>
    </main>
  );
}
