// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

import bgimg1 from "../assets/team/img1.png";
import bgimg2 from "../assets/team/img2.png";
import bgimg3 from "../assets/team/img3.png";

export default function Carousel() {
  return (
    <div className="container px-6 py-10 mx-auto -z-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="Improving The Government payment experience"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="The evolution of real-time payments: reimagining account-to-account transfers"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="re-imagining acquirirn : How sould bank acquires respond to the rapidly evolving acquirirng market"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
