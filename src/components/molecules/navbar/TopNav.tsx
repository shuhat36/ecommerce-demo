"use client";

import { Box, Flex, HStack } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Links = ["Find a Store", "Help", "Join Us", "Sign In"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box as="a" py={1} className="font-bold text-xs" href={"#"}>
      {children}
      <span className="px-2"> | </span>
    </Box>
  );
};

export default function TopNav() {
  return (
    <>
      <Box className="bg-gray-100" px={24}>
        <Flex h={10} justifyContent={"flex-end"}>
          <HStack as={"nav"} display={"flex"}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
