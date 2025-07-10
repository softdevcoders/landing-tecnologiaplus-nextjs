'use client';
import styles from './infinite-slider.module.scss';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function InfiniteSlider({ logos, speed = 60 }) {
  // Triplicamos los logos para asegurar una transición más suave
  const duplicated = [...logos, ...logos];

  // Referencia al track que se anima
  const trackRef = useRef(null);

  // Ajustamos la duración de la animación en función del tamaño del track
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Velocidad deseada en píxeles por segundo (recibida por prop `speed`)
    const updateDuration = () => {
      const trackWidth = track.scrollWidth;
      // Se anima hasta -50% del ancho total
      const travelDistance = trackWidth * 0.5; // px
      const duration = travelDistance / speed; // segundos
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
  }, [logos, speed]);

  return (
    <section className={styles.infiniteSlider} ref={trackRef}>
      {duplicated.map((logo, idx) => (
        <Image
          key={`${logo.src}-${idx}`}
          src={logo.src}
          alt={logo.alt}
          width={130}
          height={50}
          loading="eager"
        />
      ))}
    </section>
  );
}
