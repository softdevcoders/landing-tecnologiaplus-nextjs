'use client';

import { useState } from "react";
import ArrowLeft from "@/components/ui/icons/arrow-left";
import ArrowRight from "@/components/ui/icons/arrow-right";
import LandingHero from "@/components/landing-hero";

export default function SliderHero({ styles, items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    const total = Object.keys(items).length;
    setActiveIndex((index + total) % total);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slides} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {Object.keys(items).map((key, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
          >
            <LandingHero 
              {...({
                ...items[key],
                title: items[key].informationSliderLanding.title,
                subTitle: items[key].informationSliderLanding.subTitle,
                description: items[key].informationSliderLanding.description,
                showBackground: false,
              })} 
            />
          </div>
        ))}
      </div>

      <button className={styles.prev} onClick={() => goToSlide(activeIndex - 1)}>
        <ArrowLeft />
      </button>
      <button className={styles.next} onClick={() => goToSlide(activeIndex + 1)}>
        <ArrowRight />
      </button>

      <div className={styles.bullets}>
        {Object.keys(items).map((_, index) => (
          <span
            key={index}
            className={`${styles.bullet} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
