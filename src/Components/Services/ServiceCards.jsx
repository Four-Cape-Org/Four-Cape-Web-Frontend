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
      <>
      <div className={"flex flex-col sm:flex-row justify-start items-start sm:w-[95%] md:w-[85%] rounded-[20px] my-[5em] "+props.className}>
        <div className="flex justify-center items-center h-full w-full sm:w-fit rounded-[20px]">
          <img src={props.image} alt={props.altText} className="w-[30em] sm:w-[30em] md:w-[30em] lg:w-[40em] object-cover rounded-[20px] border-[7px] border-[white]" />
        </div>
        <div className="flex sm:block flex-col justify-center items-center w-full px-[25px] py-3">
          <h2 className="font-secondary text-[3em] sm:text-[2em] md:text-[2em] lg:text-[3em] font-bold text-accent-color text-center sm:text-left">{props.title}</h2>
          <p className="font-primary text-[14px] sm:text-[14px] md:text-[14px] lg:text-[15px] mt-[10px] text-justify sm:text-left"><TextWithLineBreaks text={props.description} /></p>
          {/*
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
          */}
          <div className="flex justify-start mt-[20px]">
            <BubbleButtonPrimary sendTo="/contact" text="Lets Talk" />
          </div>
        </div>
      </div>
      <hr className="w-[70%] mx-auto text-[gray]" />
      </>
  )
}

const ServiceCards = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
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
