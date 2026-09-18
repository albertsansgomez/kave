import Product from '@/components/ui/Product';
import Pagination from '@/components/ui/Pagination';

export default function Wishlist() {
  return (
    <>
      <div className="bg-amber-500 pt-3 pr-6 pb-6 pl-6 lg:pt-12 lg:pr-20 lg:pb-8 lg:pl-20">
        <h1 className="font-normal text-[46px] leading-[46px]">Wishlist</h1>
        <p className="font-normal text-[15px] leading-5 lg:w-[644px] mt-3">
          Aquí vienen las piezas que te gustan.{' '}
        </p>
      </div>

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
