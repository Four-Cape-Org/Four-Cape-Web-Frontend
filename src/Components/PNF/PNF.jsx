
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import OverlayText from "../Elements/OverlayText";
import PNFImage from "../../assets/img/pageNotFound.svg";

const PNF = () => {
  return (
    <>
      <Navbar buttonVisible={false} />
      <main className="relative">
        <OverlayText className="absolute top-0 left-10 md:left-20 lg:left-10 xl:left-8 2xl:left-20 2xl:b z-[0] text-[7em] md:text-[10em] lg:text-[15.5em] xl:text-[22em] 2xl:text-[20em]" text="404 Error" />
        {/* <OverlayText className="absolute top-0 left-10 z-[0] text-[20em]" text="404 Error" /> */}
        <div className="relative flex justify-center items-center flex-col my-10 md:my-20 lg:my-32 xl:my-48 2xl:my-64">
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-bold">404</h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-accent-color font-semibold">Page Not Found</h2>
          <Link to="/" className="block my-5 md:my-6 lg:my-8 xl:my-10 2xl:my-12 text-white bg-accent-color hover:bg-accent-hover py-3 px-4 md:py-4 md:px-5 lg:py-5 lg:px-6 xl:py-6 xl:px-8 2xl:py-8 2xl:px-10 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-md font-semibold">
            Go to Home
          </Link>
          <img src={PNFImage} className="w-full md:w-3/4 lg:w-2.2/3 xl:w-3/4 2xl:w-1/2 h-auto" alt="" />
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
            The page you are looking for does not exist.
          </p>
        </div>
      </main>
      <Footer buttonVisible={false} />
    </>
  );
};

export default PNF;