import { FC, useEffect, useState } from "react";

type GameFramePropsType = {
  src: string;
}

const GameFrame: FC<GameFramePropsType> = ({ src }) => {

  const maxWidth = 1100;
  const width = 2800;
  const height = 1350;
  const scaleRate = maxWidth / width;

  return (
    <iframe allow="camera;microphone" src={src} width={width} height={height} style={{ position: 'absolute', border: 0, borderRadius: 5, transform: `translate(${-scaleRate*77}%, ${-scaleRate*125}%) scale(${scaleRate})` }} />
  )

};

export default GameFrame;
