import { Stepper as MuiStepper, Step, StepLabel, Typography, useMediaQuery } from "@mui/material";
import { parseStepText, steps } from "../utils/constants";
import { Theme, useTheme } from "@mui/material/styles";

export default function Stepper({ step }: { step: number }) {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return (
    <>
      <MuiStepper
        activeStep={step}
        connector={null}
        alternativeLabel={isMobile ? true : false}
        sx={{ justifyContent: "space-between", mt: isMobile ? 3 : 7 }}
      >
        {steps.map((label, index) => {
          const completed = step > index;
          const incompleted = index > step;

          return (
            <Step
              key={label + "step"}
              sx={{
                p: 0,
                //display: "flex",
                "& .MuiStepLabel-label": {
                  margin: 0,
                  padding: 0,
                },
                "& .MuiStepIcon-text": {
                  fill: incompleted ? theme.palette.primary.main : "white",
                },
              }}
            >
              <StepLabel
                StepIconProps={{
                  completed,
                  style: {
                    color: completed ? "#85bf55" : incompleted ? "white" : undefined,
                    height: isMobile ? 20 : 40,
                    width: isMobile ? 20 : 40,
                    border: `2px solid ${incompleted ? theme.palette.primary.main : "none"}`,
                    boxSizing: "border-box",
                    borderRadius: "50%",
                    gap: 0,
                  },
                }}
                style={{ margin: 0 }}
              >
                <Typography variant="step" sx={{ fontWeight: step === index ? 800 : "inherit", ml: { xs: 0, lg: 1.5 } }}>
                  {isMobile ? parseStepText(label) : label}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </MuiStepper>
    </>
  );
}
