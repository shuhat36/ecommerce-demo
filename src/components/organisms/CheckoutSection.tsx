import {
  Box,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { MdOutlineLocalShipping, MdOutlineLocationOn } from "react-icons/md";
import SolidButton from "../atoms/SolidButton";

function CheckoutSection() {
  return (
    <Box className="w-full flex-col flex-wrap gap-4 justify-start mb-4">
      <Text fontWeight={"semibold"} fontSize={"2xl"} className="mx-4">
        Delivery Options
      </Text>

      <Tabs variant="unstyled">
        <TabList className="flex gap-x-2 mx-4">
          <Tab
            _selected={{
              color: "white",
              bg: "black",
            }}
            className=" rounded-lg border-2 border-slate-800 flex gap-x-2 grow"
          >
            <MdOutlineLocalShipping className="size-6" />
            <Text>Ship</Text>
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "black" }}
            className=" rounded-lg border-2 border-slate-800	flex gap-x-2 grow"
          >
            <MdOutlineLocationOn className="size-6" />
            <Text className="text-base">Pick Up</Text>
          </Tab>
        </TabList>
        <TabPanels className="w-full my-4">
          <TabPanel>
            <Box className="flex w-full gap-4 mb-4">
              <Input placeholder="First Name" size={"lg"} />
              <Input placeholder="Last Name" size={"lg"} />
            </Box>

            <Box className="w-full mb-4">
              <Input placeholder="Address" size={"lg"} />
            </Box>

            <Box className="flex w-full gap-4 mb-4">
              <Input placeholder="Email" size={"lg"} />
              <Input placeholder="Phone No" size={"lg"} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box className="w-full mb-4">
              <Text className="mb-2">Select a store location</Text>
              <Input placeholder="Address" size={"lg"} />
              <Text className="my-4">
                Using a specific location such as a home address or postcode
                will get the most accurate results
              </Text>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box className="flex flex-row-reverse	mr-4">
        <SolidButton text="Save & Continue" />
      </Box>
    </Box>
  );
}

export default CheckoutSection;
