import React from 'react'
import Navbar from '../Navbar'
import Bubbles from '../Bubbles'
import ServiceCards from './ServiceCards'

const Home = () => {
  return (
    <>
      
      <Bubbles top='-36%' left='-9%' dimension='50em' color='rgba(255, 0, 138, 0.08)'/>
      <Bubbles top='17%' left='65%' dimension='50em' color='rgba(0, 102, 255, 0.09)'/>
      <Navbar/>
      <p>llsdkjfls Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut soluta repudiandae, magnam aliquam nobis sunt tenetur est! Quibusdam, repellat?</p>
      <ServiceCards/>

    </>
  )
}

export default Home