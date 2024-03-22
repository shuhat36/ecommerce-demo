import ReactPaginate from "react-paginate";

interface IPaginationProps {
  pageCount: number;
  onPageChange: ({ selected }: { selected: number }) => void;
  currentPage: number;
}

const Pagination = ({
  pageCount,
  onPageChange,
  currentPage,
}: IPaginationProps) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      forcePage={currentPage}
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      containerClassName={"pagination flex justify-center mt-4"}
      activeClassName={"active rounded p-2 bg-gray-700 text-white"}
      pageClassName={"mx-1 p-2"}
      previousClassName={"mx-1 rounded bg-gray-700 text-white p-2"}
      nextClassName={"mx-1 rounded bg-gray-700 text-white p-2"}
    />
  );
};

export default Pagination;
