import LandingHeroPortadaV2 from "@/components/landing-hero-portada-v2";
import { routes } from "@/config/routes";

const DispensadorTiquetesHeroSection = () => {
  const values = {
    title: "Dispensador de tickets",
    description: "Adiós a las filas. Orden y comodidad en cada turno.",
    image: {
      mobile: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp,q_80/website-v2/images/landings/dispensador-de-tickets/landings/gx6ul5i1mmjqdmi6rqvf",
      desktop: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,q_80,f_webp/website-v2/images/landings/dispensador-de-tickets/landings/vqnlsnau4j8n1jdfe3wq",
      alt: "Imagen de Dispensador de Tickets TurnoExpress - Tecnología Plus",
    },
    button: {
      text: "Ver más",
      href: routes.landings.dispensadorDeTickets.children.dispensadorDeTicketsCaracol.url,
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

export default DispensadorTiquetesHeroSection;