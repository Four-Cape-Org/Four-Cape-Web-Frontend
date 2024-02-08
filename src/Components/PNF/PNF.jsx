import React from "react"
import {Link} from "react-router-dom"
import Navbar from "../Navbar"
import Footer from "../Footer"
import OverlayText from "../Elements/OverlayText"

import PNFImage from "../../assets/img/pageNotFound.svg"
const PNF = () => {
  return (
    <>
      <Navbar buttonVisible={false} />
      <main className="relative">
        <OverlayText className="absolute top-0 left-10 z-[0] text-[20em]" text="404 Error" />
        <div className="relative flex justify-center items-center flex-col my-[10em]">
          <h1 className="text-[100px] font-bold">404</h1>
          <h2 className="text-[70px]  text-accent-color font-semibold">Page Not Found</h2>
          <Link to='/' className='block my-[20px] text-[white] bg-accent-color hover:bg-accent-hover py-[15px] px-[20px] text-[20px] rounded-md font-semibold'>Go to Home</Link>
          <img src={PNFImage} className="h-[65vh]" alt="" />
          <p className="text-[20px] font-bold">The page you are looking for does not exist.</p>
        </div>
      </main>
      <Footer buttonVisible={false} />
    </>
  )
}

export default PNF