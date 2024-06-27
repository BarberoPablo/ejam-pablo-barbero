import { Box, Paper, Typography } from "@mui/material";
import percent from "../../../assets/icons/percent.svg";
import { styleText } from "../../../utils/constants";

export default function Discount() {
  return (
    <Paper elevation={0} sx={{ mt: 4, backgroundColor: "#EDF3FD", pl: 2, py: 1.5, display: "flex", borderRadius: 2.5, gap: 2, alignItems: "center" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 32,
          width: 32,
          backgroundColor: "#2C7EF8",
          borderRadius: "50%",
        }}
      >
        <img src={percent} alt="percent icon" />
      </Box>
      <Typography>
        Save {styleText("53%")} and get {styleText("6 extra Clarifision")} for only {styleText("$14 Each")}.
      </Typography>
    </Paper>
  );
}
