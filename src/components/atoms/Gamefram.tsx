import { FC } from "react";

type GameframPropsType = {
  src: string;
}

const GameFram: FC<GameframPropsType> = ({
  src,
}) => {

  const maxWidth = 600;
  const width = 1800;
  const height = 1350;
  const scaleRate = maxWidth / width;

  return (
    <iframe allow="camera;microphone" src={src} width={width} height={height} style={{ position: 'absolute', top: 120, border: 0, borderRadius: 5, transform: `translate(0%, -${scaleRate / 2 * 100}%) scale(${scaleRate})` }} />
  )
}

export default GameFram;
