import { Box, Divider, Stack, Theme, Typography, useMediaQuery } from "@mui/material";
import lock from "../../../assets/icons/lock.svg";
import { paymentMethods } from "../../../utils/constants";

export default function PaymentDetails() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        height: { xs: 71, md: 33 },
        mt: 1.5,
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #CFCFCF",
        borderRadius: 1,
        px: 2,
        py: { xs: 1, md: 1.25 },
        boxSizing: "border-box",
      }}
    >
      <Stack sx={{ flexDirection: "row", height: "100%", alignItems: "center" }}>
        <Typography variant="text" fontSize={12}>
          Free Shipping
        </Typography>

        <Divider orientation="vertical" flexItem sx={{ mx: 1.5, my: 1.0625 }} />

        <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 1.25 }}>
          <img src={lock} alt="lock icon" width={12} height={12} />
          <Typography variant="text" fontSize={12}>
            Secure 256-Bit SSL Encryption.
          </Typography>
        </Stack>
      </Stack>

      <Divider orientation={isMobile ? "horizontal" : "vertical"} flexItem sx={{ mx: 1.5, my: 1.0625 }} />

      <Stack sx={{ flexDirection: "row", gap: 0.25, alignItems: "center", justifyContent: "center" }}>
        {paymentMethods.map((payment) => (
          <Box key={payment} sx={{ width: 24, height: 14 }}>
            <img src={payment} alt="payment method" />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
