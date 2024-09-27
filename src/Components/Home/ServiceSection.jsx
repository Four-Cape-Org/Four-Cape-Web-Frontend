import React from 'react'
import OverlayText from '../Elements/OverlayText'
import BubbleButtonPrimary from '../Elements/BubbleButtonPrimary'
import BubbleButtonSecondary from '../Elements/BubbleButtonSecondary'

// Images

const SocialContentImg = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727437343/socialContent.jpg';
const UIDesignImg = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727437343/uiDesign.jpg';
const BrandDesignImg = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727437343/brandDesign.jpg';
const PrintDesignImg = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727437347/printDesign.jpg';
const MerchDesignImg = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727437347/merchDesigns.jpg';


const ServiceSection = () => {
  return (
    <div className='relative top-0 md:mt-[14em] mt-[6em]'>
        <OverlayText className='absolute lg:top-0 md:top-[-69px] sm:top-0 top-9 left-10 z-[0] text-[20vw] max-[1250px]:text-[18vw] max-[550px]:left-3' text='Services' />

        <div className="relative pt-[7em] flex flex-wrap justify-center items-center">

            <div className="flex flex-wrap justify-center items-center">

                <div className="flex flex-col justify-center items-start lg:mx-[3em] md:mx-[3em] lg:my-[7em] lg:w-[25%] md:w-[37%] sm:w-[60%] w-[90%] mx-auto lg:h-[48em] md:h-[30em]">
                    <p className='text-accent-color font-bold font-primary text-[20px] my-[10px]'>Our Services</p>
                    <h2 className='font-secondary text-[4em] drop-shadow-xl'>What do we do ?</h2>
                    <BubbleButtonSecondary className='my-[32px]' sendTo='/services' text='Check Out' />
                </div>

                <div className="flex flex-col justify-center items-center lg:mx-[2em] sm:mx-[3em] lg:my-[7em] lg:w-[25%] md:w-[37%] sm:w-[50%] w-[90%]">
                    <img src={SocialContentImg} className='h-[25em] w-[21em] border-[10px] border-[white] shadow-2xl' alt="Social Media Content" />
                    <div className="flex flex-col justify-center items-start w-[88%] mt-[40px]">
                        <h5 className='text-[2em] font-secondary font-semibold drop-shadow-xl'>Social Media and Digital Content Design</h5>
                        <p className='text-[#C9C9C9] font-primary text-[16px] my-[10px]'>Amplify your online presence with eye-catching social media graphics, digital ad designs and more that enhances your digital marketing efforts.</p>
                        <BubbleButtonPrimary className='my-[32px]' sendTo='/services' text='LEARN MORE' />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center lg:pt-[7em] lg:mx-[2em] sm:mx-[3em] lg:my-[7em] lg:w-[25%] md:w-[37%] sm:w-[50%] w-[90%]">
                    <img src={UIDesignImg} className='h-[25em] w-[21em] border-[10px] border-[white] shadow-2xl' alt="UI/UX Design" />
                    <div className="flex flex-col justify-center items-start w-[88%] mt-[40px]">
                        <h5 className='text-[2em] font-secondary font-semibold drop-shadow-xl'>UI/UX Designs</h5>
                        <p className='text-[#C9C9C9] font-primary text-[16px] my-[10px]'>User-friendly website and app designs with an intuitive user experience that drives engagement, whether it’s an e-commerce platform, corporate site, or personal blog.</p>
                        <BubbleButtonPrimary className='my-[32px]' sendTo='/services' text='LEARN MORE' />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center lg:mx-[2em] sm:mx-[3em] lg:w-[25%] md:w-[37%] sm:w-[50%] w-[90%]">
                    <img src={BrandDesignImg} className='h-[25em] w-[21em] border-[10px] border-[white] shadow-2xl' alt="Brand Identity Design" />
                    <div className="flex flex-col justify-center items-start w-[88%] mt-[40px]">
                        <h5 className='text-[2em] font-secondary font-semibold drop-shadow-xl'>Brand Identity Design</h5>
                        <p className='text-[#C9C9C9] font-primary text-[16px] my-[10px]'>Craft a unique and memorable visual identity that sets your brand apart, including logos, color schemes, typography and more.</p>
                        <BubbleButtonPrimary className='my-[32px]' sendTo='/services' text='LEARN MORE' />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center lg:pt-[7em] lg:mx-[2em] sm:mx-[3em] lg:w-[25%] md:w-[37%] sm:w-[50%] w-[90%]">
                    <img src={PrintDesignImg} className='h-[25em] w-[21em] border-[10px] border-[white] shadow-2xl' alt="Packaging & Printing Designs" />
                    <div className="flex flex-col justify-center items-start w-[88%] mt-[40px]">
                        <h5 className='text-[2em] font-secondary font-semibold drop-shadow-xl'>Packaging and Printing Designs</h5>
                        <p className='text-[#C9C9C9] font-primary text-[16px] my-[10px]'>Design impactful packaging and print materials(like flyers, brochures & posters), that capture attention and tell your brand’s story consistently across all physical touchpoints.</p>
                        <BubbleButtonPrimary className='my-[32px]' sendTo='/services' text='LEARN MORE' />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center lg:mx-[2em] sm:mx-[3em] lg:w-[25%] md:w-[37%] sm:w-[50%] w-[90%]">
                    <img src={MerchDesignImg} className='h-[25em] w-[21em] border-[10px] border-[white] shadow-2xl' alt="Merchandise Design" />
                    <div className="flex flex-col justify-center items-start w-[88%] mt-[40px]">
                        <h5 className='text-[2em] font-secondary font-semibold drop-shadow-xl'>Merchandise Designs</h5>
                        <p className='text-[#C9C9C9] font-primary text-[16px] my-[10px]'>Transform your brand into tangible products like custom apparel, promotional items, and exclusive merchandise that resonate with your audience and boost brand loyalty.</p>
                        <BubbleButtonPrimary className='my-[32px]' sendTo='/services' text='LEARN MORE' />
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default ServiceSection
