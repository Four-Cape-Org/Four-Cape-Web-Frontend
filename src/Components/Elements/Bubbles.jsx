import React from 'react'

const Bubbles = (props) => {

   let bubbleStyle = {
        position: 'absolute',
        top: props.top,
        left: props.left,
        width: props.dimension,
        height: props.dimension,
        borderRadius: '50%',
        backgroundColor: props.color,
        zIndex: '1',
   }
    
  return (
    <div style={bubbleStyle}></div>
  )
}

export default Bubbles