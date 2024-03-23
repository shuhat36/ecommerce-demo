import { Text } from "@chakra-ui/react";

export function DeliverCard({
  titleText,
  lowerText,
  selectedTitle,
  setSelectedTitle,
}: {
  titleText: string;
  lowerText: string;
  selectedTitle: string;
  setSelectedTitle: (title: string) => void;
}) {
  return (
    <div
      onClick={() => {
        setSelectedTitle(titleText);
      }}
      className={`p-4 mb-4 border-2 ${
        selectedTitle === titleText ? "border-current" : ""
      } hover:border-current cursor-pointer rounded-lg`}
    >
      <Text className="font-medium">{titleText}</Text>
      <Text>{lowerText}</Text>
    </div>
  );
}
