import { Avatar, Paper, Stack, Typography } from "@mui/material";
import RatingStars from "../../../components/RatingStars";
import { specialPromo } from "../../../utils/constants";
import verified from "../../../assets/icons/verified.svg";

export default function Reviews() {
  const review = specialPromo.reviews[0];
  return (
    <Paper elevation={0} sx={{ backgroundColor: "#FFFFFF", mt: 3, p: 3 }}>
      <Stack>
        <Stack sx={{ flexDirection: "row", gap: 1.5 }}>
          <Avatar>
            <img src={review.image} alt="user image" />
          </Avatar>
          <Stack>
            <RatingStars number={review.rating} />

            <Stack sx={{ flexDirection: "row", gap: 1.25, alignItems: "center" }}>
              <Typography sx={{ color: "black", fontSize: 14 }}>
                <b>{review.name}</b>
              </Typography>
              {review.verified ? (
                <Stack>
                  <img src={verified} alt="verified icon" width={16} height={16} />
                </Stack>
              ) : null}
              <Typography variant="header" sx={{ color: "#5BB59A" }}>
                Verified Customer
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Typography variant="text" sx={{}}>
            {review.comment}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}
