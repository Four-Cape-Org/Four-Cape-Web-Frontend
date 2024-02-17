import React from 'react'
import Vector from '../../assets/img/portfolio/youtube/Vector.png'
import YoutubeThumbnail1 from '../../assets/img/portfolio/youtube/youtubeThumbnail1.png'
import YoutubeThumbnail2 from '../../assets/img/portfolio/youtube/youtubeThumbnail2.png'

const Youtube = () => {
    return (
        <div>
            <div className='flex flex-row justify-start items-center sm:mx-[3rem] sm:ml-[3rem] ml-[3rem] my-[3rem] '>
                <img src={Vector} alt="youtube icon" className='w-[40px] h-[30px]' />
                <h2 className='w-[15rem] h-[3rem] p-[11px] mt-[5px] font-primary font-semibold sm:text-xl text-[20px]'>YouTube Edits</h2>
            </div>

            <div className='flex flex-col justify-center items-center'>

                <div className='flex flex-row justify-center items-center m-[6rem] mt-[10px]'>
                    <img src={YoutubeThumbnail1} alt="" className='w-[47rem]' />
                    <div className='flex flex-col m-[4rem] mt-[1rem] ml-[5rem]'>
                        <h2 className='font-secondary text-[4rem] font-semibold'>Website Title | Four Cape</h2>
                        <p className='font-primary text-[1.4rem] mt-[3rem] text-text-color'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className='flex flex-row justify-center items-center m-[6rem]'>
                    <div className='flex flex-col m-[4rem] mt-[1rem] ml-[3rem]'>
                        <h2 className='font-secondary text-[4rem] font-semibold'>Website Title | Four Cape</h2>
                        <p className='font-primary text-[1.4rem] mt-[3rem] text-text-color'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <img src={YoutubeThumbnail2} alt="" className='w-[47rem]' />
                </div>

            </div>
        </div>
    )
}

export default Youtube