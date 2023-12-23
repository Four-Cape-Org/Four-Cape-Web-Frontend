import React from 'react'
import {Link} from 'react-router-dom'

const BubbleButtonSecondary = (props) => {
  return (
    <div className={`${props.className} flex justify-center items-center`}>
        <Link to={props.sendTo} className='flex justify-center items-center h-[100px] w-[100px] bg-[transparent] border-[2px] border-[white] text-accent-color my-[15px] rounded-[50%] font-semibold text-[30px] transition-all duration-[0.5s] hover:bg-accent-color hover:border-accent-color hover:text-[white]'><i className="fa-solid fa-arrow-right"></i></Link>
        <span className='text-[15px] font-semibold relative right-[22px] uppercase'>{props.text}</span>
    </div>
  )
}

export default BubbleButtonSecondary