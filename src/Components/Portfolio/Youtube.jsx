import React from 'react'
import Vector from '../../assets/img/portfolio/youtube/Vector.png'
import YoutubeThumbnail1 from '../../assets/img/portfolio/youtube/youtubeThumbnail1.png'
import YoutubeThumbnail2 from '../../assets/img/portfolio/youtube/youtubeThumbnail2.png'

const Youtube = () => {
    return (
        <div>
            <div className='flex flex-row justify-start items-center sm:mx-[3rem] sm:ml-[3rem] ml-[3rem] md:my-[3rem] my-[1.5em] mt-[3em]'>
                <img src={Vector} alt="youtube icon" className='w-[40px] h-[30px]' />
                <h2 className='w-[15rem] h-[3rem] p-[11px] mt-[5px] font-primary font-semibold sm:text-xl text-[20px]'>YouTube Edits</h2>
            </div>

            <div className='flex flex-col justify-center items-center'>

                <div className='flex sm:flex-row flex-col justify-center items-center px-8 my-[3em]'>
                    <img src={YoutubeThumbnail1} alt="" className='md:w-[55%] sm:w-[60%] w-[95%] my-6 max-w-[40em]' />
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
                    <img src={YoutubeThumbnail2} alt="" className='md:w-[55%] sm:w-[60%] my-6 w-[95%] max-w-[40em]' />
                </div>

            </div>
        </div>
    )
}

export default Youtube