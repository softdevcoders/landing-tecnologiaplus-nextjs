import LandingHeroPortadaV2 from "@/components/landing-hero-portada-v2";

const LocalizadoresHeroSection = () => {
  const values = {
    title: "Localizadores para restaurantes",
    description: "Tus clientes disfrutan el tiempo sin temor de perder el turno.",
    image: {
      mobile: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/1_zjvtlb",
      desktop: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/1_zjvtlb",
      alt: "Imagen de Localizadores para Restaurantes - Tecnología Plus",
    },
  };

  return (
    <LandingHeroPortadaV2 values={values} />
  )
};

export default LocalizadoresHeroSection;
