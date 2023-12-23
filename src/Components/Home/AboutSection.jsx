import React from 'react'
import OverlayText from '../Elements/OverlayText'
import BubbleButtonSecondary from '../Elements/BubbleButtonSecondary'

import AboutImg from '../../assets/img/home/about_img.jpg'

const AboutSection = () => {
  return (
    <div className='relative'>
        <OverlayText className="absolute top-0 left-10 z-[0] text-[20em]" text="About" />
        <div className='relative w-screen flex justify-end items-center pt-[19em] pb-[10em]'>
            <img src={AboutImg} className='h-[54em] blur-[3px] brightness-75' alt="" />
            <div className='absolute top-[40%] left-[15em] flex flex-col justify-center items-start w-[40%]'>
                <p className='text-accent-color font-bold font-primary text-[20px] my-[10px]'>About Us</p>
                <h2 className='font-secondary text-[4em] drop-shadow-xl'>We are a Boston based Marketing Agency, started in 2014</h2>
                <p className='font-primary text-[15px] w-[50%] my-[20px]'>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.</p>
                <BubbleButtonSecondary className='my-[32px]' sendTo='/about' text='LEARN MORE' />
            </div>
        </div>
    </div>
  )
}

export default AboutSection