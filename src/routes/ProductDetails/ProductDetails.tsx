import { Box, Stack, Typography } from "@mui/material";
import Sponsors from "../../components/Sponsors";

export default function ProductDetails() {
  return (
    <Box maxWidth={1245} m="0 auto">
      <Sponsors />
      <Stack sx={{ alignItems: "center" }}>
        <Typography variant="title">Wait ! your order in progress.</Typography>
        <Typography variant="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing</Typography>
      </Stack>
    </Box>
  );
}
