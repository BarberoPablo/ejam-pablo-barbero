import { Box, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import star from "../../../assets/icons/star.svg";
import { specialPromo } from "../../../utils/constants";
import tick from "../../../assets/icons/tick-rounded.svg";

export default function PromoDetails() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <>
      <Stack sx={{ flexDirection: "row", mt: 4, gap: 3, justifyContent: "space-between" }}>
        <Box sx={{ backgroundColor: "#2c7ef8", width: { xs: 80, md: 134 }, height: { xs: 80, md: 134 }, borderRadius: 2.5 }}>
          <img
            src={specialPromo["secondary-image"]}
            alt={"special promo secondary image"}
            style={{ height: isMobile ? 80 : 134, width: isMobile ? 80 : 134 }}
          />
        </Box>
        <Stack sx={{ width: "100%" }}>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Typography variant="mid-sub-title">{specialPromo.name}</Typography>
            <Stack sx={{ flexDirection: "row", gap: 1.25, alignItems: "center" }}>
              <Typography variant="crossed-text">${specialPromo.oldPrice}</Typography>
              <Typography variant="blue-text" sx={{ fontWeight: 600 }}>
                ${specialPromo.price}
              </Typography>
            </Stack>
          </Stack>

          <Stack sx={{ flexDirection: "row" }}>
            {Array.from({ length: specialPromo.rating }).map((_, index) => (
              <Box key={"star" + index} sx={{ width: 18, height: 18 }}>
                <img src={star} alt={`rating star ${index}`} />
              </Box>
            ))}
          </Stack>
          <Stack sx={{ flexDirection: "row", alignItems: "center", mt: 1.25, gap: 2 }}>
            <Box sx={{ width: 16, height: 16, boxSizing: "border-box", borderRadius: "50%", backgroundColor: "#2C7EF8", border: `4px solid #E3EEFF` }} />
            <Typography variant="text" sx={{ color: "#37465A" }}>
              {specialPromo.stock} left in Stock
            </Typography>
          </Stack>

          <Typography variant="text" sx={{ mt: 1.25, textAlign: { xs: "center", md: "inherit" } }}>
            {specialPromo.description}
          </Typography>
        </Stack>
      </Stack>

      <Stack sx={{ mt: 4, rowGap: 2 }}>
        {specialPromo.perks.map((perk) => (
          <Stack key={perk} sx={{ flexDirection: "row", gap: 1.5 }}>
            <img src={tick} alt="tick icon" />
            <Typography variant="text" dangerouslySetInnerHTML={{ __html: perk }} />
          </Stack>
        ))}
      </Stack>
    </>
  );
}
