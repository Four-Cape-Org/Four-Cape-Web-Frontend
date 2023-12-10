import React from 'react'
import Navbar from '../Navbar'
import Bubbles from '../Bubbles'
import Rocket from '../../assets/img/home/rocket.svg'
import Success from '../../assets/img/home/success.png'
import Thinking from '../../assets/img/home/thinking.png'
import Struggle from '../../assets/img/home/struggle.png'
import Bulb from '../../assets/img/home/bulb.png'
import DashedLine from '../../assets/img/home/dashedLine.png'
import Vision from '../../assets/img/home/vision.png'

const Home = () => {
  return (
    <>
      <Bubbles top='-36%' left='-9%' dimension='50em' color='rgba(255, 0, 138, 0.08)'/>
      <Bubbles top='17%' left='65%' dimension='50em' color='rgba(0, 102, 255, 0.09)'/>
      <Navbar/>

      {/* home page content */}

      <div className='home'>

        <div className='left left-[41px]'>
          {/* <img src={Vision} alt="Vision" className='w-[560px] h-[42px] top-[148px] left-[-39px] absolute' /> */}
          <p className='w-[560px] h-[42px] top-[280px] left-[49px] font-inter font-normal text-[15px] leading-[18.15px] tracking-62 content-center bg-transparent absolute'>Your Vision | Our Expertise</p>
          <main className='w-[769px] h-[236px] top-[313px] left-[39px] font-inter font-semibold text-[90px] bg-transparent absolute'>Building Brands, Crafting Success</main>
          <p className='w-[544px] h-[78px] top-[604px] left-[41px] font-inter font-normal text-[32px] tracking-normal text-gray-700 text-opacity-100 bg-transparent absolute'>We help you make your brand story more powerful</p>

          <button className='px-[20px] py-[12px] left-[42px] top-[754px] rounded-[50px] border-[2px] border-[black] text-[white] bg-[black] font-semibold text-[11px] hover:bg-[transparent] hover:text-[black] hover:shadow-lg font-rubik hover:shadow-gray-500/40 transition-all duration-500 absolute'>CONNECT TODAY</button>
        </div>

        <div className='right'>
          <div className='rocket'>
            <img src={Rocket} alt="Rocket" className='w-[192.11px] h-[184.68px] top-[135px] absolute left-[650px] bg-transparent'/>
          </div>

          <div className='success'>
            <img src={Success} alt="Success" className='w-[262px] h-[248px] top-[152px] left-[1000px] rounded-tl-[0px] rounded-tr-[68px] rounded-bl-[70px] rounded-br-[68px] absolute bg-opacity-25 hover:bg-violet-500 shadow-md shadow-transparent bg-transparent' />
          </div>

          <div className='thinking'>
            <img src={Thinking} alt="Thinking" className='w-[285px] h-[269px] top-[472px] left-[1166px] rounded-tl-[64px] rounded-tr-[0px] rounded-bl-[64px] rounded-br-[0px] absolute shadow-md shadow-transparent bg-transparent' />
          </div>

          <div className='struggle z-20'>
            <img src={Struggle} alt="Struggle" className='w-[272px] h-[253px] top-[679px] left-[818px] rounded-tl-[61px] rounded-tr-[0px] rounded-bl-[60px] rounded-br-[0px] absolute shadow-md shadow-transparent bg-transparent' />
          </div>

          <div className='bulb '>
            <img src={Bulb} alt="Bulb" className='w-[109px] h-[121px] top-[658.55px] left-[659px] absolute bg-transparent' />
          </div>

          <div className='dashedLine z-0'>
            <img src={DashedLine} alt="Dashed Line" className='top-[308px] left-[686px]  text-gray-700 absolute bg-transparent' />
          </div>
        </div>


      </div>
    </>
  )
}

export default Home
