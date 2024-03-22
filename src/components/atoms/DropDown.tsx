import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IDropDownProps } from "../../interfaces";

function DropDown({ Title, Options, onSelectChange }: IDropDownProps) {
  return (
    <>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              variant="ghost"
              as={Button}
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            >
              {Title}
            </MenuButton>
            <MenuList>
              {Options.map((option) => (
                <MenuItem onClick={() => onSelectChange(option)} value={option}>
                  {option}
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
}

export default DropDown;
