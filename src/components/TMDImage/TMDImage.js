import React, { useState } from 'react';
import { useTMDContext } from '../../context/TMDConfigurationContext';

function TMDImage({ src, ...restProps }) {
  const [state, setState ] = useState(false);
  const {
    images: { base_url },
  } = useTMDContext();

  return (
    <>
      {/* disable alt attribute check, as we destruct it from restProps */}
      {/* eslint-disable-next-line */}
      <img 
        src={base_url + '/' + src} {...restProps} 
        onLoad={() => setState(true)} 
        style={state ? {} : {display: 'none'}}
      />

      <img 
        src='default-bg.jpg'
        style={state ? {display: 'none'} : {}}
      />
      
    </>
  );
}

export default TMDImage;
