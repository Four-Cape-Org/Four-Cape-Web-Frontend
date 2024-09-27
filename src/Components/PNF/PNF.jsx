
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OverlayText from "../Elements/OverlayText";

const PNFImage = "https://res.cloudinary.com/dlvmwou0e/image/upload/v1727437066/pageNotFound.svg";

const PNF = () => {
  return (
    <>
      <Navbar buttonVisible={false} />
      <main className="relative">
        {/*<OverlayText className="absolute top-0 left-10 md:left-20 lg:left-10 xl:left-8 2xl:left-20 2xl:b z-[0] text-[7em] md:text-[10em] lg:text-[15.5em] xl:text-[22em] 2xl:text-[20em]" text="404 Error" /> */}

        {/* <OverlayText className="absolute top-0 left-10 z-[0] text-[20em]" text="404 Error" /> */}
        <div className="relative flex justify-center items-center flex-col mt-10 md:mt-20 lg:mt-0 mb-[20em]">
         
          

          <img src="https://res.cloudinary.com/dlvmwou0e/image/upload/v1727437066/pageNotFound.svg" className="w-full md:w-3/4 lg:w-[40em] h-auto" alt="" />
          
          <h2 className="text-3xl md:text-5xl lg:text-[4.5em] text-accent-color font-semibold">Page Not Found</h2>

          <p className="text-base md:text-lg lg:text-[25px] text-center mx-3 my-10 font-bold">
            The page you are looking for does not exist.
          </p>

          <Link to="/" className="block my-5 md:my-6 lg:my-8 xl:my-10 2xl:my-12 text-white bg-accent-color hover:bg-accent-hover py-3 px-4 md:py-4 md:px-5 lg:py-5 lg:px-6 xl:py-6 xl:px-8 2xl:py-8 2xl:px-10 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-md font-semibold">
            Go to Home
          </Link>
        </div>
      </main>
      <Footer buttonVisible={false} />
    </>
  );
};

export default PNF;
