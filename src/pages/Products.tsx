import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import DropDown from "../components/atoms/DropDown";
import SideBar from "../components/molecules/sidebar/SideBar";
import ProductList from "../components/organisms/ProductList";
import Layout from "../components/templates/Layout";
import { IProduct } from "../interfaces";
import { fetchProductData } from "../services/api/ProductListApi";

function Products() {
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const handleSortChange = (selectedOption: string) => {
    setSelectedSortOption(selectedOption);
  };

  const {
    data: productsData,
    isLoading,
    isError,
  } = useQuery<IProduct[]>("products", fetchProductData);

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

  const sortedProductsData = (): IProduct[] => {
    if (productsData) {
      if (selectedSortOption === "Price: High to Low") {
        return [...productsData].sort(
          (a, b) => (b.price ?? 0) - (a.price ?? 0)
        );
      } else if (selectedSortOption === "Price: Low to High") {
        return [...productsData].sort(
          (a, b) => (a.price ?? 0) - (b.price ?? 0)
        );
      } else if (selectedSortOption === "Rating: Low to High") {
        return [...productsData].sort(
          (a, b) => (a.rating?.rate ?? 0) - (b.rating?.rate ?? 0)
        );
      } else if (selectedSortOption === "Rating: High to Low") {
        return [...productsData].sort(
          (a, b) => (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0)
        );
      } else {
        return productsData;
      }
    }
    return [];
  };

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
            <SideBar />
          </Box>

          <Box className="w-5/8 grow">
            <ProductList productsData={sortedProductsData()} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default Products;
