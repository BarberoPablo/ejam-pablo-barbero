import { Stack, Theme, useMediaQuery } from "@mui/material";
import clarifion from "../assets/companies/clarifion.png";
import mcafee from "../assets/companies/mcafee.svg";
import norton from "../assets/companies/norton.svg";

export default function Sponsors() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", mt: isMobile ? 2.5 : 4 }}>
      <img src={clarifion} alt="clarifon logo" width={isMobile ? 107 : 192} />
      <Stack sx={{ flexDirection: "row" }}>
        <img src={mcafee} alt="mcafee logo" width={isMobile ? 44 : 88} />
        <img src={norton} alt="norton logo" width={isMobile ? 41 : 82} />
      </Stack>
    </Stack>
  );
}
