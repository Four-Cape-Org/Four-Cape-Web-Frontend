import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/img/prime/fourcapeLogo.png';

const Navbar = () => {

  return (
    <nav className='flex justify-around items-center p-[20px]'>
        <div className="left">
            <Link to="/">
                <img src={Logo} className='h-[50px]' alt="FourCape" />
            </Link>
        </div>
        <div className="middle">

        </div>
        <div className="right flex">
            <ul className="flex justify-center items-center mx-[20px]">
                <li className='mx-[10px]'>
                    <NavLink className="p-[10px] text-[17px]" to="/">Home</NavLink>
                </li>
                <li className='mx-[10px]'>
                    <NavLink className="p-[10px] text-[17px]" to="/about">About</NavLink>
                </li>
                <li className='mx-[10px]'>
                    <NavLink className="p-[10px] text-[17px]" to="/services">Services</NavLink>
                </li>
                <li className='mx-[10px]'>
                    <NavLink className="p-[10px] text-[17px]" to="/blogs">Blogs</NavLink>
                </li>
                <li className='mx-[10px]'>
                    <NavLink className="p-[10px] text-[17px]" to="/contacts">Contact</NavLink>
                </li>
            </ul>

            <button className='px-[20px] py-[12px] rounded-[50px] border-[2px] border-[black] text-[white] bg-[black] font-semibold text-[13px] hover:bg-[transparent] hover:text-[black] hover:shadow-lg hover:shadow-gray-500/40 transition-all duration-500'>LETS CONNECT</button>
        </div>

    </nav>
  )
}

export default Navbar