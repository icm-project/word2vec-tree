import React, { useRef, useState, useEffect } from 'react';

type GameFrameProps = {
  src: string;
};

const GameFrame: React.FC<GameFrameProps> = ({ src }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const originalWidth = 3400;
  const originalHeight = 1300;
  const aspectRatio = originalHeight / originalWidth;

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = width * aspectRatio;
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [aspectRatio]);

  const scale = dimensions.width / originalWidth;

  return (
    <div ref={containerRef} style={{ width: '100%', height: dimensions.height, position: 'relative', overflow: 'hidden' }}>
      <iframe
        allow="camera;microphone"
        src={src}
        width={originalWidth}
        height={originalHeight}
        style={{
          position: 'absolute',
          border: 0,
          borderRadius: 5,
          transform: `scale(${scale})`,
          transformOrigin: '0 0',
        }}
      />
    </div>
  );
};

export default GameFrame;