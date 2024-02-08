import React from 'react'

// import images

import HoveredCard from '../../assets/img/portfolio/design/HoveredCard.png'
import DesignGallary3 from '../../assets/img/portfolio/design/DesignGallary3 1.png'
import DesignGallary5 from '../../assets/img/portfolio/design/DesignGallary5 1.png'

import DesignGallary2 from '../../assets/img/portfolio/design/DesignGallary2 1.png'
import DesignGallary4 from '../../assets/img/portfolio/design/DesignGallary4 1.png'
import DesignGallary6 from '../../assets/img/portfolio/design/DesignGallary1 2.png'

import DesignBottom from './DesignBottom'

const Design = () => {
    return (
        <>
            <div>
                <div>
                    <div className='w-[15rem] text-2xl font-semibold p-[5px] m-[6rem] mb-[2rem]'>
                        <p className='text-red'>OUR DESIGNS</p>
                    </div>

                    <div className='text-[5.4rem] underline font-semibold p-[5px]'>
                        <p className='font-secondary text-center tracking-[1.5px]'>Take a glance at our Design Gallary</p>
                    </div>
                </div>

                <div className='flex flex-row ml-[8rem] mt-[3rem]'>
                    <div className='flex flex-col'>
                        <div className='w-[38rem] h-[20rem] m-[2rem]'>
                            <img src={HoveredCard} alt="Hovered Card"/>
                        </div>
                        <div className='w-[38rem] h-[30rem] m-[2rem]'>
                            <img src={DesignGallary3} alt="Design Gallary 3" />
                        </div>
                        <div className='w-[38rem] h-[50rem] m-[2rem]'>
                            <img src={DesignGallary5} alt="Design Gallary 5" />
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='w-[38rem] h-[30rem] m-[2rem] mb-[0px]'>
                            <img src={DesignGallary2} alt="Design Gallary 2"  />
                        </div>
                        <div className='w-[38rem] h-[50rem] m-[2rem] mt-[0rem]'>
                            <img src={DesignGallary4} alt="Design Gallary 4"  />
                        </div>
                        
                        <div className='w-[33rem] m-[2rem]'>
                            <img src={DesignGallary6} alt="Design Gallary 6"  className='h-[20rem]'/>
                        </div>
                        
                    </div>
                </div>

                <DesignBottom/>
            </div>
        </>
    )
}

export default Design
