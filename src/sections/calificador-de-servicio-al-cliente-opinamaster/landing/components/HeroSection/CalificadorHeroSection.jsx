import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function CalificadorHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.calificadorDeServicioAlClienteOpinamaster,
        title: landingHeros.calificadorDeServicioAlClienteOpinamaster.informationSingleLanding.title,
        subTitle: landingHeros.calificadorDeServicioAlClienteOpinamaster.informationSingleLanding.subTitle,
        description: landingHeros.calificadorDeServicioAlClienteOpinamaster.informationSingleLanding.description,
      })} 
    />
  );
}

export default CalificadorHeroSection;
