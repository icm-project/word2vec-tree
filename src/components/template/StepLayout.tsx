import { Container } from "@mui/material";
import React, { FC } from "react";
import { StepType } from "types/General";

type StepLayoutPropsType = {
  step: StepType;
}

const StepLayout: FC<StepLayoutPropsType> = ({ step }) => {
  return (
    <Container maxWidth='sm' sx={{ padding: '32px 0px 32px 0px !important' }}>
      {step.children}
    </Container>
  )
}

export default StepLayout;