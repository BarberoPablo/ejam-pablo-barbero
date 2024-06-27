import { Grid, Paper, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import tick from "../../../assets/icons/tick-rounded.svg";
import { specialPromo } from "../../../utils/constants";
import Discount from "./Discount";
import OfferTitle from "./OfferTitle";
import PromoDetails from "./PromoDetails";

export default function OfferInformation() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Paper elevation={0} sx={{ backgroundColor: { xs: "inherit", md: "#FAFAFA" }, p: { xs: 0, md: 5 }, mt: { xs: 3, md: 6.25 } }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          {isMobile ? <OfferTitle /> : null}
          <img src={specialPromo["main-image"]} width={"100%"} height={"100%"} alt={"special promo main image"} />
        </Grid>
        <Grid item xs={12} md={6} mt={isMobile ? 3 : 0}>
          {isMobile ? null : <OfferTitle />}

          <PromoDetails />

          <Stack sx={{ mt: 4, rowGap: 2 }}>
            {specialPromo.perks.map((perk) => (
              <Stack key={perk} sx={{ flexDirection: "row", gap: 1.5 }}>
                <img src={tick} alt="tick icon" />
                <Typography variant="text" dangerouslySetInnerHTML={{ __html: perk }} />
              </Stack>
            ))}
          </Stack>

          <Discount />
        </Grid>
      </Grid>
    </Paper>
  );
}
