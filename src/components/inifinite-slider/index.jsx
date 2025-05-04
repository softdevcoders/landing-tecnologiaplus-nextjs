import ImageCloudinary from '../ui/image-cloudinary';
import styles from './infinite-slider.module.scss';

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
              width={300}
              height={300}
              sizes="(max-width: 640px) 80vw, 
              (max-width: 768px) 60vw, 
              (max-width: 1024px) 40vw, 
              (max-width: 1280px) 30vw, 
              25vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
