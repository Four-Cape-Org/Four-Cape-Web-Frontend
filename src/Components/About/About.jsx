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
          <p className='font-primary text-[15px] w-[45%] my-[20px] mx-auto text-center max-[950px]:w-[70%] max-[550px]:w-[90%] max-[550px]:text-[12px]'>
            <b>Fourcape</b> is a full-service brand-building agency dedicated to driving business success through creative and strategic solutions. We believe in the power of well-crafted brands to transform markets and empower businesses to achieve their full potential. Our approach is rooted in our core philosophy, represented by <b> CAPE: Creating Path, Adapting Market, Promoting Brands, Empowering Businesses </b>.

At Fourcape, we’re all about bringing brands to life with creativity and style! From eye-catching logos to full-blown brand makeovers, we turn ideas into designs that make an impact. Fun, fresh, and full of energy—that’s how we do it. Ready to make your brand unforgettable? Let’s get started!          </p>
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
