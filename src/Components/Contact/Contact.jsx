import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import BookCall from '../BookCall'
import OverlayText from '../Elements/OverlayText'

import ContactImg from '../../assets/img/Contact/ContactPage.svg'
import callIcon from '../../assets/img/general/footer/CallIcon.svg'
import emailIcon from '../../assets/img/general/footer/EmailIcon.svg'

const Contact = () => {

  const bookCallRef = useRef(null);

  const formInputStyle = `w-[100%] bg-[transparent] py-[10px] px-[15px] mb-[15px] placeholder:text-[#484848] placeholder:text-[13px] text-[17px] text-[black] rounded-md border-[1px] border-[#484848] outline-none`

  return (
    <>
        <Navbar  bookCallRef={bookCallRef}/>
        <section className='relative'>

          <OverlayText className="absolute top-0 lg:left-10 md:left-7 sm:left-5 left-3 z-[0] text-[14vw] max-[1250px]:text-[16vw]" text="Contact Us" />
          <div className='relative lg:pt-[15em] md:pt-[7em] sm:pt-[7em] pt-[5em] pb-[3em]'>
            <h4 className='text-accent-color font-bold font-primary text-[20px] my-[10px] text-center'>Have a Question ?</h4>
            <p className='font-primary sm:text-[15px] text-[12px] md:w-[45%] sm:w-[70%] w-[85%] my-[20px] mx-auto text-center'>Thank you for your interest in our services. Please fill out the form below or E-Mail us at <Link to="" className="text-accent-color hover:underline font-semibold">fourcape@gmail.com</Link> and we will get to you promptly regarding your request.</p>

            <div className='flex lg:flex-row flex-col-reverse justify-center items-center'>

              <div className='flex lg:flex-col sm:flex-row flex-col justify-center items-center lg:w-[35%] md:w-[100%] sm:w-[100%] lg:mt-0 md:mt-[3em] sm:mt-[3em] mt-[3em]'>
                
                <img src={ContactImg} className='lg:w-[30em] md:w-[50%] sm:w-[50%]' alt="" />

                <div className="flex flex-col justify-center items-center mx-[3em] my-[25px]">

                  <h3 className='text-[25px] font-semibold'>GET IN TOUCH:</h3>

                  <ul className='flex flex-col justify-start items-start pl-[20px] py-[15px]'>
                      <li className='my-[10px]'>
                          <Link to="/" className='flex justify-center items-center my-[10px]'>
                            <img src={callIcon} className='mr-[10px]' alt="" />
                            <span>+91 88990 60179</span>
                          </Link>
                      </li>
                      <li className='my-[10px]'>
                        <Link to="/" className='flex justify-center items-center' >
                          <img src={emailIcon} className='mr-[10px]' alt="" />
                          <span>fourcape@gmail.com</span>
                        </Link>
                      
                      </li>
                  </ul>

                </div>

              </div>


              <div className='flex flex-col justify-center items-center lg:w-[50%] md:w-[80%] sm:w-[90%] w-[100%] bg-[white] rounded-xl py-[70px] my-[3em]'>

                <h3 className='text-primary text-[#000000] text-[35px] font-bold mb-[15px]'>Talk to Us : </h3>
                
                <form action="" className='w-[100%] flex flex-col justify-center items-center'>

                  <div className='flex flex-col justify-center items-start md:w-[75%] sm:w-[85%] w-[85%] my-[15px] mx-auto'>
                      <label htmlFor="username" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Your Name: <span className='text-[red]'>*</span></label>
                      <input type="text" name='username' placeholder="Name" className={formInputStyle} />
                  </div>

                  <div className='flex flex-col justify-center items-start md:w-[75%] sm:w-[85%] w-[85%] my-[15px] mx-auto'>
                      <label htmlFor="email" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Your Email: <span className='text-[red]'>*</span></label>
                      <input type="email" name='email' placeholder="example@gmail.com" className={formInputStyle} />
                  </div>

                  <div className='flex flex-col justify-center items-start md:w-[75%] sm:w-[85%] w-[85%] my-[15px] mx-auto'>
                      <label htmlFor="phone" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Your Phone Number: <span className='text-[red]'>*</span></label>
                      <input type="tel" name='phone' placeholder="Phone Number" className={formInputStyle} />
                  </div>

                  <div className='flex flex-col justify-center items-start md:w-[75%] sm:w-[85%] w-[85%] my-[15px] mx-auto'>
                    <label htmlFor="msg" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Your Message: <span className='text-[red]'>*</span></label>
                    <textarea name='msg' placeholder="Message" className={`${formInputStyle} resize-none h-[8em]`} />
                  </div>

                  <button className='bg-accent-color hover:bg-accent-hover py-[10px] px-[15px] text-primary-color font-semibold rounded-md my-[10px] md:w-[75%] sm:w-[85%] w-[85%]'>Book Call</button>

                </form>
                <p className='text-center text-[#3f3f3f] text-[13px] font-semibold w-[65%] mx-auto'>Our Company doesn't sell or share any customer information. Your Privacy is important to us.</p>

              </div>

            </div>

          </div>
          
        </section>
        <BookCall  bookCallRef={bookCallRef} />
        <Footer  bookCallRef={bookCallRef} />
    </>
  )
}

export default Contact