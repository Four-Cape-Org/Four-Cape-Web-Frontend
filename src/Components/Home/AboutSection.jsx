import React from "react";
import OverlayText from "../Elements/OverlayText";
import BubbleButtonSecondary from "../Elements/BubbleButtonSecondary";

const AboutImg = "https://res.cloudinary.com/dlvmwou0e/image/upload/v1727448041/home/aboutImg.jpg";
//const AdThumbnail = "https://res.cloudinary.com/dlvmwou0e/image/upload/v1727449270/general/adThumbnail.jpg";

const AboutSection = (props) => {
  return (
    <>
      <div className="relative mt-[7em]">
        <OverlayText
          className="absolute top-[-50px] left-10 z-[0] text-[20vw] max-[1250px]:text-[18vw] max-[550px]:left-3"
          text="About"
        />
        <div className="relative w-screen flex justify-end items-center pt-[4em] sm:pt-[7em] md:pt-[10em] lg:pt-[17em] pb-[2em]">
          <img
            src={AboutImg}
            className="h-[30em] md:h-auto aspect-video sm:aspect-auto blur-[3px] brightness-50 lg:w-[80%] md:w-screen md:brightness-25"
            alt=""
          />
          <div className="absolute top-[10%] sm:top-[10%] md:top-[30%] flex flex-col justify-center items-start w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] lg:left-[10em] md:left-[6em] sm:left-[3em] left-[1em]">
            <p className="text-accent-color font-bold font-primary text-[15px] sm:text-[15px] md:text-[20px] my-[10px]">
              About Us
            </p>
            <h2 className="font-secondary lg:text-[3em] md:text-[2em] sm:text-[2em] text-[1.5em] sm:font-normal font-semibold drop-shadow-xl">
              "Driven by creativity and expertise, we are a design and marketing
              agency where skilled professionals bring your brand's vision to
              life."
            </h2>
            <p className="font-primary text-[12px] w-[95%] my-[20px] lg:w-[70%] md:w-[80%] sm:w-[90%] sm:text-[15px] sm:font-normal font-semibold">
              We combine creative design with strategic marketing to bring
              your brand's vision to life. Our skilled team is committed to
              delivering impactful results that resonate with your audience.
            </p>
            <BubbleButtonSecondary
              className="my-[32px]"
              sendTo="/about"
              text="LEARN MORE"
            />
          </div>
        </div>
      </div>

      {/* The Commented code below for video Advertisment */}

      {/*<div className='relative lg:mt-[3em] md:mt-[3em] sm:mt-[3em] mt-[5em]'>
        <h2 className='font-secondary lg:text-[4em] md:text-[3em] sm:text-[2em] text-[2em] mx-4 drop-shadow-xl text-center underline'>Want to know more ? Check this out.</h2>
        <div className='relative flex justify-center items-center my-[3em] cursor-pointer'>
          <img src={AdThumbnail} className='lg:w-[80%] md:w-[80%] sm:w-[90%] w-[95%] rounded-md shadow-[35px_35px_10px_-15px_#F82586] noSelect' alt="Advertisment Thumbnail" />
          <button className='absolute top-[50%] translate-y-[-50%] rounded-[50%] bg-accent-color border-[2px] border-accent-color hover:border-[white] h-[2.5em] w-[2.5em] max-[700px]:h-[70px] max-[700px]:w-[70px] text-[50px] max-[700px]:text-[30px]'><i className="fa-solid fa-play"></i></button>
        </div>
      </div>*/}
    </>
  );
};

export default AboutSection;
