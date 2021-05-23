import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import { ProgressProps, variants } from "./types";

const stepGuard = (step: number) => {
  if (step < 0) {
    return 0;
  }

  if (step > 100) {
    return 100;
  }

  return step;
};

const Progress: React.FC<ProgressProps> = ({
  variant = variants.ROUND,
  primaryStep = 0,
  secondaryStep = null,
}) => {
  return (
    <StyledProgress variant={variant}>
      <Bar primary style={{ width: `${stepGuard(primaryStep)}%` }} />
      {secondaryStep ? <Bar style={{ width: `${stepGuard(secondaryStep)}%` }} /> : null}
    </StyledProgress>
  );
};

export default Progress;
