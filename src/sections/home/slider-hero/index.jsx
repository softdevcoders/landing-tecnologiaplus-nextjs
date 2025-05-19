import { landingHeros } from "@/config/landing-heros";
import styles from "./slider-hero.module.scss";
import SliderHeroClient from "./slider-hero-client";
import Image from "next/image";

export default function SliderHero() {
  const { background, backgroundMobilePortada, ...restLandings } = landingHeros

  return (
    <div className={styles.slider__container}>
      <Image 
        {...landingHeros.background.images}
        className={styles.slider__background}
        src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_${landingHeros.background.images.width}/${landingHeros.background.images.src}`}
      />
      <SliderHeroClient items={restLandings} styles={styles} />
    </div>
  );
}