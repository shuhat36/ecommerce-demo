"use client";
import { Icon } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../contexts/CartContext";
import { NavItem } from "../../../interfaces";
import CartIcon from "../../atoms/CartIcon";
import Logo from "/nike.svg";

export default function MainNav() {
  const { isOpen, onToggle } = useDisclosure();
  const { cart } = useContext(CartContext);
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={24}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-between" }}
        >
          <Image
            src={Logo}
            alt="Placeholder Image"
            borderRadius="full"
            boxSize="60px"
            objectFit="fill"
          />

          <Flex className="my-auto" display={{ base: "none", md: "flex" }}>
            <DesktopNav />
          </Flex>
          <Flex gap={2} my={"auto"}>
            <FaRegHeart size={24} className="cursor-pointer" />
            <Link to="/checkout">
              <CartIcon quantity={cart.length} />
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.900", "gray.700");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                // p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "gray.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"gray.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "New & Featured",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Men",
    children: [
      {
        label: "Clothings",
        subLabel: "Find your dream fabrics",
        href: "#",
      },
      {
        label: "Shoes",
        subLabel: "An exclusive list for shoes",
        href: "#",
      },
    ],
  },
  {
    label: "Women",
    children: [
      {
        label: "Clothings",
        subLabel: "Find your dream fabrics",
        href: "#",
      },
      {
        label: "Shoes",
        subLabel: "An exclusive list for shoes",
        href: "#",
      },
    ],
  },
  {
    label: "Kids",
    children: [
      {
        label: "Clothings",
        subLabel: "Find your dream fabrics",
        href: "#",
      },
      {
        label: "Shoes",
        subLabel: "An exclusive list for shoes",
        href: "#",
      },
    ],
  },
  {
    label: "Accessories",
    children: [
      {
        label: "Clothings",
        subLabel: "Find your dream fabrics",
        href: "#",
      },
      {
        label: "Shoes",
        subLabel: "An exclusive list for shoes",
        href: "#",
      },
    ],
  },
];
