import PaginationLink from './PaginationLink';

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

/**
 * Se muestran tres páginas consecutivas y
 * elipsis cuando existen páginas ocultas 
 * manteniendo la página actual centrada
 * cuando sea posible cubriendo así los 
 * diferentes escenarios.
 * 
 * Se define esta lógica de paginación al no 
 * estar completamente especificado su comportamiento 
 * en el diseño. 
 */
export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const pages = getPages(currentPage, totalPages);

  const showPreviousEllipsis = pages[0] > 1;
  const showNextEllipsis = pages[pages.length - 1] < totalPages;

  const hasPrevious = currentPage > 1 && totalPages > 3;
  const hasNext = currentPage < totalPages && totalPages > 3;

  return (
    <nav aria-label="Paginación">
      <ul className="flex items-center justify-center gap-8">
        <li>
          <PaginationLink
            href={`?page=${currentPage - 1}`}
            content="‹"
            ariaLabel="Página anterior"
            enabled={hasPrevious}
          />
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
              <PaginationLink
                href={`?page=${page}`}
                content={page}
                ariaLabel={isCurrent ? 'page' : undefined}
              />
            </li>
          );
        })}

        {showNextEllipsis && (
          <li>
            <span aria-hidden="true">...</span>
          </li>
        )}

        <li>
          <PaginationLink
            href={`?page=${currentPage + 1}`}
            content="›"
            ariaLabel="Página siguiente"
            enabled={hasNext}
          />
        </li>
      </ul>
    </nav>
  );
}
