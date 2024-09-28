import React from 'react'
//const AdThumbnail = 'https://res.cloudinary.com/dlvmwou0e/image/upload/v1727449270/general/adThumbnail.jpg'

const ShowReel = () => {
  return (
    <div className='relative lg:mt-[10em] md:mt-[8em] sm:mt-[7em] mt-[7em]'>
        <h2 className='font-secondary lg:text-[4em] md:text-[3em] sm:text-[2em] text-[2em] mx-4 drop-shadow-xl text-center underline'>Check Out our Show Reels.</h2>
        <div className='relative flex justify-center items-center my-[3em] cursor-pointer'>
          <img src={AdThumbnail} className='lg:w-[80%] md:w-[80%] sm:w-[90%] w-[95%] rounded-[20px] shadow-[5px_2px_70px_-27px_#F82586] noSelect' alt="Advertisment Thumbnail" />
          <button className='absolute top-[50%] translate-y-[-50%] rounded-[50%] bg-accent-color border-[2px] border-accent-color hover:border-[white] h-[2.5em] w-[2.5em] max-[700px]:h-[70px] max-[700px]:w-[70px] text-[50px] max-[700px]:text-[30px]'><i className="fa-solid fa-play"></i></button>
        </div>
      </div>
  )
}

export default ShowReel
