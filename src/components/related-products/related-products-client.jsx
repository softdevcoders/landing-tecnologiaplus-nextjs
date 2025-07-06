'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import style from './related-products.module.scss';
import ProductCard from './product-card';
import { ArrowLeft, ArrowRight } from '@/components/ui/icons';

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
            <div key={index} className={style.slide}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <button 
        onClick={scrollPrev}
        aria-label="Anterior producto"
      >
        <ArrowLeft />
      </button>
      <button 
        onClick={scrollNext}
        aria-label="Siguiente producto"
      >
        <ArrowRight />
      </button>
      <div
        role="tablist"
        aria-label="Selecciona el producto a mostrar"
      >
        {slideIndexes.map((index) => (
          <span
            key={index}
            role="tab"
            aria-label={`Ir al producto ${index + 1}`}
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