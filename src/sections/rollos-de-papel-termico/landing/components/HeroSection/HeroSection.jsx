import LandingHero from "@/components/layout/landing-hero";
import { routes } from "@/config/routes";

function HeroSection() {
  return (
    <LandingHero
      title="Rollos térmicos en variedad de tamaños. ¡Somos fabricantes!"
      image={{
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1738349924/tiuyfgrjwlmhj4gdzrtm_lybcwl.webp",
        alt: "Rollos para impresora térmica personalizados",
      }}
      button={{
        text: "Ver más",
        href: routes.landings.rollosDePapelTermico.children.rollosTermicos.url,
      }}
      description="Perfectos para tickets, facturas y más. ¡No busques más!"
      priority={true}
      fetchPriority="high"
    />
  );
}

export default HeroSection;
