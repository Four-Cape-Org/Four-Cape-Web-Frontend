import React from 'react'

// Image imports
import SetupImg from '../../assets/img/about/setupImg.jpg'

const WhoAreWe = () => {
  return (
    <section className='relative w-screen mt-[8em]'>
        <div className='relative'>
          <h2 className='text-[white] text-[60px] text-center font-bold'>WHO ARE WE ?</h2>
          <div className='absolute top-5 rotate-[-5deg] left-[50%] translate-x-[-50%] z-[-1] w-[25em] h-[4em] rounded-tl-[40px] rounded-br-[40px] bg-gradient-to-r from-accent-color to-[transparent]'></div>
        </div>
    </section>
  )
}

export default WhoAreWe
