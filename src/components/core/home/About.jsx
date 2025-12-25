import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomButton from "../../ui/CustomButton";
import { useRef } from "react";

const reels = ["Reel.png", "Reel2.png", "Reel.png", "Reel2.png"];

const About = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-5 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left content */}
          <div className="space-y-2 p-5 flex flex-col justify-center">
            <div className="text-[48px] font-semibold text-[#430C41] flex gap-2 flex-wrap">
              <span>About</span>
              <span className="font-bold text-[#F9C255]">Tanish</span>
              <span>Products</span>
            </div>

            <p className="font-medium text-[#484548] pb-4">
              Tanishq Pharma delivers premium wellness solutions focused on
              enhancing your health, performance, and well-being.
            </p>

            <CustomButton>Join Our Community</CustomButton>
          </div>

          {/* Slider */}
          <div className="relative px-5">
            <Swiper
              loop
              modules={[Navigation]}
              slidesPerView={2}
              spaceBetween={10}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onSwiper={(swiper) => {
                // Delay execution until refs are attached
                setTimeout(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }, 50);
              }}
            >
              {reels.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item} alt={item} className="w-full h-auto" />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={prevRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#DBDBDB] p-3 rounded-full"
            >
              <FaChevronLeft />
            </button>

            <button
              ref={nextRef}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#DBDBDB] p-3 rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
