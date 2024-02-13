import React from 'react'

import { clientReviewsData } from './HomeData'

import DoubleEndQuote from '../../assets/img/home/Double_End_Quote.svg'

const ClientReview = () => {
  return (
    <div className='relative flex sm:flex-row flex-col justify-center items-start sm:pt-[12em] pt-[9em]'>
        <div className="sm:sticky sm:flex-none flex justify-center items-center top-20 left-[5em]">
            <img src={DoubleEndQuote} className='lg:w-[70%] md:w-[60%] sm:w-[90%] w-[70%]' alt="" />
            <h3 className='absolute sm:top-0 top-[3em] lg:right-[0em] md:right-20 sm:right-[5em] right-[40%] lg:text-[3em] md:text-[2em] sm:text-[2.6em] text-[3em] font-secondary font-semibold drop-shadow-xl text-center'>Client <br/> Reviews</h3>
        </div>
        <div className='relative container mx-auto sm:mt-0 mt-[5em] flex flex-col justify-center items-center'>
            {clientReviewsData.map((clientReview, index) => {
                return (
                    <div key={index} className='lg:w-[70%] md:w-[85%] sm:w-[90%] w-[95%] border-t-[6px] p-5 mx-5'>
                        <p className='my-[15px] lg:text-[22px] md:text-[17px] text-[14px] italic font-secondary'>{clientReview.description}</p>
                        <div className='flex justify-start items-center my-4'>
                            <img className='lg:w-20 lg:h-20 md:w-14 md:h-14 w-12 h-12 rounded-full mx-[20px]' src={clientReview.img} alt={clientReview.name} />
                            <div className="flex flex-col justify-start items-start">
                                <h5 className='text-[17px] font-bold'>{clientReview.name}</h5>
                                <p className='text-[15px] text-center'>{clientReview.designation}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ClientReview