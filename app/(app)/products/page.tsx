import Pagination from '@/components/ui/Pagination';
import PageIntro from '@/components/ui/PageIntro';

export default function Products() {
  return (
    <>
      <PageIntro
        title="Todos los productos"
        description="Explora todas nuestras colecciones y encuentra esas piezas que hacen de tu casa un lugar más tuyo."
      />

      <Pagination
        className="mt-[60px] mb-[56px]"
        currentPage={1}
        totalPages={7}
      />
    </>
  );
}
