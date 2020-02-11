import React, { useState } from 'react';
import { useTMDContext } from '../../context/TMDConfigurationContext';
// import { ImageConfigInterface } from '../../interfaces'

function TMDImage({ src, ...restProps }: {
  src: string
}) {
  const [state, setState ] = useState(false);
  const {
    images: { base_url },
  } = useTMDContext() as {
    images: {base_url: string}
  };

  return (
    <>
      {/* disable alt attribute check, as we destruct it from restProps */}
      {/* eslint-disable-next-line */}
      <img
        alt='' 
        src={base_url + '/' + src} {...restProps} 
        onLoad={() => setState(true)} 
        style={state ? {} : {display: 'none'}}
      />

      <img
        alt=''  
        src='default-bg.jpg'
        style={state ? {display: 'none'} : {}}
      />
      
    </>
  );
}

export default TMDImage;
