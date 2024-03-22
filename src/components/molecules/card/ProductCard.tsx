import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IProduct } from "../../../interfaces";

function ProductCard({ title, image, category, price }: IProduct) {
  return (
    <>
      <Card maxW="sm" size="sm" className="flex-col gap-4">
        <CardBody maxH="28rem">
          <Image
            className="h-4/6"
            src={image}
            alt="product image"
            borderRadius="lg"
          />
          <Stack mt="4" spacing="1">
            <Heading size="md">{title}</Heading>
            <Text>{category}</Text>
            <Text className="text-black font-semibold" fontSize="2xl">
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" className="bg-gray-900">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="bg-gray-900">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default ProductCard;
