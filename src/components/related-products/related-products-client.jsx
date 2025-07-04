'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import style from './related-products.module.scss';
import ProductCard from './product-card';

export default function RelatedProductsCarousel({ products }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
    dragFree: false,
    watchDrag: true,
    breakpoints: {
      '(min-width: 1250px)': { 
        slidesToScroll: 3,
        containScroll: 'keepSnaps'
      },
      '(min-width: 868px)': { 
        slidesToScroll: 2,
        containScroll: 'keepSnaps'
      },
      '(max-width: 867px)': { 
        slidesToScroll: 1,
        containScroll: 'keepSnaps'
      }
    }
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [slidesInView, setSlidesInView] = useState(1);
  
  const calculateSlides = useCallback(() => {
    if (typeof window === 'undefined') return [];
    
    const totalProducts = products.length;
    let itemsPerSlide = 1;

    if (window.innerWidth >= 1250) {
      itemsPerSlide = 3;
    } else if (window.innerWidth >= 868) {
      itemsPerSlide = 2;
    }

    setSlidesInView(itemsPerSlide);
    const totalSlides = Math.ceil(totalProducts / itemsPerSlide);
    return Array.from({ length: totalSlides }, (_, i) => i);
  }, [products.length]);

  const [slideIndexes, setSlideIndexes] = useState([]);

  useEffect(() => {
    const updateSlides = () => {
      setSlideIndexes(calculateSlides());
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);

    return () => {
      window.removeEventListener('resize', updateSlides);
    };
  }, [calculateSlides]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index * slidesInView);
  }, [emblaApi, slidesInView]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(Math.floor(emblaApi.selectedScrollSnap() / slidesInView));
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi, slidesInView]);

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
    <div className={style.slider}>
      <div className={style.viewport} ref={emblaRef}>
        <div className={style.container}>
          {products.map((product, index) => (
            <div 
              key={index} 
              className={style.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${products.length}`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <button 
        className={style.prev} 
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous slide"
      >
        <span className={style.prev__icon} />
      </button>
      <button 
        className={style.next} 
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next slide"
      >
        <span className={style.next__icon} />
      </button>
      <div 
        className={style.bullets}
        role="tablist"
        aria-label="Choose slide to display"
      >
        {slideIndexes.map((index) => (
          <span
            key={index}
            role="tab"
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === selectedIndex}
            className={style.bullet}
            onClick={() => scrollTo(index)}
            data-selected={index === selectedIndex}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                scrollTo(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
} 