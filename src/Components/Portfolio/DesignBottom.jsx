import React from 'react'
import DesignGallary3 from '../../assets/img/portfolio/design/DesignGallary3 1.png'
import DesignGallary7 from '../../assets/img/portfolio/design/DesignGallary2 2.png'

const DesignBottom = () => {
    return (
        <div>
            <div className='flex flex-row ml-[8rem] mr-[8rem] relative'>
                <div className='m-[2rem]'>
                    <img src={DesignGallary3} alt="" className='w-[45rem] h-[30rem] ' />
                </div>
                <div className='m-[2rem]'>
                    <img src={DesignGallary7} alt="" className='w-[26rem] h-[20rem] absolute top-[-1rem] ' />
                </div>
            </div>

        </div>
    )
}

export default DesignBottom
