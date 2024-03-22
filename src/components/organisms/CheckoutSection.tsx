import { Box, Button, Input } from "@chakra-ui/react";

function CheckoutSection() {
  return (
    <Box className="w-4/6 min-w-72 flex flex-col flex-wrap gap-4 justify-start">
      {/* First Name and Last Name */}
      <Box className="flex gap-4 w-full">
        <Input placeholder="First Name" size={"lg"} />
        <Input placeholder="Last Name" size={"lg"} />
      </Box>

      {/* Address */}
      <Box className="w-full">
        <Input placeholder="Address" size={"lg"} />
      </Box>

      {/* Email and Phone No */}
      <Box className="flex gap-4 w-full">
        <Input placeholder="Email" size={"lg"} />
        <Input placeholder="Phone No" size={"lg"} />
      </Box>
      <Button border="2px" borderColor="black.500" size="lg">
        Proceed
      </Button>
    </Box>
  );
}

export default CheckoutSection;
