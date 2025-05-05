import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import styles from "./LogosCarousel.module.scss";

const LogosCarousel = ({ logos }) => {
  return (
    <div className={styles.logosCarousel}>
      <Swiper
        slidesPerView={10}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Autoplay]}
      >
        {logos.map((logo, index) => (
          <SwiperSlide className={styles.swiperSlide} key={index}>
            <img loading="lazy" src={logo.src} alt={logo.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogosCarousel;
