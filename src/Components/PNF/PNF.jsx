// import React from "react"
// import {Link} from "react-router-dom"
// import Navbar from "../Navbar"
// import Footer from "../Footer"
// import OverlayText from "../Elements/OverlayText"

// import PNFImage from "../../assets/img/pageNotFound.svg"
// const PNF = () => {
//   return (
//     <>
//       <Navbar buttonVisible={false} />
//       <main className="relative">
//         <OverlayText className="absolute top-0 left-10 z-[0] text-[20em]" text="404 Error" />
//         <div className="relative flex justify-center items-center flex-col my-[10em]">
//           <h1 className="text-[100px] font-bold">404</h1>
//           <h2 className="text-[70px]  text-accent-color font-semibold">Page Not Found</h2>
//           <Link to='/' className='block my-[20px] text-[white] bg-accent-color hover:bg-accent-hover py-[15px] px-[20px] text-[20px] rounded-md font-semibold'>Go to Home</Link>
//           <img src={PNFImage} className="h-[65vh]" alt="" />
//           <p className="text-[20px] font-bold">The page you are looking for does not exist.</p>
//         </div>
//       </main>
//       <Footer buttonVisible={false} />
//     </>
//   )
// }

// export default PNF










// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../Navbar";
// import Footer from "../Footer";
// import OverlayText from "../Elements/OverlayText";
// import PNFImage from "../../assets/img/pageNotFound.svg";

// const PNF = () => {
//   return (
//     <>
//       <Navbar buttonVisible={false} />
//       <main className="relative">
//         <OverlayText className="absolute top-0 left-10 md:left-20 lg:left-32 xl:left-48 2xl:left-64 z-[0] text-[8vw] md:text-[6vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[2vw]" text="404 Error" />
//         <div className="relative flex justify-center items-center flex-col my-10 md:my-20 lg:my-32 xl:my-48 2xl:my-64">
//           <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-10xl font-bold">404</h1>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-accent-color font-semibold">Page Not Found</h2>
//           <Link to="/" className="block my-4 md:my-6 lg:my-8 xl:my-10 2xl:my-12 text-white bg-accent-color hover:bg-accent-hover py-3 px-4 md:py-4 md:px-5 lg:py-5 lg:px-6 xl:py-6 xl:px-8 2xl:py-8 2xl:px-10 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-md font-semibold">
//             Go to Home
//           </Link>
//           <img src={PNFImage} className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 h-auto" alt="" />
//           <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
//             The page you are looking for does not exist.
//           </p>
//         </div>
//       </main>
//       <Footer buttonVisible={false} />
//     </>
//   );
// };

// export default PNF;







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







// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../Navbar";
// import Footer from "../Footer";
// import OverlayText from "../Elements/OverlayText";
// import PNFImage from "../../assets/img/pageNotFound.svg";

// const PNF = () => {
//   return (
//     <>
//       <Navbar buttonVisible={false} />
//       <main className="relative">
//         <OverlayText className="absolute top-0 left-10 md:left-20 lg:left-32 z-[0] text-[10em] md:text-[15em]" text="404 Error" />
//         <div className="relative flex flex-col items-center justify-center my-10 md:my-16 lg:my-24">
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">404</h1>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl text-accent-color font-semibold my-4">Page Not Found</h2>
//           <Link
//             to='/'
//             className='block my-4 text-white bg-accent-color hover:bg-accent-hover py-3 px-4 text-lg md:text-xl lg:text-2xl rounded-md font-semibold'
//           >
//             Go to Home
//           </Link>
//           <img src={PNFImage} className="h-3/5 md:h-2/5 lg:h-1/2 xl:h-3/5 my-6" alt="" />
//           <p className="text-lg md:text-xl lg:text-2xl font-bold">
//             The page you are looking for does not exist.
//           </p>
//         </div>
//       </main>
//       <Footer buttonVisible={false} />
//     </>
//   );
// };

// export default PNF;







// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../Navbar";
// import Footer from "../Footer";
// import OverlayText from "../Elements/OverlayText";
// import PNFImage from "../../assets/img/pageNotFound.svg";

// const PNF = () => {
//   return (
//     <>
//       <Navbar buttonVisible={false} />
//       <main className="relative">
//         <OverlayText className="absolute top-0 left-5 md:left-10 lg:left-20 xl:left-32 z-[0] text-[8em] md:text-[12em]" text="404 Error" />
//         <div className="relative flex flex-col items-center justify-center my-6 md:my-10 lg:my-16">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">404</h1>
//           <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-accent-color font-semibold my-2">
//             Page Not Found
//           </h2>
//           <Link
//             to='/'
//             className='block my-3 text-white bg-accent-color hover:bg-accent-hover py-2 px-3 text-base md:text-lg lg:text-xl xl:text-2xl rounded-md font-semibold'
//           >
//             Go to Home
//           </Link>
//           <img src={PNFImage} className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl my-4" alt="" />
//           <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
//             The page you are looking for does not exist.
//           </p>
//         </div>
//       </main>
//       <Footer buttonVisible={false} />
//     </>
//   );
// };

// export default PNF;





/*
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
        <OverlayText className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[0] text-[6em] md:text-[8em] lg:text-[10em] xl:text-[12em]" text="404 Error" />
        <div className="relative flex flex-col items-center justify-center my-6 md:my-10 lg:my-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">404</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-accent-color font-semibold my-2">
            Page Not Found
          </h2>
          <Link
            to='/'
            className='block my-3 text-white bg-accent-color hover:bg-accent-hover py-2 px-3 text-base md:text-lg lg:text-xl xl:text-2xl rounded-md font-semibold'
          >
            Go to Home
          </Link>
          <img src={PNFImage} className="w-full md:max-w-md lg:max-w-lg xl:max-w-xl my-4" alt="" />
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
            The page you are looking for does not exist.
          </p>
        </div>
      </main>
      <Footer buttonVisible={false} />
    </>
  );
};

export default PNF;
*/



// import { NavLink } from "react-router-dom";
// import "./PNF.css";
// import Navbar from "../Navbar";
// import Footer from "../Footer";

// const PNF = () => {
//   return (
//     <>
//       <Navbar buttonVisible={false} />
//       <section id="error-page" >
//         <div className=" content">
//           <h2 className="header font-bold">404</h2>
//           <h4 className="font-bold">Sorry! Page not found</h4>
//           <p>
//             Oops! It seems like the page you're trying to access doesn't exist.
//             If you believe there's an issue, feel free to report it, and we'll
//             look into it.
//           </p>
//           <div className="btns">
//             <NavLink to="/">return home</NavLink>
//             <NavLink to="/contact">report problem</NavLink>
//           </div>
//         </div>
//       </section>
//       <Footer buttonVisible={false} />
//     </>
//   );
// };

// export default PNF;
