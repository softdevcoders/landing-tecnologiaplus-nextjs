import LandingHeroPortadaV2 from "@/components/landing-hero-portada-v2";

const EnfermeriaHeroSection = () => {
  const values = {
    title: "Llamado de Enfermería",
    description: "Más cerca de tus pacientes. Facilita el contacto entre el paciente y personal de salud.",
    image: {
      mobile: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_600,f_webp/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/pp65ihdvnzxx3arig8yj",
      desktop: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_1200,q_80,f_webp/website-v2/images/landings/llamado-de-enfermeria-cuidamaster/landings/qmzlqnbjn5pmn2q4hmhd",
      alt: "Imagen de Llamado de Enfermería CuidaMaster - Tecnología Plus",
    },
    brandImage: {
      src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/w_500,f_webp/v1744462125/Logo_CuidaMaster_4x-8_cn4z4h",
      alt: "Logo CuidaMaster",
      width: 300,
      height: 65,
    }
  };

  return (
    <LandingHeroPortadaV2 values={values} />
  )
};

export default EnfermeriaHeroSection;