import PaginationButton from './PaginationButton';
import PaginationLink from './PaginationLink';

import Ellipsis from '@/components/icons/Ellipsis.svg';

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
  className?: string;
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
  className,
  currentPage,
  totalPages,
}: PaginationProps) {
  const pages = getPages(currentPage, totalPages);

  const showPreviousEllipsis = pages[0] > 1;
  const showNextEllipsis = pages[pages.length - 1] < totalPages;

  const hasPrevious = currentPage > 1 && totalPages > 3;
  const hasNext = currentPage < totalPages && totalPages > 3;

  return (
    <nav className={className} aria-label="Paginación">
      <ul className="flex items-center justify-center h-[88px]">
        <li>
          <PaginationButton
            href={`?page=${currentPage - 1}`}
            direction="left"
            ariaLabel="Página anterior"
            enabled={hasPrevious}
          />
        </li>

        {showPreviousEllipsis && (
          <li>
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center"
            >
              <Ellipsis className="fill-[#6C6C66] w-[18px] h-1" />
            </span>
          </li>
        )}

        {pages.map((page) => {
          const isCurrent = page === currentPage;

          return (
            <li key={page}>
              <PaginationLink
                href={`?page=${page}`}
                content={page}
                isCurrent={isCurrent}
                ariaLabel={isCurrent ? 'page' : undefined}
              />
            </li>
          );
        })}

        {showNextEllipsis && (
          <li>
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center"
            >
              <Ellipsis className="fill-[#6C6C66] w-[18px] h-1" />
            </span>
          </li>
        )}

        <li>
          <PaginationButton
            href={`?page=${currentPage + 1}`}
            direction="right"
            ariaLabel="Página siguiente"
            enabled={hasNext}
          />
        </li>
      </ul>
    </nav>
  );
}
