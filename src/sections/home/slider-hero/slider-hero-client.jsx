'use client';

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import ArrowLeft from "@/components/ui/icons/arrow-left";
import ArrowRight from "@/components/ui/icons/arrow-right";
import LandingHero from "@/components/landing-hero";

export default function SliderHero({ styles, items }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    duration: 30,
    dragFree: false,
    containScroll: 'trimSnaps',
    skipSnaps: false,
    inViewThreshold: 0.7,
    align: 'center',
    watchDrag: true,
    speed: 10,
    slidesToScroll: 1,
    breakpoints: {
      '(max-width: 768px)': { 
        dragFree: false,
        containScroll: 'keepSnaps',
        speed: 15,
        skipSnaps: false,
        watchDrag: true
      }
    }
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.slider}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {Object.keys(items).map((key, index) => (
            <div 
              key={index} 
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${Object.keys(items).length}`}
            >
              <LandingHero 
                {...({
                  ...items[key].informationHome,
                  title: items[key].informationHome.title,
                })} 
              />
            </div>
          ))}
        </div>
      </div>

      <button 
        className={styles.prev} 
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
      >
        <ArrowLeft />
      </button>
      <button 
        className={styles.next} 
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next slide"
      >
        <ArrowRight />
      </button>

      <div 
        className={styles.bullets}
        role="tablist"
        aria-label="Choose slide to display"
      >
        {Object.keys(items).map((_, index) => (
          <span
            key={index}
            role="tab"
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === selectedIndex}
            className={styles.bullet}
            onClick={() => scrollTo(index)}
            data-selected={index === selectedIndex}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollTo(index);
              }
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}
