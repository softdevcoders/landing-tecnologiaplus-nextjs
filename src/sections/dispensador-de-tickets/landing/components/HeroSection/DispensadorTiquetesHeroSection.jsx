import LandingHero from "@/components/layout/landing-hero";
import { routes } from "@/config/routes";

function DispensadorTiquetesHeroSection() {
  return (
    <LandingHero
      title="Dispensador de tickets: Adiós a las filas"
      image={{
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738424725/Imagen_banner_2x-8_qd3lwx.webp",
        alt: "Rollos de fichos para turnos imagen principal",
        image_text_column: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744463735/12-8_qjsewx.webp",
          alt: "Logo turnoExpress",
        }
      }}
      button={{
        text: "Ver más",
        href: routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url,
      }}
      description="Orden y comodidad en cada turno."
      priority={true}
      fetchPriority="high"
    />
  );
}

export default DispensadorTiquetesHeroSection;
