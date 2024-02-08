import React from 'react'

import BookCallImg from '../assets/img/home/bookCall.svg'

const BookCall = ({bookCallRef}) => {

    const formInputStyle = `w-[100%] bg-[transparent] py-[10px] px-[15px] mb-[15px] placeholder:text-[#484848] placeholder:text-[13px] text-[17px] text-[black] rounded-md border-[1px] border-[#484848] outline-none`

  return (
    <div className='bg-[#953F66] flex justify-center items-center flex-wrap  py-[4em] mt-[5em]' ref={bookCallRef}>
        <div className='w-[30%] flex flex-col justify-center items-start'>
            <h3 className='text-primary text-[white] text-[25px] font-semibold'>Lets Build Together.</h3>
            <p className='text-[#cacaca] text-[15px] w-[75%] my-[10px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum ex voluptatibus ipsa maxime, nostrum magni id corporis doloribus eveniet.</p>
            <img src={BookCallImg} className="h-[40%] my-[3em]" alt="Book a call" />
        </div>

        <form action="" className='bg-[#D1D1D1] w-[45%] py-[4em] px-[30px] mx-[4em]'>

            <h3 className='text-primary text-[#000000] text-[25px] font-semibold mb-[15px]'>Book a free 15 min call: </h3>

            <div className='flex flex-col justify-center items-center'>

                <div className='flex justify-between items-center w-[90%]'>

                    <div className='flex flex-col justify-center items-start w-[47%] my-[15px] mx-auto'>
                        <label htmlFor="firstname" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>First Name: <span className='text-[red]'>*</span></label>
                        <input type="text" name='firstname' placeholder="First Name" className={formInputStyle} />
                    </div>

                    <div className='flex flex-col justify-center items-start w-[47%] my-[15px] mx-auto'>
                        <label htmlFor="lastname" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Last Name: <span className='text-[red]'>*</span></label>
                        <input type="text" name='lastname' placeholder="Last Name" className={formInputStyle} />
                    </div>

                </div>

                <div className='flex flex-col justify-center items-start w-[90%] my-[15px] mx-auto'>
                    <label htmlFor="email" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Your Email: <span className='text-[red]'>*</span></label>
                    <input type="email" name='email' placeholder="example@gmail.com" className={formInputStyle} />
                </div>

                <div className='flex flex-col justify-center items-start w-[90%] my-[15px] mx-auto'>
                    <label htmlFor="date" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Your Preffered Date: <span className='text-[red]'>*</span></label>
                    <input type="date" name='date' placeholder="dd/mm/yyyy" className={formInputStyle} />
                </div>

                <div className='flex flex-col justify-center items-start w-[90%] my-[15px] mx-auto'>
                    <label htmlFor="msg" className='text-[#484848] text-[15px] font-semibold mb-[5px]'>Your Message:</label>
                    <textarea name='msg' placeholder="Message" className={`${formInputStyle} resize-none h-[8em]`} />
                </div>

                <button className='bg-accent-color hover:bg-accent-hover py-[10px] px-[15px] text-primary-color font-semibold rounded-md my-[10px] w-[90%]'>Book Call</button>

            </div>

        </form>
    </div>
  )
}

export default BookCall