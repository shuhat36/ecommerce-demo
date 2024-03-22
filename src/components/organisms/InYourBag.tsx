import { Box, Text } from "@chakra-ui/react";

const InYourBag = () => {
  return (
    <Box className="w-1/6 min-w-40">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        In Your Bag
      </Text>
      <Box className="w-full">
        <Box className="flex justify-between">
          <Text>Subtotal:</Text>
          <Text>$230.00</Text>
        </Box>
        <Box className="flex justify-between">
          <Text>Estimated Shipping:</Text>
          <Text>$8.00</Text>
        </Box>
        <Box className="flex justify-between">
          <Text>Total:</Text>
          <Text>$238.00</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default InYourBag;
