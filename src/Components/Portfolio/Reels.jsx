// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import shortsThumbnail1 from '../../assets/img/portfolio/shortsThumbail1.png';
// import shortsThumbnail2 from '../../assets/img/portfolio/shortsThumbail2.png';
// import shortsThumbnail3 from '../../assets/img/portfolio/shortsThumbail3.png';

// const Reels = () => {
//     const carouselContainerStyle = {
//         maxWidth: '60rem', // Set a maximum width for the carousel
//         margin: '0 auto', // Center the carousel on the page
//     };

//     const carouselItemStyle = {
//         width: '20rem', // Set the width of each carousel item
//         margin: '0 auto', // Center the item within the carousel
//     };

//     return (
//         <div style={carouselContainerStyle}>
//             <Carousel infiniteLoop={true} showThumbs={false} showStatus={false} swipeable={true}>
//                 <div style={carouselItemStyle}>
//                     <img src={shortsThumbnail1} alt="Shorts Thumbnail 1" />
//                 </div>
//                 <div style={carouselItemStyle}>
//                     <img src={shortsThumbnail2} alt="Shorts Thumbnail 2" />
//                 </div>
//                 <div style={carouselItemStyle}>
//                     <img src={shortsThumbnail3} alt="Shorts Thumbnail 3" />
//                 </div>
//                 {/* Repeat the items for an infinite loop */}
//                 <div style={carouselItemStyle}>
//                     <img src={shortsThumbnail1} alt="Shorts Thumbnail 1" />
//                 </div>
//                 <div style={carouselItemStyle}>
//                     <img src={shortsThumbnail2} alt="Shorts Thumbnail 2" />
//                 </div>
//                 <div style={carouselItemStyle}>
//                     <img src={shortsThumbnail3} alt="Shorts Thumbnail 3" />
//                 </div>
//             </Carousel>
//         </div>
//     );
// }

// export default Reels;


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import shortsThumbnail1 from '../../assets/img/portfolio/shortsThumbail1.png';
import shortsThumbnail2 from '../../assets/img/portfolio/shortsThumbail2.png';
import shortsThumbnail3 from '../../assets/img/portfolio/shortsThumbail3.png';

import reelsIcon from '../../assets/img/portfolio/reelsIcon.png';

const Reels = () => {
    return (
        <>
            <h1 className='font-secondary text-center lg:text-[3.5rem] md:text-[3rem] sm:text-[2.8rem] text-[2.5rem] mx-5 underline font-semibold '>Play through our Amazing Edits</h1>
        
            <div className='flex flex-row justify-start items-center sm:mx-[3rem] sm:ml-[3rem] ml-[3rem] my-[3rem] '>
                <img src={reelsIcon} alt="reelsIcon" className='w-[40px] h-[40px]' />
                <h2 className='w-[15rem] h-[3rem] p-[11px] mt-[5px] font-primary font-semibold sm:text-xl text-[20px]'>Reels and Shorts</h2>
            </div>
          
                <Swiper
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        340: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                        },
                        700: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                        },
                    }}
                    style={{
                        "--swiper-theme-color": "#F82586"
                    }}
                    pagination={{clickable: true}}
                >
                <SwiperSlide>
                    <img src={shortsThumbnail1} alt="Shorts Thumbnail 1" className='w-[20rem] mb-[2rem] ml-[3rem]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={shortsThumbnail2} alt="Shorts Thumbnail 2" className='w-[19.2rem] mb-[2rem] ml-[3rem]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={shortsThumbnail3} alt="Shorts Thumbnail 3" className='w-[20rem] mb-[2rem] ml-[3rem]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={shortsThumbnail1} alt="Shorts Thumbnail 1" className='w-[20rem] mb-[2rem] ml-[3rem]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={shortsThumbnail2} alt="Shorts Thumbnail 2" className='w-[19.2rem] mb-[2rem] ml-[3rem]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={shortsThumbnail3} alt="Shorts Thumbnail 3" className='w-[20rem] mb-[2rem] ml-[3rem] mr-[15rem]' />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Reels;
