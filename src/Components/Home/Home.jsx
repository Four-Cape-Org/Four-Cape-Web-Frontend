import React from 'react'

// Component imports
import Navbar from '../Navbar'
import HomeHero from './HomeHero'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import ClientReview from './ClientReview'
import JumboButton from '../Elements/JumboButton'


const Home = () => {
  return (
    <>
      <Navbar/>      
      <HomeHero />
      <AboutSection />
      <ServiceSection />
      <ClientReview />
      <JumboButton link="/" spanText="Got a Project ?" title="Tell us Everything." />
    </>
  )
}

export default Home
