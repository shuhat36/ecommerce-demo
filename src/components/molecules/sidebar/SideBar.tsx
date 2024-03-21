import { Box } from "@chakra-ui/react";
import FilterAccordion from "../../atoms/FilterAccordion";

function SideBar() {
  return (
    <Box className="w-1/6 h-screen mt-4">
      <Box>
        <FilterAccordion />
        <FilterAccordion />
        <FilterAccordion />
      </Box>
    </Box>
  );
}

export default SideBar;
