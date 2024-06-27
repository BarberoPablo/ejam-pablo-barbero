import { Stack, Typography } from "@mui/material";
import { styleText } from "../../../utils/constants";

export default function OfferTitle() {
  return (
    <Stack mt={-1}>
      <Typography variant="mid-title" sx={{ textTransform: "capitalize", textAlign: { xs: "center", md: "inherit" } }}>
        {styleText("ONE TIME ONLY")} special price for 6 extra Clarifion for only {styleText("$14 each")} ($84.00 total!)
      </Typography>
    </Stack>
  );
}
