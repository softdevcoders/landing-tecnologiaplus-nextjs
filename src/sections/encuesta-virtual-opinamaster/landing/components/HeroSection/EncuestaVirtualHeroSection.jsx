import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function EncuestaVirtualHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.encuestaVirtual,
        title: landingHeros.encuestaVirtual.informationSingleLanding.title,
        subTitle: landingHeros.encuestaVirtual.informationSingleLanding.subTitle,
        description: landingHeros.encuestaVirtual.informationSingleLanding.description,
        button: null
      })} 
    />
  );
}

export default EncuestaVirtualHeroSection;
