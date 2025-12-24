import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const bannerSlides = [
  "Banner_1.png",
  "Banner_2.png",
  "Banner_3.png",
  "Banner_1.png",
  "Banner_2.png",
  "Banner_3.png",
];

const About = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-5 pb-16 space-y-10">
        <div className="relative px-5">
          <Swiper
            loop={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              //   1280: { slidesPerView: 4 },
            }}
            spaceBetween={10}
          >
            {bannerSlides.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item}
                  alt={item.split(".")[0]}
                  key={index}
                  className="w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#DBDBDB] p-3 rounded-full">
            <FaChevronLeft />
          </button>

          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#DBDBDB] p-3 rounded-full">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
