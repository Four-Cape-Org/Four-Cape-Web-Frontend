import React from 'react'

const QuoteSection = () => {
  return (
    <div className='my-[6em]'>
        <hr className='w-[85%] mx-auto text-[white]' />

        <div className='w-screen my-[4em]'>
          <p className='w-[90%] italic lg:text-[50px] text-[30px] text-[white] text-center mx-auto font-secondary'>If you don’t build your dream, <br /> someone else will hire you to help them build theirs.</p>
          <div className='flex justify-end items-center w-[80%]'>
            <span className='italic font-semibold lg:text-[20px] text-[15px] text-accent-color text-center font-primary my-4'>~ Dhirubhai Ambani <br /> Founder, Reliance Industries</span>
          </div>
        </div>

        <hr className='w-[85%] mx-auto text-[white]' />
      </div>
  )
}

export default QuoteSection