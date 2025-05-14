import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function DispensadorTiquetesHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.dispensadorDeTickets,
        title: landingHeros.dispensadorDeTickets.informationPortadas.title,
        subTitle: landingHeros.dispensadorDeTickets.informationPortadas.subTitle,
        description: landingHeros.dispensadorDeTickets.informationPortadas.description,
        images: landingHeros.dispensadorDeTickets.informationPortadas.images,
        button: null
      })} 
    />
  );
}

export default DispensadorTiquetesHeroSection;
