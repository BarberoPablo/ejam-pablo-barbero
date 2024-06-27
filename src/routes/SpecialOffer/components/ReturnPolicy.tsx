import { Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import returnPolicy from "../../../assets/icons/satisfaction-guarantee.png";

export default function ReturnPolicy() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Stack sx={{ flexDirection: "row", gap: 2, mt: 3 }}>
      <img src={returnPolicy} alt="return policy icon" style={{ width: isMobile ? 48 : 88, height: isMobile ? 48 : 88 }} />
      <Typography variant="text">
        If you are not completely thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee</b>. Please refer to our return policy at the
        bottom of the page for more details. Happy Shopping!
      </Typography>
    </Stack>
  );
}
