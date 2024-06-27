import { Box, Divider, Stack, Typography } from "@mui/material";
import whiteLock from "../assets/icons/lock-white.svg";

export default function Footer() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "#252F3D", py: 3, mt: 6 }}>
      <Stack sx={{ width: 1245, flexDirection: { xs: "column", lg: "row" }, alignItems: "center", justifyContent: "space-between" }}>
        <Stack sx={{ flexDirection: "row", alignItems: "center", height: { xs: 33, lg: 40 } }}>
          <Typography sx={{ color: "white", fontSize: { xs: 12, lg: 16 } }}>Copyright (c) 2023</Typography>
          <Divider orientation="vertical" flexItem sx={{ mx: { xs: 1.5, lg: 2 }, my: 1, backgroundColor: "white" }} />
          <Typography sx={{ color: "white", fontSize: { xs: 12, lg: 16 } }}>clarifionsupport@clarifion.com</Typography>
        </Stack>

        <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 1.25, mt: { xs: 2, lg: 0 } }}>
          <img src={whiteLock} alt="lock icon" width={16} height={16} />
          <Typography sx={{ color: "white", fontSize: { xs: 12, lg: 16 } }}>Secure 256-bit SSL encryption.</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
