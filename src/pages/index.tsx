import React, { Fragment, useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";

import NextButton from 'assets/next-button.svg';
import PreviousButton from 'assets/previous-button.svg';
import ICMLogo from 'assets/icm-logo.svg';
import Image from "next/image";
import StepsData from "components/organisms/StepsData";

function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const StepsDataSize = StepsData.length;

  useEffect(() => {
    document.addEventListener('contextmenu', event => event.preventDefault());
  }, [])

  return (
    <Fragment>
      <Box
        sx={{
          paddingX: 8,
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
        }}>
        {StepsData[currentStepIndex].children}
      </Box>
      <IconButton disableRipple onClick={() => setCurrentStepIndex(currentStepIndex => (currentStepIndex - 1 + StepsDataSize) % StepsDataSize)}
        sx={{ position: 'fixed', bottom: 0, left: 30 }}>
        <Image src={PreviousButton} width={0} alt="" style={{ width: 170, height: 100 }} />
      </IconButton>
      <IconButton disableRipple onClick={() => setCurrentStepIndex(currentStepIndex => (currentStepIndex + 1) % StepsDataSize)}
        sx={{ position: 'fixed', bottom: 0, right: 30 }}>
        <Image src={NextButton} width={0} alt="" style={{ width: 170, height: 100 }} />
      </IconButton>
      <Image src={ICMLogo} alt="" width={0} style={{ position: 'fixed', top: 10, left: 10, width: 50, height: 50 }} />
    </Fragment >
  )
}

export default Home;
