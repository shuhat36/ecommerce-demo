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
} from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";
import { IProduct } from "../../../interfaces";

function ProductCard({ product }: { product: IProduct }) {
  const { addToCart } = useContext(CartContext);
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
            <Button variant="solid" className="bg-gray-900">
              Buy now
            </Button>
            <Button
              onClick={() => addToCart(product)}
              variant="ghost"
              colorScheme="bg-gray-900"
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default ProductCard;
