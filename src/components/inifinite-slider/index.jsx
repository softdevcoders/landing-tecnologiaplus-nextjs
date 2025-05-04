import ImageCloudinary from '../ui/image-cloudinary';
import styles from './infinite-slider.module.scss';

export default function InfiniteSlider({ logos }) {
  const duplicated = [...logos, ...logos];

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {duplicated.map((logo, idx) => (
          <div key={idx} className={styles.slide}>
            <img
              src={logo.src}
              alt={logo.alt}
              width={300}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
