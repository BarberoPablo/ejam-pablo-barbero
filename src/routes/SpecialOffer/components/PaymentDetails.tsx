import { Box, Divider, Stack, Typography } from "@mui/material";
import lock from "../../../assets/icons/lock.svg";
import { paymentMethods } from "../../../utils/constants";

export default function PaymentDetails() {
  return (
    <Stack sx={{ flexDirection: "row", height: 33, mt: 1.5, alignItems: "center", justifyContent: "space-between", border: "1px solid #CFCFCF", px: 2 }}>
      <Typography variant="text" fontSize={12}>
        Free Shipping
      </Typography>

      <Divider orientation="vertical" flexItem sx={{ mx: 2, my: 1.0625 }} />

      <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 1.25 }}>
        <img src={lock} alt="lock icon" width={12} height={12} />
        <Typography variant="text" fontSize={12}>
          Secure 256-Bit SSL Encryption.
        </Typography>
      </Stack>

      <Divider orientation="vertical" flexItem sx={{ mx: 2, my: 1.0625 }} />

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
