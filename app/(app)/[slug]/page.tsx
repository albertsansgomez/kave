import Product from '@/components/ui/Product';
import Pagination from '@/components/ui/Pagination';
import PageIntro from '@/components/ui/PageIntro';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <>
      <PageIntro
        title="Mesas"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
