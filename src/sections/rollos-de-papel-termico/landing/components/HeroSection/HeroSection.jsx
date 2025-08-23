import LandingHeroPortadaV2 from "@/components/landing-hero-portada-v2";
import { routes } from "@/config/routes";

const RollosDePapelTermicoHeroSection = () => { 
  const values = {
    title: "Rollos de papel térmico",
    description: "Perfectos para tickets, facturas y más. ¡Somos fabricantes!",
    image: {
      mobile: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
      desktop: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/website-v2/images/landings/rollos-de-papel-termico/landings/qfa0blen1npshqa6cny6",
      alt: "Imagen de Rollos de Papel Térmico - Tecnología Plus",
    },
    button: {
      text: "Ver más",
      href: routes.landings.rollosDePapelTermico.children.rollosTermicos.url,
    },
  };

  return (
    <LandingHeroPortadaV2 values={values} />
  )
};

export default RollosDePapelTermicoHeroSection;