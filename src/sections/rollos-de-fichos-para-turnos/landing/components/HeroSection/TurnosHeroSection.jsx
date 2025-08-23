import LandingHeroPortadaV2 from "@/components/landing-hero-portada-v2";
import { routes } from "@/config/routes";

const RollosDeFichosParaTurnosHeroSection = () => {
  const values = {
    title: "Rollos de fichos para turnos",
    description: "Numeración clara para agilizar la atención de turnos.",
    image: {
      mobile: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/rollos-de-fichos-para-turnos/landings/w2wxhksiyspmadxwm8v9",
      desktop: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,f_webp,q_80/website-v2/images/landings/rollos-de-fichos-para-turnos/landings/tojt9jjjomzd1bhpdj81",
      alt: "Imagen de Rollos de fichos para turnos TurnoExpress - Tecnología Plus",
    },
    button: {
      text: "Ver más",
      href: routes.landings.rollosDeFichosParaTurnos.children.rollosDeTurnos.url,
    },
    brandImage: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_500,f_webp/v1744463735/12-8_qjsewx",
      alt: "Logo Turno Express",
      width: 300,
      height: 65,
    }
  };

  return (
    <LandingHeroPortadaV2 values={values} />
  )
};

export default RollosDeFichosParaTurnosHeroSection;