import React from 'react'
import OverlayText from '../Elements/OverlayText'
import BubbleButtonSecondary from '../Elements/BubbleButtonSecondary'

import AboutImg from '../../assets/img/home/about_img.jpg'
import AdThumbnail from '../../assets/img/home/adThumbnail.jpeg'

const AboutSection = () => {
  return (
    <>
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

      <div className=''>
        <h2 className='font-secondary text-[4em] drop-shadow-xl text-center underline'>Want to know more ? Check this out.</h2>
        <div className='relative flex justify-center items-center my-[3em] cursor-pointer'>
          <img src={AdThumbnail} className='h-[40em] rounded-md shadow-[35px_35px_10px_-15px_#F82586]' alt="Advertisment Thumbnail" />
          <button className='absolute top-[45%] rounded-[50%] bg-accent-color border-[2px] border-accent-color hover:border-[white] h-[2.5em] w-[2.5em] text-[50px]'><i className="fa-solid fa-play"></i></button>
        </div>
      </div>
    </>
  )
}

export default AboutSection