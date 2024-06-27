import { Box, Stack } from "@mui/material";
import star from "../assets/icons/star.svg";

export default function RatingStars({ number }: { number: number }) {
  return (
    <Stack sx={{ flexDirection: "row" }}>
      {Array.from({ length: number }).map((_, index) => (
        <Box key={"star" + index} sx={{ width: 18, height: 18 }}>
          <img src={star} alt={`rating star ${index}`} />
        </Box>
      ))}
    </Stack>
  );
}
