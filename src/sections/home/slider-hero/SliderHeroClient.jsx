'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderHeroItem from "./SliderHeroItem";

export default function SliderHeroClient({ items, styles }) {
  return (
    <Swiper
      className={styles.swiper__root}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={false}
      pagination={{ clickable: true }}
      navigation={true}
      loop={false}
      modules={[Navigation, Pagination, Autoplay]}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <SliderHeroItem {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
