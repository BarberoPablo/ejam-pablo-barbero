import { Box, Button, Grid, Paper, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import { specialPromo } from "../../../utils/constants";
import Discount from "./Discount";
import OfferTitle from "./OfferTitle";
import PaymentDetails from "./PaymentDetails";
import PromoDetails from "./PromoDetails";
import ReturnPolicy from "./ReturnPolicy";
import Reviews from "./Reviews";

export default function OfferInformation() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <Paper elevation={0} sx={{ backgroundColor: { xs: "inherit", md: "#FAFAFA" }, p: { xs: 0, md: 5 }, mt: { xs: 3, md: 6.25 } }}>
      <Grid container spacing={isMobile ? 0 : 5}>
        <Grid item xs={12} lg={6}>
          <Box sx={{ width: { md: 575 } }}>
            {isMobile ? <OfferTitle /> : null}
            <img
              src={specialPromo["main-image"]}
              alt={"special promo main image"}
              style={{
                width: isMobile ? "100%" : 575,
                height: isMobile ? "100%" : 591,
                marginTop: isMobile ? "24px" : 0,
              }}
            />
            {isMobile ? null : <Reviews />}
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box sx={{ width: { md: 550 } }}>
            {isMobile ? null : <OfferTitle />}

            <PromoDetails />

            <Discount />

            <PaymentDetails />

            <Stack sx={{ mt: { xs: 1.5, md: 1.875 } }}>
              <Button variant="text" sx={{ color: "#F82C2C" }}>
                <Typography sx={{ textDecoration: "underline", fontSize: { xs: 12, md: 18 } }}>No thanks, I don't want this.</Typography>
              </Button>
            </Stack>

            <ReturnPolicy />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
