import { Card } from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";
import CartProductItem from "../../atoms/CartProductItem";

function CartProductCard() {
  const { cart } = useContext(CartContext);
  console.log("cc", cart);
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <CartProductItem product={cart[cart.length - 1]} />
    </Card>
  );
}

export default CartProductCard;
