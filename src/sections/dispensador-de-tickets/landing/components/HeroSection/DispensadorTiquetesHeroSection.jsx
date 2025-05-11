import LandingHero from "@/components/landing-hero";
import { landingHeros } from "@/config/landing-heros";

function DispensadorTiquetesHeroSection() {
  return (
    <LandingHero 
      {...({
        ...landingHeros.dispensadorDeTickets,
        title: landingHeros.dispensadorDeTickets.informationSingleLanding.title,
        subTitle: landingHeros.dispensadorDeTickets.informationSingleLanding.subTitle,
        description: landingHeros.dispensadorDeTickets.informationSingleLanding.description,
        button: null
      })} 
    />
  );
}

export default DispensadorTiquetesHeroSection;
