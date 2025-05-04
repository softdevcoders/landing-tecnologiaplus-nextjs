'use client';

import { useState } from "react";
import SliderHeroItem from "./SliderHeroItem";
import ArrowLeft from "@/components/ui/icons/arrow-left";
import ArrowRight from "@/components/ui/icons/arrow-right";

export default function SliderHero({ styles, items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    const total = items.length;
    setActiveIndex((index + total) % total);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slides} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
          >
            <SliderHeroItem {...item} />
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
        {items.map((_, index) => (
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
