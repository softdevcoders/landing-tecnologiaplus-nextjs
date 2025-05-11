import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function TurnoMasterHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.sistemasDeTurnosTurnomaster,
        title: landingHeros.sistemasDeTurnosTurnomaster.informationSingleLanding.title,
        subTitle: landingHeros.sistemasDeTurnosTurnomaster.informationSingleLanding.subTitle,
        description: landingHeros.sistemasDeTurnosTurnomaster.informationSingleLanding.description,
        button: null
      })} 
    />
  );
}

export default TurnoMasterHeroSection;
