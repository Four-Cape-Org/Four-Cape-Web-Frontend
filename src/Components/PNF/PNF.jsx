import React from "react"
import {Link} from "react-router-dom"
import Navbar from "../Navbar"
import Footer from "../Footer"

import PNFImage from "../../assets/img/pageNotFound.svg"
const PNF = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex justify-center items-center flex-col my-[10em]">
          <h1 className="text-[100px] font-bold">404</h1>
          <h2 className="text-[70px]  text-accent-color font-semibold">Page Not Found</h2>
          <Link to='/' className='block my-[20px] text-[white] bg-accent-color hover:bg-accent-hover py-[15px] px-[20px] text-[20px] rounded-md font-semibold'>Go to Home</Link>
          <img src={PNFImage} className="h-[65vh]" alt="" />
          <p className="text-[20px] font-bold">The page you are looking for does not exist.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PNF