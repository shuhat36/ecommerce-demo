import { Flex, Text } from "@chakra-ui/react";

import SideBar from "../components/molecules/sidebar/SideBar";
import Layout from "../components/templates/Layout";

function Products() {
  return (
    <Layout>
      <Text className="text-2xl font-bold">Men's Shoes & Sneakers</Text>
      <Flex direction="row">
        <SideBar />
        <Text>Body</Text>
      </Flex>
    </Layout>
  );
}

export default Products;
