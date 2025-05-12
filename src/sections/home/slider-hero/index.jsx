import { landingHeros } from "@/config/landing-heros";
import styles from "./slider-hero.module.scss";
import SliderHeroClient from "./slider-hero-client";
import ResponsiveImage from "@/components/ui/responsive-image";

export default function SliderHero() {
  const { background, ...restLandings } = landingHeros

  return (
    <div className={styles.slider__container}>
      <ResponsiveImage 
        className={styles.slider__background} 
        image={background.image}
      />
      <SliderHeroClient items={restLandings} styles={styles} />
    </div>
  );
}