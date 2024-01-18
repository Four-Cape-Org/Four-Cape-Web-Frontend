import React from 'react'
import { Routes, Route} from 'react-router-dom'

// Route Components
import Home from './Home/Home'
import PNF from './PNF/PNF'
import Portfolio from './Portfolio/Portfolio'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/*" element={<PNF/>} />
    </Routes>
  )
}

export default Router