import Image from 'next/image';
import styles from './infinite-slider.module.scss';

export default function InfiniteSlider({ logos }) {
  const duplicated = [...logos, ...logos];

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {duplicated.map((logo, idx) => (
          <div key={idx} className={styles.slide}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={200}
              loading='eager'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
