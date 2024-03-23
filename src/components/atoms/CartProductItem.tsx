import { CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { IProduct } from "../../interfaces";

function CartProductItem({ product }: { product: IProduct }) {
  return (
    <>
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={product.image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{product.title}</Heading>
          <Text>{product.category}</Text>
          <Text py="2" fontWeight={"bold"}>
            ${product.price}
          </Text>
        </CardBody>

        {/* <CardFooter>AA</CardFooter> */}
      </Stack>
    </>
  );
}

export default CartProductItem;
