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
        fill
        priority
        fetchPriority="high"
        sizes="(min-width: 1024px) 25vw, 100px"
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