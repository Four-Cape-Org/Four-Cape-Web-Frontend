import React from 'react'

import { clientReviewsData } from './HomeData'

import DoubleEndQuote from '../../assets/img/home/Double_End_Quote.svg'

const ClientReview = () => {
  return (
    <div className='relative flex justify-center items-start pt-[12em]'>
        <div className="sticky top-20 left-[10em]">
            <img src={DoubleEndQuote} className='h-[16em]' alt="" />
            <h3 className='absolute top-0 right-[-2em] text-[3em] font-secondary font-semibold drop-shadow-xl text-center'>Client <br/> Reviews</h3>
        </div>
        <div className='relative container mx-auto flex flex-col justify-center items-center'>
            {clientReviewsData.map((clientReview, index) => {
                return (
                    <div key={index} className='w-[50%] h-64 border-t-[6px] p-5 m-5'>
                        <p className='my-[15px] text-[22px] italic font-secondary'>{clientReview.description}</p>
                        <div className='flex justify-start items-center my-8'>
                            <img className='w-20 h-20 rounded-full mx-[20px]' src={clientReview.img} alt={clientReview.name} />
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