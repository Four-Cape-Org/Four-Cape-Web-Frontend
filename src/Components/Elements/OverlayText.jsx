import React from 'react';

const OverlayText = (props) => {
  
    return (
      <div className={`${props.className} font-bold text-bg-color`} style={{
          textShadow: '3px 3px 1px #363636, -3px -3px 1px #363636',
      }}>{props.text}</div>
    ); 
};

export default OverlayText;
