import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import DropDown from "../components/atoms/DropDown";
import SideBar from "../components/molecules/sidebar/SideBar";
import ProductList from "../components/organisms/ProductList";
import Layout from "../components/templates/Layout";
import { useProductData } from "../hooks/useProductData";
import { IProduct } from "../interfaces";
import { sortProductsData } from "../services/utils/sortProducts";

function Products() {
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const handleSortChange = (selectedOption: string) => {
    setSelectedSortOption(selectedOption);
  };
  const handleCategoryChange = (selectedCats: string[]) => {
    setSelectedCategories(selectedCats);
    console.log("ss1", selectedCategories);
  };

  const { data: productsData, isLoading, isError } = useProductData();

  let filteredProductsData = productsData;

  if (selectedCategories.length > 0) {
    filteredProductsData = productsData?.filter((product) =>
      selectedCategories.includes(product.category as string)
    );
  }

  if (isLoading) {
    return (
      <Layout>
        <Text>Loading...</Text>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <Text>Error fetching data.</Text>
      </Layout>
    );
  }

  console.log("productsData", productsData);

  return (
    <Layout>
      <Box className="my-8">
        <Box className="flex justify-between w-full bg-red mb-4">
          <Text className="text-2xl font-bold w-2/6">All Products</Text>
          <DropDown
            Title="Sort By"
            Options={[
              "Price: High to Low",
              "Price: Low to High",
              "Rating: Low to High",
              "Rating: High to Low",
            ]}
            onSelectChange={handleSortChange}
          />
        </Box>

        <Box className="flex w-full">
          <Box className="grow-0">
            <SideBar onCategoryChange={handleCategoryChange} />
          </Box>

          <Box className="w-5/8 grow">
            <ProductList
              productsData={sortProductsData(
                filteredProductsData as IProduct[],
                selectedSortOption
              )}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default Products;
