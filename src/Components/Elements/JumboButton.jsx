import React from 'react'
import { Link } from 'react-router-dom'

const Arrow = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727449551/general/jumboArrow.svg'

const JumboButton = (props) => {
  return (
    <div className='md:my-[13em] my-[10em]'>
        <Link to={props.link}>
            <div className="group relative mx-auto lg:w-[90%] bg-accent-color py-[3em] sm:px-[4em] px-[2em] overflow-hidden">
                <p className='font-secondary text-[25px] font-semibold'>{props.spanText}</p>
                <div className='sm:flex flex-none w-[100%] justify-start items-center'>
                    <h3 className='font-secondary drop-shadow-lg lg:text-[4.5em] md:text-[3em] sm:text-[2.5em] text-[1.5em] my-8'>{props.title}</h3>
                    <img src={Arrow} className='lg:w-[30%] md:w-[25%] sm:w-[25%] w-[10em] absolute lg:right-[6em] md:right-[6em] sm:right-[6em] right-[6em] sm:top-[50%] sm:translate-y-[-50%] top-[9.5em]  z-[1] lg:group-hover:right-[4em] md:group-hover:right-[4em] sm:group-hover:right-[4em] group-hover:right-[4em] transition-all duration-[0.5s]' alt="" />
                </div>
                <div className="absolute lg:bottom-[-84px] md:bottom-[-60px] sm:bottom-[-60px] bottom-[-60px] lg:right-[-47px] md:right-[-60px] sm:right-[-60px] right-[-60px] z-[0] bg-[#C31264] lg:h-[20em] lg:w-[20em] md:h-[15em] md:w-[15em] sm:h-[12em] sm:w-[12em] h-[12em] w-[12em] rounded-[50%]"></div>
            </div>
        </Link>
    </div>
  )
}

export default JumboButton
