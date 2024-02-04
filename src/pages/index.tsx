import React, { Fragment, useState } from "react";
import { IconButton } from "@mui/material";

import NextButton from 'assets/next-button.svg';
import PreviousButton from 'assets/previous-button.svg';
import ICMLogo from 'assets/icm-logo.svg';
import Image from "next/image";
import StepLayout from "components/template/StepLayout";
import StepsData from "components/organisms/StepsData";

const basePath = process.env.NODE_ENV === 'development' ? '' : '/word2vec-tree';

function Home() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const StepsDataSize = StepsData.length;

  return (
    <Fragment>
      <StepLayout step={StepsData[currentStepIndex]} />
      <script type="text/javascript" src={`${basePath}/js/impress.js`} />
      <IconButton disableRipple onClick={() => setCurrentStepIndex(currentStepIndex => (currentStepIndex - 1 + StepsDataSize) % StepsDataSize)}
        sx={{ position: 'fixed', bottom: 180, left: 0, width: 100 }}>
        <Image src={PreviousButton} width={0} alt="" style={{ width: '100%' }} />
      </IconButton>
      <IconButton disableRipple onClick={() => setCurrentStepIndex(currentStepIndex => (currentStepIndex + 1) % StepsDataSize)}
        sx={{ position: 'fixed', bottom: 180, right: 0, width: 100 }}>
        <Image src={NextButton} width={0} alt="" style={{ width: '100%' }} />
      </IconButton>
      <Image src={ICMLogo} alt="" width={0} style={{ position: 'fixed', bottom: 10, right: 10, width: 30 }} />
    </Fragment >
  )
}

export default Home;
