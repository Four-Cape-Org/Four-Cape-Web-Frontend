import React from 'react'
import Website1 from '../../assets/img/portfolio/web/website1.png'
import Website2 from '../../assets/img/portfolio/web/website2.png'
import Website3 from '../../assets/img/portfolio/web/website3.png'

const WebWork = () => {
    return (
        <div>

            <h2 className='font-secondary lg:text-[4em] md:text-[3em] sm:text-[2em] text-[2em] mx-4 drop-shadow-xl text-center font-semibold underline'>Here goes our Web Work</h2>

            <div className='flex flex-col justify-center items-center'>

                <div className='flex sm:flex-row flex-col justify-center items-center px-8 my-[3em]'>
                    <img src={Website1} alt="" className='md:w-[55%] sm:w-[60%] w-[95%] my-6 max-w-[40em]' />
                    <div className='flex flex-col justify-center items-start sm:w-[40%] w-[90%] mx-[2em]'>
                        <h2 className='font-secondary lg:text-[40px] md:text-[30px] sm:text-[20px] text-[30px] font-semibold'>Website Title | Four Cape</h2>
                        <p className='font-primary lg:text-[18px] md:text-[15px] sm:text-[12px] text-[15px] sm:mt-[3rem] mt-[1em] text-text-color'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className='flex sm:flex-row flex-col-reverse justify-center items-center px-8 my-[3em]'>
                    <div className='flex flex-col justify-center items-start sm:w-[40%] w-[90%] mx-[2em]'>
                        <h2 className='font-secondary lg:text-[40px] md:text-[30px] sm:text-[20px] text-[30px] font-semibold'>Website Title | Four Cape</h2>
                        <p className='font-primary lg:text-[18px] md:text-[15px] sm:text-[12px] text-[15px] sm:mt-[3rem] mt-[1em] text-text-color'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <img src={Website2} alt="" className='md:w-[55%] sm:w-[60%] my-6 w-[95%] max-w-[40em]' />
                </div>

                <div className='flex sm:flex-row flex-col justify-center items-center px-8 my-[3em]'>
                    <img src={Website3} alt="" className='md:w-[55%] sm:w-[60%] w-[95%] my-6 max-w-[40em]' />
                    <div className='flex flex-col justify-center items-start sm:w-[40%] w-[90%] mx-[2em]'>
                        <h2 className='font-secondary lg:text-[40px] md:text-[30px] sm:text-[20px] text-[30px] font-semibold'>Website Title | Four Cape</h2>
                        <p className='font-primary lg:text-[18px] md:text-[15px] sm:text-[12px] text-[15px] sm:mt-[3rem] mt-[1em] text-text-color'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WebWork
