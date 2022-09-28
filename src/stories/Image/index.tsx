import React from 'react';

// third party components
import Lottie from 'react-lottie';

interface ImageProps {
  src: any;
  width: number;
  height: number;
  loop?: boolean;
}

export const Image: React.FC<ImageProps> = (props) => {
  const { src, width, height, loop = false } = props;
  const defaultOptions = {
    loop,
    autoplay: true,
    animationData: src,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
};
