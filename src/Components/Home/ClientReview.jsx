import React from 'react'

import { clientReviewsData } from './HomeData'

import DoubleEndQuote from '../../assets/img/home/Double_End_Quote.svg'

const ClientReview = () => {
  return (
    <div className='relative flex justify-center items-start pt-[12em]'>
        <div className="sticky top-20 left-[5em]">
            <img src={DoubleEndQuote} className='lg:w-[70%] md:w-[60%]' alt="" />
            <h3 className='absolute top-0 lg:right-[0em] md:right-20 lg:text-[3em] md:text-[2em] font-secondary font-semibold drop-shadow-xl text-center'>Client <br/> Reviews</h3>
        </div>
        <div className='relative container mx-auto flex flex-col justify-center items-center'>
            {clientReviewsData.map((clientReview, index) => {
                return (
                    <div key={index} className='lg:w-[70%] md:w-[85%] border-t-[6px] p-5 mx-5'>
                        <p className='my-[15px] lg:text-[22px] md:text-[17px] italic font-secondary'>{clientReview.description}</p>
                        <div className='flex justify-start items-center my-4'>
                            <img className='lg:w-20 lg:h-20 md:w-14 md:h-14 rounded-full mx-[20px]' src={clientReview.img} alt={clientReview.name} />
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