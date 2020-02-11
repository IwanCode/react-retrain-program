import React from 'react';
import TDMImage from '../TMDImage';
import { useTMDContext } from '../../context/TMDConfigurationContext';

function TMDPoster({ size, src, ...restProps }: {
  size: number,
  src: any,
  alt?: string,
  className?: string
}) {
  const {
    images: { poster_sizes },
  } = useTMDContext() as {
    images: {
      poster_sizes: string[]
    }
  };

  return <TDMImage src={poster_sizes[size] + src} {...restProps} />;
}

export default TMDPoster;
