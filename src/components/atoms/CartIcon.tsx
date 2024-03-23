import { Badge, Flex } from "@chakra-ui/react";
import { HiOutlineShoppingBag } from "react-icons/hi";

interface IQuantity {
  quantity: number;
}
const CartIcon = ({ quantity }: IQuantity) => {
  return (
    <Flex align="center" position="relative" className="cursor-pointer">
      <HiOutlineShoppingBag size={24} />
      {quantity > 0 && (
        <Badge
          borderRadius="full"
          variant="solid"
          colorScheme="red"
          position="absolute"
          top="-2px"
          right="-2px"
        >
          {quantity}
        </Badge>
      )}
    </Flex>
  );
};

export default CartIcon;
