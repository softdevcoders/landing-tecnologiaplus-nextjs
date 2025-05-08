import styles from './infinite-slider.module.scss';
import ImageCloudinary from '../ui/image-cloudinary';

export default function InfiniteSlider({ logos }) {
  const duplicated = [...logos, ...logos];

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {duplicated.map((logo, idx) => (
          <div key={idx} className={styles.slide}>
            <ImageCloudinary
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={200}
            />
            {/* <img
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={150}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
