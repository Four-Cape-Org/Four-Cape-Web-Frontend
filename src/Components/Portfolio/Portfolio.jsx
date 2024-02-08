
// Component imports
import Navbar from '../Navbar'
import OverlayText from '../Elements/OverlayText'
import AboutSection from '../Home/AboutSection'
import Youtube from './Youtube'
import Reels from './Reels'
import Design from './Design'
import WebWork from './WebWork'
import JumboButton from '../Elements/JumboButton'
import Footer from '../Footer'

const Portfolio = () => {
  return (
    <>
        <Navbar/>
        <OverlayText className='absolute top-0px left-10 z-0 text-[18em]' text='Our Work' />
        <AboutSection text='work'/>
        <Reels/>
        <Youtube/>
        <Design/>
        <WebWork/>
        <JumboButton link="/" spanText="Got a Project ?" title="Tell us Everything." />
        <Footer />
    </>
  )
}

export default Portfolio
