import { Box } from "@chakra-ui/react";
import FilterAccordion from "../../atoms/FilterAccordion";

function SideBar() {
  return (
    <Box className="h-screen mt-4 w-48">
      <FilterAccordion
        Title="Category"
        Categories={[
          "men's clothing",
          "jewelery",
          "electronics",
          "women's clothing",
        ]}
      />
    </Box>
  );
}

export default SideBar;
