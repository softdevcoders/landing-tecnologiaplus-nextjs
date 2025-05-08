import LandingHero from "@/components/layout/landing-hero";
import { routes } from "@/config/routes";

function TurnosHeroSection() {
  return (
    <LandingHero
      title="Numeración clara y corte preciso"
      image={{
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744458412/Nueva_imagen_2x-8_xi5zmr.webp",
        alt: "Rollos de fichos para turnos imagen principal",
        image_text_column: {
          src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744463735/12-8_qjsewx.webp",
          alt: "Logo turnoExpress",
        }
      }}
      button={{
        text: "Ver más",
        href: routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url,
      }}
      description="Para agilizar la atención de turnos."
      priority={true}
      fetchPriority="high"
    />
  );
}

export default TurnosHeroSection;
