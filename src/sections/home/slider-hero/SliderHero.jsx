import styles from "./SliderHero.module.scss";
import { SLIDER_HERO_ITEMS } from "./slides";
import SliderHeroClient from "./SliderHeroClient";
import ImageCloudinary from "@/components/ui/image-cloudinary";

export default function SliderHero() {
  return (
    <div className={styles.slider__container}>
       <ImageCloudinary
        src="https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349921/jlxxsnlercoj0nihz4am_udppso.webp"
        alt="Background Image for Slider Hero"
        width={200}
        height={200}
        priority
        fetchPriority="high"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
        }}
      />
      <SliderHeroClient items={SLIDER_HERO_ITEMS} styles={styles} />
    </div>
  );
}