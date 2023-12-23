import React from 'react'
import { Link } from 'react-router-dom'

import Arrow from '../../assets/img/general/JumboButtonArrow.svg'

const JumboButton = (props) => {
  return (
    <div className='mx-auto my-[13em]'>
        <Link to={props.link}>
            <div className="group relative mx-auto w-[80%] bg-accent-color py-[3em] pl-[4em] pr-[4em] overflow-hidden">
                <p className='font-secondary text-[25px] font-semibold'>{props.spanText}</p>
                <div className='flex justify-start items-center'>
                    <h3 className='font-secondary drop-shadow-lg text-[4.5em] my-8'>{props.title}</h3>
                    <img src={Arrow} className='absolute right-[10em] top-[50%] translate-y-[-50%]  z-[1] group-hover:right-[8em] transition-all duration-[0.5s]' alt="" />
                </div>
                <div className="absolute bottom-[-84px] right-[-47px] z-[0] bg-[#C31264] h-[20em] w-[20em] rounded-[50%]"></div>
            </div>
        </Link>
    </div>
  )
}

export default JumboButton