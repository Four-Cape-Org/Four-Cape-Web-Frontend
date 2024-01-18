import React from 'react';

const OverlayText = (props) => {
  if(props.text === 'Our Work') {
    return (
      <div className='relative h-[25rem]'>
        <div className={`${props.className} font-bold text-bg-color `} style={{
            textShadow: '3px 3px 1px #363636, -3px -3px 1px #363636',
        }}>{props.text}</div>

        <div className='absolute font-bold text-[3rem] bottom-0 left-[6rem] text-red'>PORTFOLIO</div>
      </div>
    );
  }
  else  {
    return (
      <div className={`${props.className} font-bold text-bg-color`} style={{
          textShadow: '3px 3px 1px #363636, -3px -3px 1px #363636',
      }}>{props.text}</div>
    );
  } 
};

export default OverlayText;
