'use client';
import styles from './infinite-slider.module.scss';
import { useEffect, useRef, useMemo } from 'react';

export default function InfiniteSlider({ logos, speed = 60 }) {
  // Duplicamos los logos múltiples veces para asegurar que haya suficiente contenido
  // en pantallas grandes. Duplicamos al menos 4 veces para pantallas grandes.
  const duplicated = useMemo(() => {
    const copies = Math.max(4, Math.ceil(8 / logos.length)); // Mínimo 4 copias, o más si hay pocos logos
    return Array(copies).fill(logos).flat();
  }, [logos]);

  // Referencia al track que se anima
  const trackRef = useRef(null);

  // Ajustamos la duración de la animación en función del tamaño del track
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Velocidad deseada en píxeles por segundo (recibida por prop `speed`)
    const updateDuration = () => {
      const trackWidth = track.scrollWidth;
      // Se anima hasta -50% del ancho total (mitad del track duplicado)
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
        <img
          key={`${logo.src}-${idx}`}
          src={logo.src}
          alt={logo.alt}
          {...logo.title && { title: logo.title }}
          width={130}
          height={50}
          loading="eager"
          priority={`${idx < logos.length}`}
        />
      ))}
    </section>
  );
}
