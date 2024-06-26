import { Stack } from "@mui/material";
import clarifion from "../assets/companies/clarifion.png";
import mcafee from "../assets/companies/mcafee.svg";
import norton from "../assets/companies/norton.svg";

export default function Sponsors() {
  return (
    <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", mt: 4 }}>
      <img src={clarifion} alt="clarifon logo" />
      <Stack sx={{ flexDirection: "row" }}>
        <img src={mcafee} alt="mcafee logo" />
        <img src={norton} alt="norton logo" />
      </Stack>
    </Stack>
  );
}
