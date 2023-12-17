import { FC } from "react";

type GameframPropsType = {
  src: string;
}

const Gamefram: FC<GameframPropsType> = ({
  src,
}) => {
  return (
    <iframe allow="camera;microphone" src={src} width={1600} height={'100%'} style={{ position: 'absolute', top: 300, border: 0, borderRadius: 5, transform: 'translate(0%, -28%) scale(0.43)' }} />
  )
}

export default Gamefram;
