import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
} from "@chakra-ui/react";

function FilterAccordion() {
  return (
    <>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Categories
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel className="h-fit py-2">
            <Box className="flex-col">
              <Checkbox className="w-full">men's clothing</Checkbox>
              <Checkbox className="w-full">jewelery</Checkbox>
              <Checkbox className="w-full">electronics</Checkbox>
              <Checkbox className="w-full">women's clothing</Checkbox>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default FilterAccordion;
