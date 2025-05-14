import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function TurnoMasterHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.sistemasDeTurnosTurnomaster,
        title: landingHeros.sistemasDeTurnosTurnomaster.informationPortadas.title,
        subTitle: landingHeros.sistemasDeTurnosTurnomaster.informationPortadas.subTitle,
        description: landingHeros.sistemasDeTurnosTurnomaster.informationPortadas.description,
        images: landingHeros.sistemasDeTurnosTurnomaster.informationPortadas.images,
        button: null
      })} 
    />
  );
}

export default TurnoMasterHeroSection;
