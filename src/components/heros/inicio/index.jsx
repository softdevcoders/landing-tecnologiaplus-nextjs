import landingHeros from "@/data/heros";
import HeroBackground from "./hero-background";
import HeroSlider from "./hero-slider";
import HeroContent from "./hero-content";
import styles from "./styles/hero-inicio.module.scss";

export default function HeroInicio() {

  return (
    <HeroBackground>
      <HeroSlider items={landingHeros} >
        {Object.keys(landingHeros).map((key, index) => (
          <div 
            key={index} 
            className={styles.slide}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${Object.keys(landingHeros).length}`}
          >
            <HeroContent 
              content={landingHeros[key]?.inicio}
              isFirstSlide={index === 0}
            />
          </div>
        ))}
      </HeroSlider>
    </HeroBackground>
  );
}