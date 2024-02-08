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
        <div>

            <div>
                <div className='w-[10rem] text-2xl font-semibold p-[5px] m-[6rem] mb-[2rem]'>
                    <p className='text-red'>OUR EDITS</p>
                </div>

                <div className=' text-start text-[5.5rem] underline font-semibold p-[5px] '>
                    <p className='font-secondary text-center'>Play through our Amazing Edits</p>
                </div>
            </div>

            <div className='flex flex-row m-[3rem] ml-[5rem]'>
                <img src={reelsIcon} alt="reelsIcon" className='w-[60px]' />
                <div className='w-[15rem] h-[3rem] p-[11px] mt-[5px] font-primary font-semibold text-xl'>
                    <h2>Reels and Shorts</h2>
                </div>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
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
        </div>
    );
};

export default Reels;
