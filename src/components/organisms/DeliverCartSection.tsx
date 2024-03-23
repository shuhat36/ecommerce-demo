import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { DeliverCard } from "../atoms/DeliverCard";
import SolidButton from "../atoms/SolidButton";

function DeliverCartSection() {
  const [selectedTitle, setSelectedTitle] = useState("");
  const deliveryOptions = [
    { title: "$7.00 No Rush Shipping", description: "Arrives within a week" },
    { title: "$8.00 Shipping", description: "Arrives within 5 days" },
    { title: "$20.00 Shipping", description: "Arrives within 3 days" },
    { title: "$30.00 Shipping", description: "Arrives by today" },
  ];

  return (
    <>
      <div className="mx-4">
        {deliveryOptions.map((delivery) => (
          <DeliverCard
            titleText={delivery.title}
            lowerText={delivery.description}
            selectedTitle={selectedTitle}
            setSelectedTitle={setSelectedTitle}
          />
        ))}
      </div>
      <Box className="flex flex-row-reverse	mr-4">
        <SolidButton text="Save & Continue" />
      </Box>
    </>
  );
}

export default DeliverCartSection;
