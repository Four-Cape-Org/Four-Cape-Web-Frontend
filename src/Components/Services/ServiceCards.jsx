import React from 'react'
import ServiceData from './ServiceCardsData.js'

/*
 * ServiceCard components
 *
 *  - ServiceCard Image
 *  - ServiceCard Title
 *  - ServiceCard Description
 *  - ServiceCard Button
 *  - Service Card Offers
 *  
 * */

const ServiceCard = (props) => {
  return (
      <div className="flex w-[90%] bg-[#f2f2f2] rounded-[20px] mx-auto">
        <div className="w-full h-full bg-accent-color rounded-t-[20px]">
          <img src={props.image} alt={props.altText} className="w-full h-full object-cover rounded-t-[20px]" />
        </div>
        <div className="top-[50px] left-0 w-full p-[20px]">
          <h3 className="font-primary text-[20px] font-bold text-accent-color">{props.title}</h3>
          <p className="font-primary text-[15px] text-[#6e6e6e] mt-[10px]">{props.description}</p>
        </div>
      </div>
  )
}

const ServiceCards = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      {
        ServiceData.map((service) => {
          return (
            <ServiceCard key={service.id} title={service.title} description={service.description} image={service.image} altText={service.altText} offers={service.offers} />
          )
        })
      }
    </div>
  )
}

export default ServiceCards;
