import React from 'react'
import toast from 'react-hot-toast'

//Image Imports
const footerImage = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727449867/general/footer/footerSvg.svg'
const Logo = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727445927/prime/pinkLogo.png'

// Icon Imports
const sendIcon = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727449822/general/footer/sendIcon.svg'
//import callIcon from 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727449868/general/footer/callIcon.svg'
const emailIcon = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727449868/general/footer/emailIcon.svg'
//import facebookIcon from 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727449867/general/footer/facebookIcon.svg'
const instagramIcon = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727449866/general/footer/instaIcon.svg'
const linkedinIcon = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727449822/general/footer/linkedinIcon.svg'
//import youtubeIcon from 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727449821/general/footer/ytIcon.svg'
import { Link } from 'react-router-dom'


const Footer = ({bookCallRef, buttonVisible = true}) => {

    const subscribeHandler = (e) => {
        e.preventDefault();
        toast.error('This feature is not available yet!');
    }         

    const scrollToElement = (ref) => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    const year = new Date().getFullYear();

  return (
    <div className='footer'>

        <div className="flex sm:flex-row flex-col justify-evenly items-center px-4">
            <form onSubmit={subscribeHandler} className='lg:w-[50%] md:w-[50%] sm:w-[45%] w-[80%] max-w-[40em]'>
                <h2 className='lg:text-[30px] md:text-[26px] sm:text-[22px] text-[18px] font-bold lg:w-[70%] md:w-[85%] sm:w-[85%] w-[90%] my-[20px]'>SUBSCRIBE TO OUR NEWSLETTER !</h2>
                <div className="flex justify-end items-center border-b-[2px] lg:w-[85%] md:w-[90%] sm:w-[90%] w-[100%] my-[60px]">
                    <input type="email" placeholder='Your Email' className='bg-[transparent] w-[88%] py-[10px] px-[15px] outline-none' required/>
                    <button type="submit"><img src={sendIcon} className='h-[50px] w-[50px] px-[10px] py-[5px] hover:pb-[12px] transition-all' alt="Send" /></button>
                </div>
            </form>
            <div className='lg:w-[45%] md:w-[45%] sm:w-[45%] w-[95%] sm:max-w-[40em] max-w-[25em]'>
                <img src={footerImage} className='w-[100%]' alt="" />
            </div>
        </div>

        <div className="flex flex-wrap justify-center items-center my-[2em]">

            <div className='flex flex-col justify-center sm:items-start items-center lg:w-[25%] md:w-[30%] sm:w-[35%] w-[85%] lg:mx-[6em] md:mx-[4em] sm:mx-[2em] my-[3.5em]'>
                <img src={Logo} className='w-[14em] lg:mb-[40px] mb-[20px]' alt="FourCape" />
                <p className='lg:text-[16px] md:text-[14px] sm:text-[14px] text-[14px] sm:text-left text-center'>Thanks for stopping by! At Fourcape, we're all about creating, inspiring, and having fun while doing it. Got a project in mind? Let’s chat and make magic happen! ✨ Your brand’s next big move starts here.</p>
            </div>

            <div className="lg:mx-[5em] md:mx-[3em] sm:mx-[2em] my-[3.5em]">

                <h3 className='text-[25px] sm:text-left text-center font-bold'>REACH US AT:</h3>

                <ul className='flex flex-col justify-center items-start pl-[20px] py-[15px]'>
                    {/* 
                    <li>
                        <Link to="/" className='flex justify-center items-center my-[10px]'>
                            <img src={callIcon} className='mr-[10px]' alt="" />
                            <span>+ 91 88990 60179</span>
                        </Link>
                    </li>
                    */}
                    <li>
                        <Link to="mailto: fourcape@gmail.com" className='flex justify-center items-center my-[10px]'>
                            <img src={emailIcon} className='mr-[10px]' alt="" />
                            <span>fourcape@gmail.com</span>
                        </Link>
                    </li>
                </ul>

            </div>

            <div className="flex flex-col justify-start items-center lg:mx-[4em] md:mx-[3em]  my-[3.5em]">

                <h3 className='text-[25px] font-bold'>CONNECT WITH US:</h3>

                <div className='flex justify-center items-center my-[4em]'>
                    <Link to="https://www.linkedin.com/company/four-cape/" className='mx-[25px]'>
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </Link>
                    
                    <Link to="https://www.instagram.com/four.cape/" className='mx-[25px]'>
                        <img src={instagramIcon} alt="Instagram" />
                    </Link>

                    {/*
                    <Link to="/" className='mx-[25px]'>
                        <img src={facebookIcon} alt="Facebook" />
                    </Link>

                    <Link to="/" className='mx-[25px]'>
                        <img src={youtubeIcon} alt="Youtube" />
                    </Link>
                    */}
                </div>
            
            </div>

        </div>


        {/*
        <div className='flex flex-row justify-evenly items-center flex-wrap'>

            <ul className='flex flex-col justify-center sm:items-start items-center'>
                <li className='my-[20px] mx-[35px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color md:text-[17px] text-[13px]'>Home</Link>
                </li>
                <li className='my-[20px] mx-[35px] font-semibold'>
                    <Link to='/about' className='hover:text-accent-color md:text-[17px] text-[13px]'>About Us</Link>
                </li>
            </ul>
            
            <ul className='flex flex-col justify-center sm:items-start items-center'>
                <li className='my-[20px] mx-[35px] font-semibold'>
                    <Link to='/services' className='hover:text-accent-color md:text-[17px] text-[13px]'>Our Service</Link>
                </li>

                <li className='my-[20px] mx-[35px] font-semibold'>
                    <Link to='/contact' className='hover:text-accent-color md:text-[17px] text-[13px]'>Contact Us</Link>
                </li>
            </ul>
            
            <ul className='flex flex-col justify-center sm:items-start items-center'>
                <li className='my-[20px] mx-[35px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color md:text-[17px] text-[13px]'>Our Work</Link>
                </li>
                {buttonVisible ? 
                <li className='my-[20px] mx-[35px] font-semibold'>
                    <Link  onClick={() => {scrollToElement(bookCallRef)}} className='hover:text-accent-color md:text-[17px] text-[13px]'>Schedule a Call</Link>
                </li> : null}
            </ul>
            
            <ul className='flex flex-col justify-center sm:items-start items-center'>
                <li className='my-[20px] mx-[35px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color md:text-[17px] text-[13px]'>Terms & Conditions</Link>
                </li>
                <li className='my-[20px] mx-[35px] font-semibold'>
                    <Link to='/' className='hover:text-accent-color md:text-[17px] text-[13px]'>Privacy Policies</Link>
                </li>
            </ul>

        </div>
        */}


        <ul className='flex flex-row justify-evenly items-center flex-wrap'>
          
          <li className="my-[20px] mx-[35px] font-semibold">
            <Link to='/' className='hover:text-accent-color md:text-[17px] text-[13px]'>Home</Link>
          </li> 
          <li className="my-[20px] mx-[35px] font-semibold">
            <Link to='/about' className='hover:text-accent-color md:text-[17px] text-[13px]'>About Us</Link>
          </li>
          <li className="my-[20px] mx-[35px] font-semibold">
            <Link to='/services' className='hover:text-accent-color md:text-[17px] text-[13px]'>Our Service</Link>
          </li>
          <li className="my-[20px] mx-[35px] font-semibold">
            <Link to='/contact' className='hover:text-accent-color md:text-[17px] text-[13px]'>Contact Us</Link>
          </li>

        </ul>


        <p className='text-center py-[4em] md:text-[18px] text-[15px] font-semibold'>All Rights Reserved © since {year} | <span className='text-accent-color'>FourCape</span></p>

    </div>
  )
}

export default Footer
