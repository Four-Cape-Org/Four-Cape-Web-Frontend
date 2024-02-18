import React from 'react'

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
            desc: "Description 1",
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

    return (
        <>
            <div>

                <h2 className='font-secondary lg:text-[4em] md:text-[3em] sm:text-[2em] text-[2em] mx-4 drop-shadow-xl text-center font-semibold underline'>Have a glance at our Design Gallary</h2>

                <div className='md:columns-3 sm:columns-2 columns-1 w-[90%] mx-auto my-[5em]'>
                    {
                        designData.map((item, index) => {
                            return (
                                <div key={index} className='relative transition-all duration-500 mb-[20px] hover:brightness-50 border-[4px] border-[#ffffff00] hover:border-accent-color'>
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
