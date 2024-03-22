import { Box } from "@chakra-ui/react";
import { useCallback } from "react";
import FilterAccordion from "../../atoms/FilterAccordion";

interface SideBarProps {
  onCategoryChange: (selectedCategories: string[]) => void;
}

function SideBar({ onCategoryChange }: SideBarProps) {
  const handleCategoryChange = useCallback(
    (selectedCategories: string[]) => {
      onCategoryChange(selectedCategories);
    },
    [onCategoryChange]
  );

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
        onCategoryChange={handleCategoryChange}
      />
    </Box>
  );
}

export default SideBar;
