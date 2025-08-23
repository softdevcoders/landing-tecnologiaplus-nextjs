import LandingHeroPortadaV2 from "@/components/landing-hero-portada-v2";

const LlamadorMeserosHeroSection = () => {
  const values = {
    title: "Llamador de Meseros",
    description: "Un solo toque evita largas esperas. Silencioso y de largo alcance.",
    image: {
      mobile: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_600,q_80/3_j5shgh",
      desktop: "https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_1200,q_80/3_j5shgh",
      alt: "Imagen de Llamador de Meseros - Tecnología Plus",
    },
  };

  return (
    <LandingHeroPortadaV2 values={values} />
  )
};

export default LlamadorMeserosHeroSection; 
