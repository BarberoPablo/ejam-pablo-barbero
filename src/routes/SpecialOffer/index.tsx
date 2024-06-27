import { Box, Stack, Typography } from "@mui/material";
import Sponsors from "../../components/Sponsors";
import Stepper from "../../components/Stepper";
import OfferInformation from "./components/OfferInformation";

export default function SpecialOffer() {
  const step = 2;

  return (
    <Box maxWidth={1245} m="0 auto" sx={{ backgroundColor: { xs: "#f9f9f8", lg: "inherit" } }}>
      <Sponsors />

      <Box sx={{ px: { xs: 2.5, lg: 0 } }}>
        <Stack sx={{ alignItems: "center", textAlign: "center", mt: { xs: 8, sm: 0 }, gap: { xs: 1, lg: 0 } }}>
          <Typography variant="big-title">Wait ! your order in progress.</Typography>
          <Typography variant="big-sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
        </Stack>

        <Stepper step={step} />

        <OfferInformation />
      </Box>
    </Box>
  );
}
