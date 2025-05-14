import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function EnfermeriaHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.llamadoDeEnfermeriaCuidamaster,
        title: landingHeros.llamadoDeEnfermeriaCuidamaster.informationPortadas.title,
        subTitle: landingHeros.llamadoDeEnfermeriaCuidamaster.informationPortadas.subTitle,
        description: landingHeros.llamadoDeEnfermeriaCuidamaster.informationPortadas.description,
        images: landingHeros.llamadoDeEnfermeriaCuidamaster.informationPortadas.images,
        button: null
      })} 
    />
  );
}

export default EnfermeriaHeroSection;
