import React from 'react'
import { Link } from 'react-router-dom'

// Image imports
import upperWave from '../../assets/img/home/wave_upper.svg'
import lowerWave from '../../assets/img/home/wave_lower.svg'

const ServiceCards = () => {


    const buttonStyle = "my-[25px] px-[22px] py-[8px] rounded-[50px] border-[2px] border-[black] text-[white] bg-[black] font-semibold text-[13px] hover:bg-[transparent] hover:text-[black] hover:shadow-lg  font-rubik hover:shadow-gray-500/40 transition-all duration-500 hover:translate-y-[-4px]";


  return (
    <div className='relative z-[3]'>
        <div className="w-screen top-0 left-0 z-[2]">
            <img src={upperWave} alt="" />
            <div className='h-[28em] bg-[#d4ddeb]'></div>
            <img src={lowerWave} alt="" />
        </div>

        <div className="absolute z-[3] top-[20%] w-screen">

            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-[35px] font-bold text-center'>Our Services that will <br/><span className='font-light'>help you grow your Business</span></h1>
            </div>

            <div className='flex justify-center items-center w-screen'>

                <div className='flex justify-center items-start w-[80%]'>

                    <div className="flex flex-col justify-center items-center w-[20%] bg-[white] border-[black] border-[2px] rounded-[20px] py-[25px] px-[20px]">
                        <div className='flex justify-center items-center rounded-[50%] bg-[#8195ED] h-[130px] w-[130px]'>
                            <span className='text-[white] text-[60px] font-bold'><i class="fa-solid fa-code"></i></span>
                        </div>
                        <h3 className='text-[22px] font-semibold my-[15px]'>Web Development</h3>
                        <p className='text-[13px] text-[#414141] font-rubik text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas. Lorem ipsum dolor sit.</p>
                        <Link className={buttonStyle}>Know More</Link>
                    </div>

                </div>

            </div>

            </div>
    </div>
  )
}

export default ServiceCards