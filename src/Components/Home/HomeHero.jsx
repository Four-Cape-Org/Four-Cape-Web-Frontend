import React from 'react'
import {Link} from 'react-router-dom'
import BubbleButtonPrimary from '../Elements/BubbleButtonPrimary'

// Image imports
import HeroImg from '../../assets/img/home/home_hero_vector_1.svg'

const HomeHero = () => {
  return (
    <div className='flex flex-wrap justify-center items-center hero h-[100%] lg:mt-[4em] sm:mt-[2em] mt-[1em]'>

        <div className='flex flex-col justify-center items-start py-[30px] sm:px-[5em] max-[675px]:items-center'>
          <p className='font-primary text-accent-color font-semibold text-[15px] tracking-[3px] max-[400px]:text-[12px]'>Your Vision | Our Expertise</p>
          <h1 className='w-[7em] font-secondary font-semibold text-[100px] max-[1357px]:text-[75px]  max-[1100px]:text-[90px] max-[675px]:text-[60px] max-[455px]:text-[40px] underline leading-[1em]'>Building Brands, Crafting Success</h1>
          <p className='w-[17em] my-[30px] font-secondary text-[#8A8A8A] text-[32px] text-gray-700 text-opacity-100 text-center max-[675px]:text-[20px] max-[370px]:w-[13em]'>We help you make your brand story more powerful</p>
          <BubbleButtonPrimary className='mx-auto' sendTo='/services' text='VIEW OUR SERVICES' />
        </div>

        <div className='w-[30em] max-[1357px]:w-[24em] max-[1100px]:w-[45em]'>
          <img src={HeroImg} alt="" />
        </div>

    </div>
  )
}

export default HomeHero