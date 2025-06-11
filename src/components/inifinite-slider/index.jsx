import Image from 'next/image';
import styles from './infinite-slider.module.scss';

export default function InfiniteSlider({ logos }) {
  // Triplicamos los logos para asegurar una transición más suave
  const duplicated = [...logos, ...logos, ...logos];

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {duplicated.map((logo, idx) => (
          <div key={`${logo.src}-${idx}`} className={styles.slide}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={130}
              height={50}
              priority={idx < logos.length}
              style={{
                objectFit: 'contain',
                width: '130px',
                height: '50px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
