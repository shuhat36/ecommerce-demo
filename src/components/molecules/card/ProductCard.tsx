import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../contexts/CartContext";
import { IProduct } from "../../../interfaces";
import { CartModal } from "../../organisms/CartModal";

function ProductCard({ product }: { product: IProduct }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product: IProduct) => {
    addToCart(product);
    onOpen();
  };
  return (
    <>
      <Card maxW="sm" size="sm" className="flex-col gap-4">
        <CardBody maxH="28rem">
          <Image
            className="h-4/6"
            src={product.image}
            alt="product image"
            borderRadius="lg"
          />
          <Stack mt="4" spacing="1">
            <Heading size="md">{product.title}</Heading>
            <Text>{product.category}</Text>
            <Text className="text-black font-semibold" fontSize="2xl">
              ${product.price}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link to="/checkout">
              <Button
                variant="solid"
                className="bg-gray-900"
                onClick={() => addToCart(product)}
              >
                Buy now
              </Button>
            </Link>
            <Button
              onClick={() => handleAddToCart(product)}
              variant="ghost"
              colorScheme="bg-gray-900"
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <CartModal onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default ProductCard;
