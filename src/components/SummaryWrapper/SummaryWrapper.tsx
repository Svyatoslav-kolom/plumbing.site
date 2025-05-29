import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import SummaryBox from "../SummaryBox/SummaryBox";
import { ReceiptBreakdown } from "../ReceiptBreakdown";
import { slideDown, slideUp } from "../../theme";

interface Props {
  prices: {
    workPrice: number;
    materialPrice: number;
    total: number;
    breakdown?: {
      label: string;
      value: string | number;
      priceImpact: number;
    }[];
  };
}

export default function SummaryWrapper({ prices }: Props) {
  const [isVisible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true); // монтуємо
    } else {
      const timer = setTimeout(() => setShouldRender(false), 500); // час = тривалість анімації
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <Box position="relative" overflow="visible">
      <Box zIndex={2} position="relative">
        <SummaryBox
          prices={prices}
          onToggleReceipt={() => setVisible((prev) => !prev)}
        />
      </Box>

      {shouldRender && prices.breakdown && (
        <Box
          position="absolute"
          top="100%"
          left="10%"
          mt="-10px"
          zIndex={1}
          animation={`${isVisible ? slideDown : slideUp} 0.5s ease-out`}
          w={"80%"}
        >
          <ReceiptBreakdown
            breakdown={prices.breakdown}
            total={prices.total}
          />
        </Box>
      )}
    </Box>
  );
}
