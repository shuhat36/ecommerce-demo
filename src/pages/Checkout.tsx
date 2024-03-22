import { Box } from "@chakra-ui/react";
import CheckoutSection from "../components/organisms/CheckoutSection";
import InYourBag from "../components/organisms/InYourBag";
import Layout from "../components/templates/Layout";

function Checkout() {
  return (
    <>
      <Layout>
        <Box className="flex flex-wrap gap-8 my-8">
          <CheckoutSection />
          <InYourBag />
        </Box>
      </Layout>
    </>
  );
}

export default Checkout;
