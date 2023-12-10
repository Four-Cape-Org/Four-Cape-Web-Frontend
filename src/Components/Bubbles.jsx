import React from 'react'

const Bubbles = (props) => {

    let bubbleStyle = {
        position: 'fixed',
        top: props.top,
        left: props.left,
        width: props.dimension,
        height: props.dimension,
        borderRadius: '50%',
        backgroundColor: props.color,
        zIndex: '0',
    }
    
  return (
    <div style={bubbleStyle}></div>
  )
}

export default Bubbles