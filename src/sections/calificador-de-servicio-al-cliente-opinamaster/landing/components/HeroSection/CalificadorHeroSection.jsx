import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function CalificadorHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.calificadorDeServicioAlClienteOpinamaster,
        title: landingHeros.calificadorDeServicioAlClienteOpinamaster.informationPortadas.title,
        subTitle: landingHeros.calificadorDeServicioAlClienteOpinamaster.informationPortadas.subTitle,
        description: landingHeros.calificadorDeServicioAlClienteOpinamaster.informationPortadas.description,
        images: landingHeros.calificadorDeServicioAlClienteOpinamaster.informationPortadas.images,
      })} 
    />
  );
}

export default CalificadorHeroSection;
