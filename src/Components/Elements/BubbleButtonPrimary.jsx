import React from 'react'
import {Link} from 'react-router-dom'

const BubbleButtonPrimary = (props) => {
  return (
    <div className={`${props.className} flex justify-center items-center`}>
        <Link to={props.sendTo} className='flex justify-center items-center h-[100px] w-[100px] max-[455px]:h-[80px] max-[455px]:w-[80px] bg-accent-color border-[2px] border-accent-color text-[white] my-[15px] rounded-[50%] font-semibold text-[30px] transition-all duration-[0.5s] hover:bg-[transparent] hover:border-[white] hover:text-accent-color'><i className="fa-solid fa-arrow-right"></i></Link>
        <span className='text-[15px] font-semibold relative right-[22px] uppercase'>{props.text}</span>
    </div>
  )
}

export default BubbleButtonPrimary