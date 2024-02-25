import React, {useRef} from 'react'

import Navbar from '../Navbar'
import Footer from '../Footer'
import BookCall from '../BookCall'
import OverlayText from '../Elements/OverlayText'
import JumboButton from '../Elements/JumboButton'
import AboutHero from './AboutHero'
import WhoAreWe from './WhoAreWe'
import QuoteSection from './QuoteSection'

// Image imports



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
      <WhoAreWe />
      <BookCall  bookCallRef={bookCallRef}/>
      <JumboButton link="/contact" spanText="Got a Project ?" title="Tell us Everything." />
      <QuoteSection />
      <Footer bookCallRef={bookCallRef}/>
    </>
  )
}

export default About