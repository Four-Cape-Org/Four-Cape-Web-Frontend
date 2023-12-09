import React from 'react'

// Image imports
import upperWave from '../../assets/img/wave_upper.svg'
import lowerWave from '../../assets/img/wave_lower.svg'

const ServiceCards = () => {
  return (
    <div className='relative'>
        <img src={upperWave} alt="" />
        <div className='h-[28em] bg-[#d4ddeb]'></div>
        <img src={lowerWave} alt="" />

        <div className='flex flex-col justify-center items-center absolute top-[19em] left-[50%] translate-x-[-50%] z-[2] bg-[#d4ddeb]'>
            <h1 className='text-[35px] font-bold text-center bg-[#d4ddeb]'> Our Services that will <br/><span className='font-light bg-[#d4ddeb]'>help you grow your Business</span></h1>
        </div>
    </div>
  )
}

export default ServiceCards