import { landingHeros } from "@/config/landing-heros";
import HeroBackground from "./hero-background";
import styles from "./styles/hero-inicio.module.scss";

export default function HeroInicio() {
  return (
    <HeroBackground>
      <SliderHeroClient items={restLandings} styles={styles} />
    </HeroBackground>
  );
}