import React from 'react'
import ServiceData from './ServiceCardsData.js'
import BubbleButtonPrimary from '../Elements/BubbleButtonPrimary'

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

function TextWithLineBreaks(props) {
  const textWithBreaks = props.text.split('\n').map((text, index) => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  ));

  return <div>{textWithBreaks}</div>;
}

const ServiceCard = (props) => {
  return (
      <div className={"flex justify-start items-start w-[90%] rounded-[20px] my-[2em] "+props.className}>
        <div className="flex justify-center items-center h-full rounded-[20px]">
          <img src={props.image} alt={props.altText} className="w-[30em] object-cover rounded-[20px]" />
        </div>
        <div className="w-full px-[18px]">
          <h2 className="font-primary text-[25px] font-bold text-accent-color">{props.title}</h2>
          <p className="font-primary text-[15px] mt-[10px]"><TextWithLineBreaks text={props.description} /></p>
          {
            (props.offers.length > 0) ? (
              <ul className="font-primary text-[15px] mt-[2em] ml-[4em]">
                {
                  props.offers.map((offer, index) => {
                    return (
                      <li key={index}>✨ {offer}</li>
                    )
                  })
                }
              </ul>
            ) : null
          }
          <div className="flex justify-end mt-[20px]">
            <BubbleButtonPrimary sendTo="/contact" text="Lets Talk" />
          </div>
        </div>
      </div>
  )
}

const ServiceCards = () => {
  return (
    <div className="flex flex-col mx-[2em] w-screen">
      {
        ServiceData.map((service) => {
          return (
            <ServiceCard key={service.id} className="even:flex-row-reverse even:justify-end" title={service.title} description={service.description} image={service.image} altText={service.altText} offers={service.offers} />
          )
        })
      }
    </div>
  )
}

export default ServiceCards;
