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
    <iframe allow="camera;microphone" src={src} width={width} height={height} style={{ position: 'absolute', top: 0, left:0, border: 0, borderRadius: 5, transform: `translate(${-maxWidth / 1.65}px, -15%) scale(${scaleRate})` }} />
  )

};

export default GameFrame;
