import { AppBar, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { usps } from "../utils/constants";
import type { Theme } from "@mui/material";
import arrowLeft from "../assets/icons/arrow-left.svg";
import arrowRight from "../assets/icons/arrow-right.svg";
import { useState } from "react";

export default function Usps() {
  const [uspsIndex, setUspsIndex] = useState(0);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const handleChangeUspsIndex = (number: number) => {
    setUspsIndex((prevState) => (prevState + number + usps.length) % usps.length);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#252F3D", alignItems: "center" }}>
      {isMobile ? (
        <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: 42 }}>
          <IconButton sx={{ width: 20, height: 20, ml: 2.5 }} onClick={() => handleChangeUspsIndex(-1)}>
            <img src={arrowLeft} />
          </IconButton>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              height: 22,
            }}
          >
            <img src={usps[uspsIndex].logo} alt={usps[uspsIndex].text + " mobile logo"} style={{ width: 22, height: 22 }} />
            <Typography variant="header">{usps[uspsIndex].text}</Typography>
          </Stack>
          <IconButton sx={{ width: 20, height: 20, mr: 2.5 }} onClick={() => handleChangeUspsIndex(1)}>
            <img src={arrowRight} />
          </IconButton>
        </Stack>
      ) : (
        <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: 1245, height: 50 }}>
          {usps?.length > 0
            ? usps.map((service) => (
                <Stack
                  key={service.text}
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1,
                    height: 22,
                  }}
                >
                  <img src={service.logo} alt={service.text + " logo"} style={{ width: 22, height: 22 }} />
                  <Typography variant="header">{service.text}</Typography>
                </Stack>
              ))
            : null}
        </Stack>
      )}
    </AppBar>
  );
}
