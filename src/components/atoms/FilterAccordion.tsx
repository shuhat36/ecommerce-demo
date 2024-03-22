import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
} from "@chakra-ui/react";

interface ICategoryProps {
  Title: string;
  Categories: string[];
}

function FilterAccordion({ Title, Categories }: ICategoryProps) {
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
                <Checkbox className="w-full">{category}</Checkbox>
              ))}
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default FilterAccordion;
