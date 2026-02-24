import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <nav className="ui-pagination" aria-label="Pagination">
      <ReactPaginate
        forcePage={Math.max(0, currentPage - 1)}
        pageCount={pageCount}
        onPageChange={({ selected }) => onPageChange(selected + 1)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        breakLabel="…"
        previousLabel={<ChevronLeft className="size-5" aria-hidden="true" />}
        nextLabel={<ChevronRight className="size-5" aria-hidden="true" />}
        renderOnZeroPageCount={null}
        breakAriaLabels={{ forward: "Jump forward", backward: "Jump backward" }}
        previousAriaLabel="Go to previous page"
        nextAriaLabel="Go to next page"
        containerClassName="ui-pagination-list"
        pageLinkClassName="ui-pagination-link"
        activeLinkClassName="ui-pagination-link-active"
        disabledLinkClassName="ui-pagination-link-disabled"
        previousLinkClassName="ui-pagination-icon-btn"
        nextLinkClassName="ui-pagination-icon-btn"
        breakLinkClassName="ui-pagination-link"
      />
    </nav>
  );
}
