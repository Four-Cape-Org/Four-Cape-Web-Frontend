// import React from 'react'
// import Vector from '../../assets/img/portfolio/Vector.png'
// import YoutubeThumbnail1 from '../../assets/img/portfolio/youtubeThumbnail 1.png'

// const Youtube = () => {
//   return (
//     <div>
//         <div className='flex flex-row ml-[10rem] mt-[3rem] mb-[2rem]'>
//             <img src={Vector} alt="vector" className='w-[70px] h-[50px] m-[2rem]'/>
//             <div className='w-[25rem] h-[5rem] mt-9'>
//                 <h2 className='text-3xl p-[5px] font-primary font-semibold'>Youtube Edits</h2>
//             </div>
//         </div>

//         <div className='flex flex-row justify-around'>
//             <div className='w-[42rem] ml-[3rem] object-contain'>
//                 <img src={YoutubeThumbnail1} alt="" />
//             </div>

//             <div className='flex flex-col'>
//                 <div className='text-6xl  mt-[2rem] mb-[1rem] w-[30rem] h-[10rem] p-[1rem]'>
//                     <h1 className='font-secondary font-bold mb-[1.5rem]'>YouTube Title | </h1>
//                     <h1 className='font-secondary font-bold '>Four Cape</h1>
//                 </div>
//                 <div className='w-[25rem] h-[10rem] mt-[2rem] font-normal p-[1rem]'>
//                     <p className='font-primary text-[1.2rem]'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                 </div>
//             </div>
//         </div>

//         <div className='flex flex-row  mt-[5rem] ml-[7rem]'>
//             <div className='flex flex-col '>
//                 <div className='text-6xl  mt-[2rem] mb-[1rem] w-[30rem] h-[10rem] p-[1rem]'>
//                     <h1 className='font-secondary font-bold mb-[1.5rem]'>YouTube Title | </h1>
//                     <h1 className='font-secondary font-bold '>Four Cape</h1>
//                 </div>
//                 <div className='w-[25rem] h-[10rem] mt-[2rem] font-normal p-[1rem]'>
//                     <p className='font-primary text-[1.2rem]'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//                 </div>
//             </div>

//             <div className='w-[42rem]  ml-[6rem] object-contain'>
//                 <img src={YoutubeThumbnail1} alt="" />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Youtube








import React from 'react'
import Vector from '../../assets/img/portfolio/youtube/Vector.png'
import YoutubeThumbnail1 from '../../assets/img/portfolio/youtube/youtubeThumbnail1.png'
import YoutubeThumbnail2 from '../../assets/img/portfolio/youtube/youtubeThumbnail2.png'

const Youtube = () => {
    return (
        <div>
            <div className='flex flex-row ml-[7rem] mt-[3rem] mb-[2rem]'>
                <img src={Vector} alt="vector" className='w-[70px] h-[50px] m-[2rem]' />
                <div className='w-[25rem] h-[5rem] mt-9'>
                    <h2 className='text-3xl p-[4px] font-primary font-semibold'>Youtube Edits</h2>
                </div>
            </div>

            <div className='flex flex-row  m-[6rem] mt-[10px]'>
                <img src={YoutubeThumbnail1} alt="" className='w-[47rem]' />
                <div className='flex flex-col m-[4rem] mt-[1rem] ml-[5rem]'>
                    <h2 className='font-secondary text-[4rem] font-semibold'>Website Title | Four Cape</h2>
                    <p className='font-primary text-[1.4rem] mt-[3rem] text-text-color'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <div className='flex flex-row  m-[6rem]'>
                <div className='flex flex-col m-[4rem] mt-[1rem] ml-[3rem]'>
                    <h2 className='font-secondary text-[4rem] font-semibold'>Website Title | Four Cape</h2>
                    <p className='font-primary text-[1.4rem] mt-[3rem] text-text-color'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <img src={YoutubeThumbnail2} alt="" className='w-[47rem]' />
            </div>
        </div>
    )
}

export default Youtube