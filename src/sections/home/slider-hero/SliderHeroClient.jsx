'use client';

import { useState } from "react";
import SliderHeroItem from "./SliderHeroItem";

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
        &#10094;
      </button>
      <button className={styles.next} onClick={() => goToSlide(activeIndex + 1)}>
        &#10095;
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
