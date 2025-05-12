import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function EnfermeriaHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.llamadoDeEnfermeriaCuidamaster,
        title: landingHeros.llamadoDeEnfermeriaCuidamaster.informationSingleLanding.title,
        subTitle: landingHeros.llamadoDeEnfermeriaCuidamaster.informationSingleLanding.subTitle,
        description: landingHeros.llamadoDeEnfermeriaCuidamaster.informationSingleLanding.description,
        button: null
      })} 
    />
  );
}

export default EnfermeriaHeroSection;
