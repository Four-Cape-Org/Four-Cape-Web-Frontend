import React, { useRef } from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/img/prime/fourcapeLogoWhite.png';

const Navbar = ({bookCallRef, buttonVisible = true}) => {

    const scrollToElement = (ref) => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
      };

  return (
    <nav className='flex justify-around items-center p-[20px]'>
        <div className="left">
            <Link to="/">
                <img src={Logo} className='h-[50px] hover:drop-shadow-[10px_10px_25px_#F82586] transition-all duration-[0.5s]' alt="FourCape" />
            </Link>
        </div>
        <div className="middle">

        </div>
        <div className="right flex">
            <ul className="flex justify-center items-center mx-[55px]">
                <li className='mx-[10px]'>
                    <NavLink className="p-[10px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" to="/">Home</NavLink>
                </li>
                <li className='mx-[10px]'>
                    <NavLink className="p-[10px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" to="/work">Our Work</NavLink>
                </li>
                <li className='mx-[10px]'>
                    <NavLink className="p-[10px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" to="/services">Services</NavLink>
                </li>
                <li className='mx-[10px]'>
                    <NavLink className="p-[10px] text-[15px] font-primary hover:text-accent-color transition-all duration-500" to="/contact">Contact</NavLink>
                </li>
            </ul>

            {buttonVisible ? 
            <button onClick={() => {scrollToElement(bookCallRef)}} className='px-[22px] py-[13px] rounded-[50px] border-[2px] border-[white] text-[white] bg-[transparent] font-semibold text-[11px] hover:bg-[transparent] hover:border-accent-color hover:shadow-lg  font-rubik hover:shadow-gray-500/40 transition-all duration-500 hover:translate-y-[-4px]'>BOOK A CALL</button>
            : null}
            </div>

    </nav>
  )
}

export default Navbar