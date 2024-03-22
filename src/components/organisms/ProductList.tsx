import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { IProduct, ProductListProps } from "../../interfaces";
import Pagination from "../atoms/Pagination";
import ProductCard from "../molecules/card/ProductCard";

function ProductList({ productsData }: ProductListProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 9;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedProducts = productsData.slice(startIndex, endIndex);

  const handlePageChange = (selectedObject: { selected: number }) => {
    setCurrentPage(selectedObject.selected);
  };
  return (
    <>
      <Box className="flex flex-wrap justify-center gap-y-6">
        {displayedProducts?.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </Box>
      <Pagination
        pageCount={Math.ceil(productsData.length / itemsPerPage)}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </>
  );
}

export default ProductList;
