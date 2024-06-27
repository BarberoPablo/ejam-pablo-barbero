import { Avatar, Button, Paper, Stack, Typography } from "@mui/material";
import percent from "../../../assets/icons/percent.svg";
import { styleText } from "../../../utils/constants";
import arrowRight from "../../../assets/icons/line-arrow-right.svg";

export default function Discount() {
  return (
    <Stack>
      <Paper
        elevation={0}
        sx={{ mt: { xs: 3, lg: 4 }, backgroundColor: "#EDF3FD", pl: 2, py: 1.5, display: "flex", borderRadius: 2.5, gap: 2, alignItems: "center" }}
      >
        <Avatar sx={{ width: { xs: 24, lg: 32 }, height: { xs: 24, lg: 32 }, backgroundColor: "#2C7EF8" }}>
          <img src={percent} alt="percent icon" />
        </Avatar>
        <Typography>
          Save {styleText("53%")} and get {styleText("6 extra Clarifision")} for only {styleText("$14 Each")}.
        </Typography>
      </Paper>

      <Button
        sx={{ mt: 4, backgroundColor: "#59ae43", color: "white", borderRadius: 12.5, height: { xs: 51, lg: 59 }, textTransform: "none" }}
        endIcon={<img src={arrowRight} alt="arrow right icon" />}
      >
        <Typography sx={{ textTransform: "uppercase", fontSize: { xs: 14, lg: 20 } }}>
          <b>Yes - claim my discount</b>
        </Typography>
      </Button>
    </Stack>
  );
}
