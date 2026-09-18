import Product from '@/components/ui/Product';
import Pagination from '@/components/ui/Pagination';
import PageIntro from '@/components/ui/PageIntro';

export default function Wishlist() {
  return (
    <>
      <PageIntro
        title="Wishlist"
        description="Aquí vienen las piezas que te gustan."
      />

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-[37px] lg:gap-x-2 lg:gap-y-[60px]">
        {Array.from({ length: 4 }, (_, index) => (
          <Product key={index} />
        ))}
      </section>

      <Pagination
        className="mt-[60px] mb-[56px]"
        currentPage={1}
        totalPages={7}
      />
    </>
  );
}
