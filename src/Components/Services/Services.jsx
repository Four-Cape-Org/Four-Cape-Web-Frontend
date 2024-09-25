import React, { useRef } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import BookCall from '../BookCall';
import OverlayText from '../Elements/OverlayText';
import JumboButton from '../Elements/JumboButton.jsx';
import ServiceCards from './ServiceCards';

const Services = () => {
  const bookCallRef = useRef(null);

  return (
    <>
      <Navbar bookCallRef={bookCallRef}/>

      <section className='relative'>
      <OverlayText className="absolute top-0 left-10 z-[0] text-[20vw] max-[1250px]:text-[18vw] max-[550px]:left-3" text="Services" />
        <div className='relative pt-[19em] max-[950px]:pt-[10em] max-[550px]:pt-[5em] pb-[3em]'>
          <h4 className='text-accent-color font-bold font-primary text-[20px] my-[10px] text-center'>Services</h4>
          <p className='font-primary text-[15px] w-[45%] my-[20px] mx-auto text-center max-[950px]:w-[70%] max-[550px]:w-[90%] max-[550px]:text-[12px] text-[#6e6e6e]'>
            <b>Fourcape</b> is a full-service brand-building agency dedicated to driving business success through creative and strategic solutions. We believe in the power of well-crafted brands to transform markets and empower businesses to achieve their full potential. Our approach is rooted in our core philosophy, represented by <b> CAPE: Creating Path, Adapting Market, Promoting Brands, Empowering Businesses </b>.

At Fourcape, we make brands pop! Whether you need a bold new logo, a fresh brand strategy, or a total design makeover, we’ve got the skills to bring your vision to life. Let’s create something awesome together and take your brand to the next level!
          </p>
        </div>
      </section>

      <ServiceCards />

      <BookCall  bookCallRef={bookCallRef}/>
      <JumboButton link="/contact" spanText="Got a Project ?" title="Tell us Everything." />
      <Footer bookCallRef={bookCallRef}/>

    </>
  );
};

export default Services;
