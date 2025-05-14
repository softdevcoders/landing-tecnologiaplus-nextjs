import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function EncuestaVirtualHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.encuestaVirtual,
        title: landingHeros.encuestaVirtual.informationPortadas.title,
        subTitle: landingHeros.encuestaVirtual.informationPortadas.subTitle,
        description: landingHeros.encuestaVirtual.informationPortadas.description,
        images: landingHeros.encuestaVirtual.informationPortadas.images,
        button: null
      })} 
    />
  );
}

export default EncuestaVirtualHeroSection;
