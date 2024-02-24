// import React, {useRef} from 'react'

// import Navbar from '../Navbar'
// import Footer from '../Footer'
// import BookCall from '../BookCall'
// import OverlayText from '../Elements/OverlayText'

// const Services = () => {

//     const bookCallRef = useRef(null);

//     return (
//       <>
//         <Navbar bookCallRef={bookCallRef}/>
//         <section className='relative'>
//           <OverlayText className="absolute top-0 left-10 z-[0] text-[20em]" text="Services" />
//           <div className='relative pt-[19em] pb-[3em]'>
//             <h4 className='text-accent-color font-bold font-primary text-[20px] my-[10px] text-center'>Our Services</h4>
//             <p className='font-primary text-[15px] w-[45%] my-[20px] mx-auto text-center'>Fourcape is a full-service digital marketing agency that helps businesses grow online. We are a team of young and passionate professionals who have provided its clients with creative and innovative solutions that work. We have worked with a wide range of clients from different industries and have helped them achieve their goals. We have a team of experts who are always ready to take on new challenges and provide the best solutions for your business.</p>
//           </div>
//         </section>
//         <BookCall  bookCallRef={bookCallRef}/>
//         <Footer bookCallRef={bookCallRef}/>
//       </>
//     )
//   }

// export default Services





import React, { useRef } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import BookCall from '../BookCall';
import OverlayText from '../Elements/OverlayText';

const Services = () => {
  const bookCallRef = useRef(null);

  return (
    <>
      <Navbar bookCallRef={bookCallRef} />
      <section className='relative'>
        <OverlayText className="absolute top-0 left-10 z-[0] text-[10vw] md:text-[10em] md:top-[-0.2em] lg:text-[14em] xl:text-[20em] 2xl:text-[20em]" text="Services" />
        <div className='relative pt-[8vw] md:pt-[5vw] lg:pt-[3em] pb-[3em]'>
          <h4 className='text-accent-color font-bold font-primary text-[5vw] md:text-[30px] lg:text-[40px] my-[10px] text-center xl:text-[2em] 2xl:text-[4em]'>Our Services</h4>
          <p className='font-primary text-[3.5vw] md:text-[15px] lg:text-[18px] xl:text-[25px] w-[80%] md:w-[70%] lg:w-[60%] my-[2vw] mx-auto text-center 2xl:text-[1.2em]'>
            Fourcape is a full-service digital marketing agency that helps businesses grow online. We are a team of young and passionate professionals who have provided its clients with creative and innovative solutions that work. We have worked with a wide range of clients from different industries and have helped them achieve their goals. We have a team of experts who are always ready to take on new challenges and provide the best solutions for your business.
          </p>
        </div>
      </section>
      <BookCall bookCallRef={bookCallRef} />
      <Footer bookCallRef={bookCallRef} />
    </>
  );
};

export default Services;
