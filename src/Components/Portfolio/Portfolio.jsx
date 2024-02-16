import { useRef } from 'react'
// Component imports
import Navbar from '../Navbar'
import BookCall from '../BookCall'
import OverlayText from '../Elements/OverlayText'
import ShowReel from './ShowReel'
import Youtube from './Youtube'
import Reels from './Reels'
import Design from './Design'
import WebWork from './WebWork'
import JumboButton from '../Elements/JumboButton'
import Footer from '../Footer'

const Portfolio = () => {

  const bookCallRef = useRef(null);

  return (
    <>
        <Navbar bookCallRef={bookCallRef}/>
        <div className='relative lg:h-[22em] md:h-[14em] sm:h-[11em] h-[7em] w-screen mt-5'>
          <OverlayText className="absolute top-0 left-10 z-[0] text-[18vw] max-[1250px]:text-[16vw] max-[550px]:left-3" text="Our Work" />
          <h2 className='absolute top-[70%] left-[50%] translate-x-[-50%] text-accent-color font-bold font-primary text-[22px] sm:text-[27px] md:text-[35px] lg:text-[45px]'>Porfolio</h2>
        </div>
        <ShowReel/>
        <Reels/>
        <Youtube/>
        <Design/>
        <WebWork/>
        <BookCall bookCallRef={bookCallRef}/>
        <JumboButton link="/" spanText="Got a Project ?" title="Tell us Everything." />
        <Footer bookCallRef={bookCallRef}/>
    </>
  )
}

export default Portfolio
