import React, {useRef} from 'react'

// Component imports
import Navbar from '../Navbar'
import HomeHero from './HomeHero'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import ClientReview from './ClientReview'
import JumboButton from '../Elements/JumboButton'
import Footer from '../Footer'
import BookCall from '../BookCall'


const Home = () => {

  const bookCallRef = useRef(null);
  return (
    <>
      <Navbar bookCallRef={bookCallRef}/>      
      <HomeHero />
      <AboutSection />
      <ServiceSection />
      <BookCall  bookCallRef={bookCallRef}/>
      <ClientReview />
      <JumboButton link="/" spanText="Got a Project ?" title="Tell us Everything." />
      <Footer />
    </>
  )
}

export default Home
