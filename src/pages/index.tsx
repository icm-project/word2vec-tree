import React, { Fragment, useEffect, useState } from "react";
import { Container, IconButton } from "@mui/material";

import NextButton from 'assets/next-button.svg';
import PreviousButton from 'assets/previous-button.svg';
import ICMLogo from 'assets/icm-logo.svg';
import Image from "next/image";
import StepsData from "components/organisms/StepsData";

const basePath = process.env.NODE_ENV === 'development' ? '' : '/word2vec-tree';

function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const StepsDataSize = StepsData.length;

  useEffect(() => {
    document.addEventListener('contextmenu', event => event.preventDefault());
  }, [])

  return (
    <Fragment>
      <Container maxWidth='xl'
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          marginRight: 'auto !important',
          marginLeft: 'auto !important',
        }}>
        {StepsData[currentStepIndex].children}
      </Container>
      <IconButton disableRipple onClick={() => setCurrentStepIndex(currentStepIndex => (currentStepIndex - 1 + StepsDataSize) % StepsDataSize)}
        sx={{ position: 'fixed', bottom: 10, left: 0, width: 100 }}>
        <Image src={PreviousButton} width={0} alt="" style={{ width: '100%' }} />
      </IconButton>
      <IconButton disableRipple onClick={() => setCurrentStepIndex(currentStepIndex => (currentStepIndex + 1) % StepsDataSize)}
        sx={{ position: 'fixed', bottom: 10, right: 0, width: 100 }}>
        <Image src={NextButton} width={0} alt="" style={{ width: '100%' }} />
      </IconButton>
      <Image src={ICMLogo} alt="" width={0} style={{ position: 'fixed', top: 10, left: 10, width: 30 }} />
    </Fragment >
  )
}

export default Home;
