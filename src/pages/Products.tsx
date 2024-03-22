import { Box, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import DropDown from "../components/atoms/DropDown";
import SideBar from "../components/molecules/sidebar/SideBar";
import ProductList from "../components/organisms/ProductList";
import Layout from "../components/templates/Layout";
import { IProduct } from "../interfaces";
import { fetchProductData } from "../services/api/ProductListApi";

function Products() {
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
          />
        </Box>

        <Box className="flex w-full">
          <Box className="grow-0">
            <SideBar />
          </Box>

          <Box className="w-5/8 grow">
            <ProductList productsData={productsData as IProduct[]} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default Products;
