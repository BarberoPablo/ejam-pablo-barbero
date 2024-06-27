import { Box, Stack, Typography } from "@mui/material";
import Sponsors from "../../components/Sponsors";
import Stepper from "../../components/Stepper";
import OfferInformation from "./components/OfferInformation";

export default function SpecialOffer() {
  const step = 2;

  return (
    <Box maxWidth={1245} m="0 auto" sx={{ px: { xs: 2.5, md: 0 } }}>
      <Sponsors />
      <Stack sx={{ alignItems: "center", textAlign: "center", mt: { xs: 8, sm: 0 }, height: 126 }}>
        <Typography variant="big-title">Wait ! your order in progress.</Typography>
        <Typography variant="big-sub-title" mt={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </Typography>
      </Stack>

      <Stepper step={step} />

      <OfferInformation />
    </Box>
  );
}
