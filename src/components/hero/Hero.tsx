
import Img1 from "../../assets/blogs/img1.jpeg";
import Img2 from "../../assets/blogs/img2.jpg";
import Img3 from "../../assets/blogs/img3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Img4 from "../../assets/blogs/img4.jpeg";
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
  return (
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
