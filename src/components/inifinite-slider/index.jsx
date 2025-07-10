'use client';
import styles from './infinite-slider.module.scss';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function InfiniteSlider({ logos, speed = 40 }) {
  // Estado para controlar los logos duplicados (solo en cliente)
  const [displayedLogos, setDisplayedLogos] = useState(logos);
  
  // Referencia al track que se anima
  const trackRef = useRef(null);

  // Efecto para duplicar los logos solo en el cliente después del primer render
  useEffect(() => {
    setDisplayedLogos([...logos, ...logos, ...logos]);
  }, [logos]);

  // Ajustamos la duración de la animación en función del tamaño del track y viewport
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateDuration = () => {
      const trackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      // Ajustamos la velocidad según el viewport
      let adjustedSpeed = speed;
      if (viewportWidth >= 1024) {
        adjustedSpeed = speed * 1.2; // 20% más rápido en desktop
      } else if (viewportWidth >= 768) {
        adjustedSpeed = speed * 1.1; // 10% más rápido en tablet
      }

      // Se anima hasta -50% del ancho total
      const travelDistance = trackWidth * 0.5; // px
      const duration = travelDistance / adjustedSpeed; // segundos
      track.style.setProperty('--slider-duration', `${duration}s`);
    };

    updateDuration();

    // Observamos cambios de tamaño del track y cambios de viewport
    const resizeObserver = new ResizeObserver(updateDuration);
    resizeObserver.observe(track);
    window.addEventListener('resize', updateDuration);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDuration);
    };
  }, [displayedLogos, speed]);

  return (
    <section className={styles.infiniteSlider} ref={trackRef}>
      {displayedLogos.map((logo, idx) => (
        <Image
          key={`${logo.src}-${idx}`}
          src={logo.src}
          alt={logo.alt}
          width={130}
          height={50}
          loading="eager"
          priority={idx < logos.length}
        />
      ))}
    </section>
  );
}
