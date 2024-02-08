import React from 'react'
import Website1 from '../../assets/img/portfolio/web/website1.png'
import Website2 from '../../assets/img/portfolio/web/website2.png'
import Website3 from '../../assets/img/portfolio/web/website3.png'

const WebWork = () => {
    return (
        <div>
            <div>
                <div className='w-[15rem] text-2xl font-semibold p-[5px] m-[6rem] mb-[2rem]'>
                    <p className='text-red'>OUR WEB WORKS</p>
                </div>

                <div className='text-[5.4rem] underline font-semibold p-[5px]'>
                    <p className='font-secondary text-center tracking-[1.5px] justify-center'>Here goes our Web Works</p>
                </div>
            </div>

            
            {/* <div className='flex flex-row mt-[5rem] bg-black h-[35rem] w-[100vw]'>
                <img src={Website1} alt="" className='w-[39.4rem] h-[25rem] m-[5rem]'/>
                <div className='flex flex-col m-[2rem] mt-[5rem] '>
                    <h2 className='font-secondary text-[4rem] font-semibold mr-5'>Website Title | Four Cape</h2>
                    <p className='font-primary text-[1.8rem] mt-[2rem] text-text-color mr-[2.5rem]'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className='flex flex-row mt-[5rem] h-[35rem] w-[100vw]'>
    
                <div className='flex flex-col m-[6rem] mt-[5rem] '>
                    <h2 className='font-secondary text-[4rem] font-semibold mr-5'>Website Title | Four Cape</h2>
                    <p className='font-primary text-[1.8rem] mt-[2rem] text-text-color mr-[2.5rem]'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <img src={Website1} alt="" className='w-[39.4rem] h-[25rem] mr-[5rem]'/>
            </div>

            <div className='flex flex-row mt-[5rem] h-[35rem] w-[100vw]'>
                <img src={Website1} alt="" className='w-[39.4rem] h-[25rem] m-[5rem]'/>
                <div className='flex flex-col m-[2rem] mt-[5rem] '>
                    <h2 className='font-secondary text-[4rem] font-semibold mr-5'>Website Title | Four Cape</h2>
                    <p className='font-primary text-[1.8rem] mt-[2rem] text-text-color mr-[2.5rem]'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div> */}



            <div className='flex flex-row  m-[8rem]'>
                <img src={Website1} alt="" className='w-[39.4rem]'/>
                <div className='flex flex-col m-[4rem] mt-[1rem]'>
                    <h2 className='font-secondary text-[3.5rem] font-semibold'>Website Title | Four Cape</h2>
                    <p className='font-primary text-[1.4rem] mt-[2rem] text-text-color'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className='flex flex-row  m-[8rem]'>
                <div className='flex flex-col m-[3rem] mt-[1rem]'>
                    <h2 className='font-secondary text-[3.5rem] font-semibold'>Website Title | Four Cape</h2>
                    <p className='font-primary text-[1.4rem] mt-[2rem] text-text-color'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <img src={Website2} alt="" className='w-[39.4rem]'/>
            </div>

            <div className='flex flex-row  m-[8rem]'>
                <img src={Website3} alt="" className='w-[39.4rem]'/>
                <div className='flex flex-col m-[4rem] mt-[1rem]'>
                    <h2 className='font-secondary text-[3.5rem] font-semibold'>Website Title | Four Cape</h2>
                    <p className='font-primary text-[1.4rem] mt-[2rem] text-text-color'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

        </div>
    )
}

export default WebWork
