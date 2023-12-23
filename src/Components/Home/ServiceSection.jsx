import React from 'react'
import OverlayText from '../Elements/OverlayText'
import BubbleButtonPrimary from '../Elements/BubbleButtonPrimary'
import BubbleButtonSecondary from '../Elements/BubbleButtonSecondary'

// Images
import CardImg1 from '../../assets/img/general/serviceCards/service_card_1.jpeg'

const ServiceSection = () => {
  return (
    <div className='relative top-0'>
        <OverlayText className='absolute top-0px left-10 z-0 text-[20em]' text='Services' />

        <div className="relative pt-[7em] flex flex-wrap justify-center items-center">

            <div className="flex flex-wrap justify-center items-center">

                <div className="flex flex-col justify-center items-start mx-[5em] my-[7em] w-[20%] h-[48em]">
                    <p className='text-accent-color font-bold font-primary text-[20px] my-[10px]'>Our Services</p>
                    <h2 className='font-secondary text-[4em] drop-shadow-xl'>We do we do ?</h2>
                    <BubbleButtonSecondary className='my-[32px]' sendTo='/services' text='More of our Services' />
                </div>

                <div className="flex flex-col justify-center items-center mx-[5em] my-[7em] w-[20%]">
                    <img src={CardImg1} className='h-[25em] w-[21em] border-[10px] border-[white] shadow-2xl' alt="" />
                    <div className="flex flex-col justify-center items-start w-[88%] mt-[40px]">
                        <h5 className='text-[2em] font-secondary font-semibold drop-shadow-xl'>Card Title</h5>
                        <p className='text-[#C9C9C9] font-primary text-[16px] my-[10px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, ex! Lorem ipsum dolor sit amet.</p>
                        <BubbleButtonPrimary className='my-[32px]' sendTo='/about' text='LEARN MORE' />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center pt-[7em] mx-[5em] my-[7em] w-[20%]">
                    <img src={CardImg1} className='h-[25em] w-[21em] border-[10px] border-[white] shadow-2xl' alt="" />
                    <div className="flex flex-col justify-center items-start w-[88%] mt-[40px]">
                        <h5 className='text-[2em] font-secondary font-semibold drop-shadow-xl'>Card Title</h5>
                        <p className='text-[#C9C9C9] font-primary text-[16px] my-[10px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, ex! Lorem ipsum dolor sit amet.</p>
                        <BubbleButtonPrimary className='my-[32px]' sendTo='/about' text='LEARN MORE' />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mx-[5em] w-[20%]">
                    <img src={CardImg1} className='h-[25em] w-[21em] border-[10px] border-[white] shadow-2xl' alt="" />
                    <div className="flex flex-col justify-center items-start w-[88%] mt-[40px]">
                        <h5 className='text-[2em] font-secondary font-semibold drop-shadow-xl'>Card Title</h5>
                        <p className='text-[#C9C9C9] font-primary text-[16px] my-[10px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, ex! Lorem ipsum dolor sit amet.</p>
                        <BubbleButtonPrimary className='my-[32px]' sendTo='/about' text='LEARN MORE' />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center pt-[7em] mx-[5em] w-[20%]">
                    <img src={CardImg1} className='h-[25em] w-[21em] border-[10px] border-[white] shadow-2xl' alt="" />
                    <div className="flex flex-col justify-center items-start w-[88%] mt-[40px]">
                        <h5 className='text-[2em] font-secondary font-semibold drop-shadow-xl'>Card Title</h5>
                        <p className='text-[#C9C9C9] font-primary text-[16px] my-[10px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, ex! Lorem ipsum dolor sit amet.</p>
                        <BubbleButtonPrimary className='my-[32px]' sendTo='/about' text='LEARN MORE' />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mx-[5em] w-[20%]">
                    <img src={CardImg1} className='h-[25em] w-[21em] border-[10px] border-[white] shadow-2xl' alt="" />
                    <div className="flex flex-col justify-center items-start w-[88%] mt-[40px]">
                        <h5 className='text-[2em] font-secondary font-semibold drop-shadow-xl'>Card Title</h5>
                        <p className='text-[#C9C9C9] font-primary text-[16px] my-[10px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, ex! Lorem ipsum dolor sit amet.</p>
                        <BubbleButtonPrimary className='my-[32px]' sendTo='/about' text='LEARN MORE' />
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default ServiceSection