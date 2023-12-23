import React from 'react'

// Component imports
import Navbar from '../Navbar'
// import Bubbles from '../Bubbles'
import HomeHero from './HomeHero'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'


const Home = () => {
  return (
    <>
      {/* <Bubbles top='-36%' left='-9%' dimension='50em' color='rgba(255, 0, 138, 0.08)'/>
      <Bubbles top='17%' left='65%' dimension='50em' color='rgba(0, 102, 255, 0.09)'/> */}
      <Navbar/>      
      <HomeHero />
      <AboutSection />
      <ServiceSection />
    </>
  )
}

export default Home
