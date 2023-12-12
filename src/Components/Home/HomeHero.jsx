import React from 'react'
import {Link} from 'react-router-dom'

// Image imports
import Rocket from '../../assets/img/home/rocket.svg'
import Success from '../../assets/img/home/success.png'
import Thinking from '../../assets/img/home/thinking.png'
import Struggle from '../../assets/img/home/struggle.png'
import Bulb from '../../assets/img/home/bulb.png'
import DashedLine from '../../assets/img/home/dashedLine.png'


const HomeHero = () => {
  return (
    <div className='flex items-center hero h-screen'>

        <div className='flex flex-col justify-center items-start p-[30px]'>
          <p className=' top-[280px] left-[49px] font-inter text-[15px] tracking-62'>Your Vision | Our Expertise</p>
          <h1 className='w-[9em] top-[313px] left-[39px] font-inter font-semibold text-[80px]'>Building Brands, Crafting Success</h1>
          <p className='w-[17em] top-[604px] left-[41px] my-[30px] font-inter text-[30px] text-gray-700 text-opacity-100'>We help you make your brand story more powerful</p>
          <Link className='inline-block my-[15px] px-[20px] py-[12px] left-[42px] top-[754px] rounded-[50px] border-[2px] border-[black] text-[white] bg-[black] font-semibold text-[11px] hover:bg-[transparent] hover:text-[black] hover:shadow-lg font-rubik hover:shadow-gray-500/40 transition-all duration-500'>CONNECT TODAY</Link>
        </div>

        <div className='rocket'>
            <img src={Rocket} alt="Rocket" className='w-[192.11px] h-[184.68px] top-[135px] absolute left-[650px] bg-transparent'/>
        </div>

        <div className='relative w-[60%] h-screen'>

            <img src={Success} alt="Success" className='absolute h-[22%] z-[4] top-[0%] right-[22%] bg-opacity-25 shadow-md shadow-transparent' />

            <img src={Thinking} alt="Thinking" className='absolute h-[22%] z-[4] top-[29%] right-[16%] shadow-md shadow-transparent' />

            <img src={Struggle} alt="Struggle" className='absolute h-[22%] z-[4] top-[52%] left-[12%] shadow-md shadow-transparent' />

            <img src={Bulb} alt="Bulb" className='absolute h-[12%] z-[3] top-[50%] left-[-6%]' />

            <img src={DashedLine} alt="Dashed Line" className='absolute top-[40%] left-[0%] translate-y-[-50%] z-[3] w-[90%] h-[60%] text-gray-700' />

        </div>


    </div>
  )
}

export default HomeHero