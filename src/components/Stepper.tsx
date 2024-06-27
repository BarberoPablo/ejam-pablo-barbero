import { Stepper as MuiStepper, Step, StepLabel, Typography, useMediaQuery } from "@mui/material";
import { parseStepText, steps } from "../utils/constants";
import { Theme, useTheme } from "@mui/material/styles";

export default function Stepper({ step }: { step: number }) {
  const theme = useTheme();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <>
      <MuiStepper
        activeStep={step}
        connector={null}
        alternativeLabel={isMobile ? true : false}
        sx={{ justifyContent: "space-between", mt: isMobile ? 4 : 7 }}
      >
        {steps.map((label, index) => {
          const completed = step > index;
          const incompleted = index > step;

          return (
            <Step
              key={label + "step"}
              sx={{
                p: 0,
                "& .MuiStepLabel-label": {
                  margin: 0,
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
                <Typography variant="step" sx={{ fontWeight: step === index ? 800 : "inherit" }}>
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
