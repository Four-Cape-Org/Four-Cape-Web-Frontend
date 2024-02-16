import { useRef } from 'react'
// Component imports
import Navbar from '../Navbar'
import BookCall from '../BookCall'
import OverlayText from '../Elements/OverlayText'
import AboutSection from '../Home/AboutSection'
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
        {/* <OverlayText className='absolute top-0px left-10 z-0 text-[18em]' text='Our Work' /> */}
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
