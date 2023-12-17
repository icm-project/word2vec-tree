import Step from "components/molecules/Step";
import React, { Fragment, useEffect, useState } from "react";
import steps from 'components/organisms/StepsData';
import { IconButton } from "@mui/material";

import NextButton from 'assets/next-button.svg';
import PreviousButton from 'assets/previous-button.svg';
import ICMLogo from 'assets/icm-logo.svg';
import Image from "next/image";

function Home() {
  const [impress, setImpress] = useState<any>();

  useEffect(() => {
    const impress = (window as any).impress();
    if (impress) {
      impress.init();
      setImpress(impress);
    }
  }, [])

  return (
    <Fragment>
      <div id="impress" data-transition-duration="1000">
        {steps.map(step => {
          const stepData = step.getStepData();
          return <Step key={stepData.id} {...stepData} />
        })}
      </div>
      <script type="text/javascript" src="/js/impress.js" />
      <IconButton disableRipple onClick={() => impress.prev()}
        sx={{ position: 'fixed', bottom: 200, left: 0, width: 100 }}>
        <Image src={PreviousButton} width={0} alt="" style={{ width: '100%' }} />
      </IconButton>
      <IconButton disableRipple onClick={() => impress.next()}
        sx={{ position: 'fixed', bottom: 200, right: 0, width: 100 }}>
        <Image src={NextButton} width={0} alt="" style={{ width: '100%' }} />
      </IconButton>
      <Image src={ICMLogo} alt="" width={0} style={{ position: 'fixed', bottom: 10, right: 10, width: 30 }} />
    </Fragment >
  )
}

export default Home;
