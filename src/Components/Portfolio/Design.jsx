import React, { useState } from 'react'

// import images

import DesignGallary1 from '../../assets/img/portfolio/design/DesignGallary1.png';
import DesignGallary2 from '../../assets/img/portfolio/design/DesignGallary2.png';
import DesignGallary3 from '../../assets/img/portfolio/design/DesignGallary3.png';
import DesignGallary4 from '../../assets/img/portfolio/design/DesignGallary4.png';
import DesignGallary5 from '../../assets/img/portfolio/design/DesignGallary5.png';


const Design = () => {

    const designData = [
        {
            id: 1,
            img: DesignGallary1,
            title: "Title 1",
            desc: "Description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Description lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "",
        },
        {
            id: 2,
            img: DesignGallary2,
            title: "Title 2",
            desc: "Description 2",
            link: "",
        },
        {
            id: 3,
            img: DesignGallary3,
            title: "Title 3",
            desc: "Description 3",
            link: "",
        },
        {
            id: 4,
            img: DesignGallary4,
            title: "Title 4",
            desc: "Description 4",
            link: "",
        },
        {
            id: 5,
            img: DesignGallary5,
            title: "Title 5",
            desc: "Description 5",
            link: "",
        },
        {
            id: 6,
            img: DesignGallary5,
            title: "Title 6",
            desc: "Description 6",
            link: "",
        },
        {
            id: 7,
            img: DesignGallary4,
            title: "Title 7",
            desc: "Description 7",
            link: "",
        },
        {
            id: 8,
            img: DesignGallary3,
            title: "Title 8",
            desc: "Description 8",
            link: "",
        },
        {
            id: 9,
            img: DesignGallary2,
            title: "Title 9",
            desc: "Description 9",
            link: "",
        },
        {
            id: 10,
            img: DesignGallary1,
            title: "Title 10",
            desc: "Description 10",
            link: "",
        },
    ]

    const [showImg, setShowImg] = useState(null);

    return (
        <>
            <div>

                <h2 className='font-secondary lg:text-[4em] md:text-[3em] sm:text-[2em] text-[2em] mx-4 drop-shadow-xl text-center font-semibold underline'>Have a glance at our Design Gallary</h2>

                { showImg !== null ? 
                <div className='fixed top-0 left-0 w-screen h-screen bg-[black] z-[1999]'>
                    <button className='fixed top-10 right-10 z-[2000] text-[white] text-[30px] bg-[#00000083] px-[14px] py-[3px] rounded-full' onClick={() => {setShowImg(null)}}><i class="fa-solid fa-xmark"></i></button>
                    <div className='flex justify-center items-center w-[100%] h-[70vh]'>
                        <img src={showImg.img} alt="" className='h-auto max-h-[70vh]' />
                    </div>
                    <div className='bg-[white] flex flex-col px-10 py-10 overflow-scroll h-[40vh]'>
                        <h2 className='text-[#000000] font-secondary lg:text-[40px] md:text-[30px] sm:text-[20px] text-[30px] font-semibold'>{showImg.title}</h2>
                        <p className='font-primary lg:text-[18px] md:text-[15px] sm:text-[12px] text-[15px] sm:mt-[3rem] mt-[1em] text-[#000000]'>{showImg.desc}</p>
                    </div>
                </div> : null }


                <div className='md:columns-3 sm:columns-2 columns-1 w-[90%] mx-auto my-[5em]'>
                    {
                        designData.map((item, index) => {
                            return (
                                <div key={index} onClick={() => {setShowImg(item)}} className='relative transition-all duration-500 mb-[20px] hover:brightness-50 border-[4px] border-[#ffffff00] hover:border-accent-color'>
                                    <img src={item.img} alt="" className='sm:w-[100%] w-[90%] mx-auto' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Design
