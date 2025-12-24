import Heading from "../../ui/Heading";
import CustomButton from "../../ui/CustomButton";
import { customerReviews } from "../../../data/data";
import ReviewCard from "../../common/customer-review/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const CustomerReviews = () => {
  return (
    <div className="w-full bg-[#FBF8F2]">
      <div className="container mx-auto px-5 py-16 space-y-10">
        <div className="space-y-4">
          <Heading className="text-center">Customer Review</Heading>
          <p className="text-[#484548] text-center">
            Honest Feedback from People Who Trust Tanishq Pharma to Improve
            Their Health and Confidence.
          </p>
        </div>

        <Swiper
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          spaceBetween={10}
        >
          {customerReviews.map((item, index) => (
            <SwiperSlide key={index}>
              <ReviewCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center">
          <CustomButton type="primary">View All Reviews</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
