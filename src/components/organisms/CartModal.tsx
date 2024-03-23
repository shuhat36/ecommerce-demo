import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import CartProductCard from "../molecules/card/CartProductCard";

interface ICartModalProps {
  onClose: () => void;
  isOpen: boolean;
}

export function CartModal({ onClose, isOpen }: ICartModalProps) {
  console.log("Hello");
  const { cart } = useContext(CartContext);
  return (
    <>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Box className="flex gap-x-2">
              <FaRegCheckCircle className="my-auto" />
              <Text>Added to cart</Text>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CartProductCard />
          </ModalBody>
          <Box className="flex justify-around my-2">
            <Link to="/checkout">
              <Button>View Bag ({cart.length})</Button>
            </Link>
            <Button>Checkout</Button>
          </Box>
          <ModalFooter mx={"auto"} fontWeight="bold">
            Members get free shipping on orders $50+. Join Us or Sign-in
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
