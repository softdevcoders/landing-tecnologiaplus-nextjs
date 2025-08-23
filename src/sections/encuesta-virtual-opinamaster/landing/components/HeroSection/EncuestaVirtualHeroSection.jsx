import LandingHeroPortadaV2 from "@/components/landing-hero-portada-v2";

const EncuestaVirtualHeroSection = () => {
  const values = {
    title: "Encuesta virtual",
    description: "Detecta los puntos fuertes y como mejorar tu negocio.",
    image: {
      mobile: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp/website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i",
      desktop: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,q_80,f_webp/website-v2/images/landings/encuesta-virtual-opinamaster/landings/oxf7yydvvrkv1n7pem0i",
      alt: "Imagen de Encuesta Virtual - Tecnología Plus",
    },
  };

  return (
    <LandingHeroPortadaV2 values={values} />
  )
};

export default EncuestaVirtualHeroSection;