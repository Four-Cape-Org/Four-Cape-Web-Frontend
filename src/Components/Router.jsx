import React from 'react'
import { Routes, Route} from 'react-router-dom'

// Route Components
import Home from './Home/Home'
import Contact from './Contact/Contact'
import PNF from './PNF/PNF'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<PNF/>} />
    </Routes>
  )
}

export default Router