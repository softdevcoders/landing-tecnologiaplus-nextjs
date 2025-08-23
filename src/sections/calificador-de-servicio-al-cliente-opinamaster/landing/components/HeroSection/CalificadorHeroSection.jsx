import LandingHeroPortadaV2 from "@/components/landing-hero-portada-v2";

const CalificadorHeroSection = () => {
  const values = {
    title: "Calificador de servicio al cliente",
    description: "Para crecer con la voz de tus clientes.",
    image: {
      mobile: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp/website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/zmdy9nvzeoetrit2w95n",
      desktop: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,q_80,f_webp/website-v2/images/landings/calificador-de-servicio-al-cliente-opinamaster/landings/aih7y6glfth4vthhkytk",
      alt: "Imagen de Calificador de servicio al cliente - Tecnología Plus",
    },
  };

  return (
    <LandingHeroPortadaV2 values={values} />
  )
};

export default CalificadorHeroSection;