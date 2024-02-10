import React from 'react'
import { Link } from 'react-router-dom'

const NavAccordion = ({navAccordionState, setNavAccordionState, handleNavAccordion, scrollToElement, bookCallRef}) => {
  return (
    <div className={`${navAccordionState} w-screen`}>
        <ul className="flex flex-col justify-center items-center min-[1000px]:hidden w-[100%]">
            <li className='border-[1px] border-[white] w-[100%]'>
                <Link to="/" onClick={() => {setNavAccordionState("hidden")}} className="inline-block py-[10px] px-[15px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" href="/">Home</Link>
            </li>
            <li  className='border-[1px] border-[white] w-[100%]'>
                <Link to="/portfolio" onClick={() => {setNavAccordionState("hidden")}} className="inline-block py-[10px] px-[15px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" href="/work">Our Work</Link>
            </li>
            <li  className='border-[1px] border-[white] w-[100%]'>
                <Link to="/about" onClick={() => {setNavAccordionState("hidden")}} className="inline-block py-[10px] px-[15px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" href="/about">About Us</Link>
            </li>
            <li  className='border-[1px] border-[white] w-[100%]'>
                <Link to="/services" onClick={() => {setNavAccordionState("hidden")}} className="inline-block py-[10px] px-[15px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" href="/services">Services</Link>
            </li>
            <li  className='border-[1px] border-[white] w-[100%]'>
                <Link to="/contact" onClick={() => {setNavAccordionState("hidden")}} className="inline-block py-[10px] px-[15px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" href="/contact">Contact</Link>
            </li>
            <li  className='border-[1px] border-[white] w-[100%]'>
                <Link onClick={() => {
                    scrollToElement(bookCallRef);
                    handleNavAccordion();
                }} className="inline-block py-[10px] px-[15px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" href="/contact">Book a call</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavAccordion