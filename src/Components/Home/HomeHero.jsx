import React from 'react'
import {Link} from 'react-router-dom'

// Image imports
// import Rocket from '../../assets/img/home/rocket.svg'
// import Success from '../../assets/img/home/success.png'
// import Thinking from '../../assets/img/home/thinking.png'
// import Struggle from '../../assets/img/home/struggle.png'
// import Bulb from '../../assets/img/home/bulb.png'
// import DashedLine from '../../assets/img/home/dashedLine.png'
import HeroImg from '../../assets/img/home/home_hero_vector_1.svg'

const HomeHero = () => {
  return (
    <div className='flex justify-center items-center hero h-screen'>

        <div className='flex flex-col justify-center items-start py-[30px] px-[5em]'>
          <p className=' top-[280px] left-[49px] font-primary text-accent-color font-semibold text-[15px] tracking-[3px]'>Your Vision | Our Expertise</p>
          <h1 className='w-[7em] top-[313px] left-[39px] font-secondary font-semibold text-[100px] underline leading-[1em]'>Building Brands, Crafting Success</h1>
          <p className='w-[17em] top-[604px] left-[41px] my-[30px] font-secondary text-[#8A8A8A] text-[32px] text-gray-700 text-opacity-100'>We help you make your brand story more powerful</p>
          <div className='mx-auto flex justify-center items-center'>
            <Link className='flex justify-center items-center h-[110px] w-[110px] bg-accent-color border-[2px] border-accent-color text-[white] my-[15px] rounded-[50%] font-semibold text-[30px] transition-all duration-[0.5s] hover:bg-[transparent] hover:border-[white] hover:text-accent-color'><i class="fa-solid fa-arrow-right"></i></Link>
            <span className='text-[15px] font-semibold relative right-[22px]'>VIEW OUR SERVICES</span>
          </div>
        </div>

        <div className='w-[60%]'>
          <img src={HeroImg} alt="" />
        </div>


    </div>
  )
}

export default HomeHero