import React, { useState } from "react";
import Img1 from "../../assets/blogs/img1.jpeg";
import Img2 from "../../assets/blogs/img2.jpg";
import Img3 from "../../assets/blogs/img3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Img4 from "../../assets/blogs/img4.jpeg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
const Hero = () => {
  const slides = [
    {
      url: Img1,
      title: "Ceci est un titre qui sera limité par des pointiers",
    },
    {
      url: Img2,
      title: "Pacifique Molo ana enda uza kuku yake ana rudi nayo nyumbani",
    },
    {
      url: Img3,
      title: "Molo na Any bata lunga apa sasa ivi",
    },
    {
      url: Img4,
      title: "banande bana kuwaka bayuma sana",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    // <div className=" max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative group">
    //   <div
    //     style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    //     className=" w-full h-full rounded-2xl bg-center bg-cover duration-500 "
    //   ></div>
    //   <div
    //     className="absolute top-[45%] -translate-x-0  text-2xl rounded-full
    //    py-7 px-24 bg-black/20 text-white cursor-pointer"
    //   >
    //     <h1 className=" line-clamp-1 font-bold">
    //       How to grow business. How to grow your businessHow to grow business.
    //       How to grow your business.
    //     </h1>
    //   </div>
    //   <div
    //     className="absolute top-[70%] -translate-x-0 right-5 text-2xl rounded-full
    //    p-2 bg-black/20 text-white cursor-pointer"
    //   >
    //     <p>April 23, 2024</p>
    //   </div>
    //   <div
    //     className="absolute top-[70%] -translate-x-0 left-5 text-2xl rounded-full
    //    p-2 bg-black/20 text-white cursor-pointer"
    //   >
    //     <p className=" line-clamp-1">By Molo</p>
    //   </div>
    //   <div
    //     className="hidden group-hover:block absolute top-[50%] -translate-x-0 left-5 text-2xl rounded-full
    //    p-2 bg-black/20 text-white cursor-pointer"
    //   >
    //     <BsChevronCompactLeft onClick={prevSlide} size={30} />
    //   </div>
    //   <div
    //     className="hidden group-hover:block absolute top-[50%] -translate-x-0 left-5 text-2xl rounded-full
    //  p-2 bg-black/20 text-white cursor-pointer"
    //   >
    //     <BsChevronCompactLeft onClick={prevSlide} size={30} />
    //   </div>
    //   <div
    //     className="hidden group-hover:block absolute top-[50%] -translate-x-0 right-5 text-2xl rounded-full
    //  p-2 bg-black/20 text-white cursor-pointer"
    //   >
    //     <BsChevronCompactRight onClick={nextSlide} size={30} />
    //   </div>
    //   <div className=" flex top-4  justify-center py-2">
    //     {slides.map((slide, slideIndex) => (
    //       <div
    //         key={slideIndex}
    //         onClick={() => goToSlide(slideIndex)}
    //         className=" text-2xl cursor-pointer"
    //       >
    //         <RxDotFilled />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="h-[700px] w-full relative group">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
      
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slides?.map(({ url, title }: any, _: number) => (
          <SwiperSlide key={_}>
            <div
              className="blog__breadcrumb-item blog__breadcrumb-height blog__breadcrumb-overlay include-bg flex items-end"
              style={{ position: "relative", backgroundImage: `url(${url})` }}
            >
              <div className="container">
                <div className="col-xxl-8 col-xl-8 col-lg-10">
                  <div className="blog__breadcrumb-thumb"></div>
                  <div className="blog__breadcrumb-content">
                    <div className="blog__breadcrumb-tag">
                      <a href="#">Category</a>
                    </div>
                    <h3 className="blog__breadcrumb-title text-white">
                      <span className="text-white">{title}</span>
                    </h3>
                    <div className="blog__breadcrumb-meta">
                      <span>
                        <CiCalendar /> Date de publication
                      </span>
                      <span>
                        <LuUser /> Auteur
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
