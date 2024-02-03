import React from 'react'
import { Routes, Route} from 'react-router-dom'

// Route Components
import Home from './Home/Home'
import About from './About/About'
import Services from './Services/Services'
import Contact from './Contact/Contact'
import PNF from './PNF/PNF'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<PNF/>} />
    </Routes>
  )
}

export default Router