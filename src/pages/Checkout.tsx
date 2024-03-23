import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import CheckoutSection from "../components/organisms/CheckoutSection";
import DeliverCart from "../components/organisms/DeliverCartSection";
import InYourBag from "../components/organisms/InYourBag";
import Layout from "../components/templates/Layout";

function Checkout() {
  return (
    <>
      <Layout>
        <Box className="flex flex-wrap justify-center gap-8 my-8">
          <Box className="flex-col w-3/6 min-w-80">
            <Accordion defaultIndex={[0]}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="ml-1 mx-4 text-xl"
                    >
                      Delivery Options
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <CheckoutSection />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem className="mt-8">
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="ml-1 mx-4 text-xl"
                    >
                      Select Shipping
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <DeliverCart />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <InYourBag />
        </Box>
      </Layout>
    </>
  );
}

export default Checkout;
