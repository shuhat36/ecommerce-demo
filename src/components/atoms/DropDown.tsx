import { Select } from "@chakra-ui/react";
import { IDropDownProps } from "../../interfaces";

function DropDown({ Title, Options, onSelectChange }: IDropDownProps) {
  return (
    <Select
      placeholder={Title}
      size="md"
      maxW="280px"
      onChange={(e) => onSelectChange(e.target.value)}
    >
      {Options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </Select>
  );
}

export default DropDown;
