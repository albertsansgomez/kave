import Link from 'next/link';

/**
 * Devuelve las páginas que se mostrarán,
 * manteniendo la página actual centrada
 * cuando sea posible y ajustando el rango
 * en los extremos.
 */
const getPages = (currentPage: number, totalPages: number) => {
  if (totalPages <= 3) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 2) {
    return [1, 2, 3];
  }

  if (currentPage >= totalPages - 2) {
    return [totalPages - 2, totalPages - 1, totalPages];
  }

  return [currentPage - 1, currentPage, currentPage + 1];
};

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const pages = getPages(currentPage, totalPages);

  const showPreviousEllipsis = pages[0] > 1;
  const showNextEllipsis = pages[pages.length - 1] < totalPages;

  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav aria-label="Paginación">
      <ul className="flex items-center justify-center gap-8">
        <li>
          {hasPrevious ? (
            <Link
              href={`?page=${currentPage - 1}`}
              aria-label="Página anterior"
              className="flex h-10 w-10 items-center justify-center text-[20px]"
            >
              ‹
            </Link>
          ) : (
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center text-[20px] opacity-30"
            >
              ‹
            </span>
          )}
        </li>

        {showPreviousEllipsis && (
          <li>
            <span aria-hidden="true">...</span>
          </li>
        )}

        {pages.map((page) => {
          const isCurrent = page === currentPage;

          return (
            <li key={page}>
              <Link
                href={`?page=${page}`}
                aria-current={isCurrent ? 'page' : undefined}
                className={`relative flex h-10 w-10 items-center justify-center text-[15px] leading-5 ${
                  isCurrent
                    ? 'after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-black'
                    : ''
                }`}
              >
                {page}
              </Link>
            </li>
          );
        })}

        {showNextEllipsis && (
          <li>
            <span aria-hidden="true">...</span>
          </li>
        )}

        <li>
          {hasNext ? (
            <Link
              href={`?page=${currentPage + 1}`}
              aria-label="Página siguiente"
              className="flex h-10 w-10 items-center justify-center text-[20px]"
            >
              ›
            </Link>
          ) : (
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center text-[20px] opacity-30"
            >
              ›
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}
