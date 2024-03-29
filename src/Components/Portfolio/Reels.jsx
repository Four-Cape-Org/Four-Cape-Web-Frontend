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
                    // centeredSlides={true}
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        500:{
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 30,
                        },
                      }}
                    style={{
                        "--swiper-theme-color": "#F82586"
                    }}
                    pagination={{clickable: true}}
                >
                <SwiperSlide className='my-10'>
                    <img src={shortsThumbnail1} alt="Shorts Thumbnail 1" className='max-[500px]:w-[70%] max-[640px]:w-[85%] mx-auto' />
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <img src={shortsThumbnail2} alt="Shorts Thumbnail 2" className='max-[500px]:w-[70%] max-[640px]:w-[85%] mx-auto' />
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <img src={shortsThumbnail3} alt="Shorts Thumbnail 3" className='max-[500px]:w-[70%] max-[640px]:w-[85%] mx-auto' />
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <img src={shortsThumbnail1} alt="Shorts Thumbnail 1" className='max-[500px]:w-[70%] max-[640px]:w-[85%] mx-auto' />
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <img src={shortsThumbnail2} alt="Shorts Thumbnail 2" className='max-[500px]:w-[70%] max-[640px]:w-[85%] mx-auto' />
                </SwiperSlide>
                <SwiperSlide className='my-10'>
                    <img src={shortsThumbnail3} alt="Shorts Thumbnail 3" className='max-[500px]:w-[70%] max-[640px]:w-[85%] mx-auto' />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Reels;
