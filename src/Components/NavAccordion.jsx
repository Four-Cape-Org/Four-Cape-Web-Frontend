import React from 'react'

const NavAccordion = ({navAccordionState, setNavAccordionState}) => {
  return (
    <div className={`${navAccordionState}`}>
        <ul className="flex flex-col justify-center items-center mx-[55px] min-[1000px]:hidden">
            <li className='mx-[10px]'>
                <a onClick={() => {setNavAccordionState("hidden")}} className="p-[10px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" href="/">Home</a>
            </li>
            <li className='mx-[10px]'>
                <a onClick={() => {setNavAccordionState("hidden")}} className="p-[10px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" href="/work">Our Work</a>
            </li>
            <li className='mx-[10px]'>
                <a onClick={() => {setNavAccordionState("hidden")}} className="p-[10px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" href="/about">About Us</a>
            </li>
            <li className='mx-[10px]'>
                <a onClick={() => {setNavAccordionState("hidden")}} className="p-[10px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" href="/services">Services</a>
            </li>
            <li className='mx-[10px]'>
                <a onClick={() => {setNavAccordionState("hidden")}} className="p-[10px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" href="/contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default NavAccordion