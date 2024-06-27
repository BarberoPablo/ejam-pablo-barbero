import { Box, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import Sponsors from "../../components/Sponsors";
import Stepper from "../../components/Stepper";

export default function SpecialOffer() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const step = 2;

  return (
    <Box maxWidth={1245} m="0 auto" px={isMobile ? 2.5 : 0}>
      <Sponsors />
      <Stack sx={{ alignItems: "center", textAlign: "center", mt: 8, height: 126 }}>
        <Typography variant="title">Wait ! your order in progress.</Typography>
        <Typography variant="sub-title" mt={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </Typography>
      </Stack>

      <Stepper step={step} />
    </Box>
  );
}
