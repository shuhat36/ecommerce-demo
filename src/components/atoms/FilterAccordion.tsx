import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface ICategoryProps {
  Title: string;
  Categories: string[];
  onCategoryChange: (selectedCategories: string[]) => void;
}

function FilterAccordion({
  Title,
  Categories,
  onCategoryChange,
}: ICategoryProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = e.target.value;
    const isChecked = e.target.checked;

    setSelectedCategories((prevSelectedCategories) => {
      if (isChecked) {
        return [...prevSelectedCategories, category];
      } else {
        return prevSelectedCategories.filter((cat) => cat !== category);
      }
    });

    onCategoryChange(selectedCategories);
  };

  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {Title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel className="h-fit py-2">
            <Box className="flex-col">
              {Categories.map((category) => (
                <Checkbox
                  key={category}
                  value={category}
                  onChange={handleCategoryChange}
                  className="w-full"
                >
                  {category}
                </Checkbox>
              ))}
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default FilterAccordion;
