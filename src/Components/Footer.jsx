import React from 'react'

//Image Imports
import footerImage from '../assets/img/general/footer/footerImage.svg'
import Logo from '../assets/img/prime/FourCapePink.png'

// Icon Imports
import sendIcon from '../assets/img/general/footer/sendIconNewsletter.svg'
import callIcon from '../assets/img/general/footer/CallIcon.svg'
import emailIcon from '../assets/img/general/footer/EmailIcon.svg'
import facebookIcon from '../assets/img/general/footer/FacebookIcon.svg'
import instagramIcon from '../assets/img/general/footer/instagramIcon.svg'
import linkedinIcon from '../assets/img/general/footer/LinkedinIcon.svg'
import youtubeIcon from '../assets/img/general/footer/YoutubeIcon.svg'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='footer'>

        <div className="flex justify-evenly items-center">
            <form className='w-[30%]'>
                <h2 className='text-[30px] font-bold w-[70%] my-[20px]'>SUBSCRIBE TO OUR NEWSLETTER !</h2>
                <div className="flex justify-end items-center border-b-[2px] w-[85%] my-[60px]">
                    <input type="email" placeholder='Your Email' className='bg-[transparent] w-[88%] py-[10px] px-[15px] outline-none' required/>
                    <button type="submit"><img src={sendIcon} className='h-[50px] w-[50px] px-[10px] py-[5px] hover:pb-[12px] transition-all' alt="Send" /></button>
                </div>
            </form>
            <div>
                <img src={footerImage} alt="" />
            </div>
        </div>

        <div className="flex flex-wrap justify-evenly items-start my-[7em]">

            <div className='flex flex-col justify-center items-start w-[25%] mx-[7em]'>
                <img src={Logo} className='h-[6em] mb-[40px]' alt="FourCape" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium labore quidem ipsam porro fugit libero sunt omnis laboriosam expedita!</p>
            </div>

            <div className="mx-[5em]">

                <h3 className='text-[25px] font-bold'>REACH US AT:</h3>

                <ul className='flex flex-col justify-center items-start pl-[20px] py-[15px]'>
                    <li className='flex justify-center items-center my-[10px]'>
                        <img src={callIcon} className='mr-[10px]' alt="" />
                        <span>+ 91 88990 60179</span>
                    </li>
                    <li className='flex justify-center items-center my-[10px]'>
                    <img src={emailIcon} className='mr-[10px]' alt="" />
                        <span>fourcape@gmail.com</span>
                    </li>
                </ul>

            </div>

            <div className="flex flex-col justify-start items-center">

                <h3 className='text-[25px] font-bold'>CHAT WITH US AT:</h3>

                <div className='flex justify-center items-center my-[4em]'>
                    <img src={linkedinIcon} className='mx-[25px]' alt="LinkedIn" />
                    <img src={instagramIcon} className='mx-[25px]' alt="Instagram" />
                    <img src={facebookIcon} className='mx-[25px]' alt="Facebook" />
                    <img src={youtubeIcon} className='mx-[25px]' alt="Youtube" />
                </div>
            
            </div>

        </div>


        <div className='flex justify-evenly items-center flex-wrap'>

            <ul className='flex flex-col justify-center items-start'>
                <li className='my-[20px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color'>Home</Link>
                </li>
                <li className='my-[20px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color'>About Us</Link>
                </li>
                <li className='my-[20px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color'>Our Service</Link>
                </li>
            </ul>
            
            <ul className='flex flex-col justify-center items-start'>
                <li className='my-[20px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color'>Contact Us</Link>
                </li>
                <li className='my-[20px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color'>Our Blogs</Link>
                </li>
                <li className='my-[20px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color'>Connect With Us</Link>
                </li>
            </ul>
            
            <ul className='flex flex-col justify-center items-start'>
                <li className='my-[20px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color'>Our Work</Link>
                </li>
                <li className='my-[20px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color'>Schedule a Call</Link>
                </li>
                <li className='my-[20px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color'>Our Portfolio</Link>
                </li>
            </ul>
            
            <ul className='flex flex-col justify-center items-start'>
                <li className='my-[20px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color'>Our Team</Link>
                </li>
                <li className='my-[20px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color'>Terms & Conditions</Link>
                </li>
                <li className='my-[20px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color'>Privacy Policies</Link>
                </li>
            </ul>

        </div>

        <p className='text-center py-[4em] font-semibold'>All Rights Reserved © since 2023 | <span className='text-accent-color'>FourCape</span></p>

    </div>
  )
}

export default Footer