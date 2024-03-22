import { Select } from "@chakra-ui/react";

interface IDropDownProps {
  Title: string;
  Options: string[];
}
function DropDown({ Title, Options }: IDropDownProps) {
  return (
    <Select placeholder={Title} size="md" maxW="280px">
      {Options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </Select>
  );
}

export default DropDown;
