import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

const InYourBag = () => {
  const { cart } = useContext(CartContext);
  const subTotal = cart.reduce(
    (total, product) => total + (product.price as number),
    0
  );
  return (
    <Box className="min-w-60">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        In Your Bag
      </Text>
      <Box className="w-full">
        <Box className="flex justify-between">
          <Text>Subtotal:</Text>
          <Text>${subTotal}</Text>
        </Box>
        <Box className="flex justify-between">
          <Text>Estimated Shipping:</Text>
          <Text>${Math.round(subTotal / 12)}</Text>
        </Box>
        <Box className="flex justify-between">
          <Text>Total:</Text>
          <Text>${subTotal + Math.round(subTotal / 12)}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default InYourBag;
