import React, {useRef} from 'react'

import Navbar from '../Navbar'
import Footer from '../Footer'
import BookCall from '../BookCall'
import OverlayText from '../Elements/OverlayText'
import JumboButton from '../Elements/JumboButton'
import AboutHero from './AboutHero'

// Image imports
import SetupImg from '../../assets/img/about/setupImg.jpg'


const About = () => {

  const bookCallRef = useRef(null);

  return (
    <>
      <Navbar bookCallRef={bookCallRef}/>

      <section className='relative'>
      <OverlayText className="absolute top-0 left-10 z-[0] text-[20vw] max-[1250px]:text-[18vw] max-[550px]:left-3" text="About Us" />
        <div className='relative pt-[19em] max-[950px]:pt-[10em] max-[550px]:pt-[5em] pb-[3em]'>
          <h4 className='text-accent-color font-bold font-primary text-[20px] my-[10px] text-center'>About Us</h4>
          <p className='font-primary text-[15px] w-[45%] my-[20px] mx-auto text-center max-[950px]:w-[70%] max-[550px]:w-[90%] max-[550px]:text-[12px]'>Fourcape is a full-service digital marketing agency that helps businesses grow online. We are a team of young and passionate professionals who have provided its clients with creative and innovative solutions that work. We have worked with a wide range of clients from different industries and have helped them achieve their goals. We have a team of experts who are always ready to take on new challenges and provide the best solutions for your business.</p>
        </div>
      </section>

      <AboutHero />

      <section className='relative w-screen mt-[8em] h-fit'>
        <img src={SetupImg} className='w-full blur-sm' alt="" />

        <div className='absolute top-[50%] translate-y-[-50%] bg-[#00000070] h-[90%] lg:w-[50%] md:w-[90%] lg:ml-[4em] left-[50%] lg:left-0 lg:translate-x-0 translate-x-[-50%] rounded-3xl'>

        </div>

      </section>

      <BookCall  bookCallRef={bookCallRef}/>
      <JumboButton link="/contact" spanText="Got a Project ?" title="Tell us Everything." />


      <div className='my-[6em]'>
        <hr className='w-[85%] mx-auto text-[white]' />

        <div className='w-screen my-[4em]'>
          <p className='w-[90%] italic text-[50px] text-[white] text-center mx-auto font-secondary'>If you don’t build your dream, <br /> someone else will hire you to help them build theirs.</p>
          <div className='flex justify-end items-center w-[80%]'>
            <span className='italic font-semibold text-[20px] text-accent-color text-center font-primary my-4'>~ Dhirubhai Ambani <br /> Founder, Reliance Industries</span>
          </div>
        </div>

        <hr className='w-[85%] mx-auto text-[white]' />
      </div>
      

      <Footer bookCallRef={bookCallRef}/>
    </>
  )
}

export default About