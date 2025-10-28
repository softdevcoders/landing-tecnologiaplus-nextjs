import FichaTecnica from "@/components/ver-mas-productos/ficha-tecnica/FichaTecnica";

const FichaTecnicaSection = () => {
  const fichaTecnica = [
    {
      imagen: {
        src: "v1761664206/ficha-tecnica-localizadores-cir-resistente-al-agua-1",  
        alt: "Función de vibración, sonido y luz del localizador para restaurantes autoservicio CIR-C2 para alertar al cliente.",
        title: "Localizador para restaurantes autoservicio CIR-C2 con vibración, sonido y luz de alerta.",
      },
      descripcion: "Vibra, suena y alumbra",
    },
    {
      imagen: {
        src: "v1761664207/ficha-tecnica-localizadores-cir-resistente-al-agua-2",
        alt: "Localizador para restaurantes autoservicio CIR-C2 con largo alcance de más de 200 metros a la redonda.",
        title: "Localizador para restaurantes autoservicio CIR-C2 con alcance superior a 200 metros.",
      },
      descripcion: "Largo Alcance, más de 200 metros a la redonda",
    },
    {
      imagen: {
        src: "v1761664207/ficha-tecnica-localizadores-cir-resistente-al-agua-3",
        alt: "Localizador para restaurantes autoservicio CIR-C2 fabricado en material termoplástico resistente a golpes.",
        title: "Localizador para restaurantes autoservicio CIR-C2 de material termoplástico resistente.",
      },
      descripcion: "Material: Termoplástico (resistente a golpes)",
    },
    {
      imagen: {
        src: "v1761664205/ficha-tecnica-localizadores-cir-resistente-al-agua-4",  
        alt: "Base del localizador para restaurantes autoservicio CIR-C2 con capacidad de hasta 20 dispositivos y opción de expansión.",
        title: "Localizador para restaurantes autoservicio CIR-C2 con capacidad de 20 unidades.",
      },
      descripcion: "Capacidad: La cantidad es según la necesidad. Pueden tener varias bases de recarga.",
    },
    {
      imagen: {
        src: "v1761664205/ficha-tecnica-localizadores-cir-resistente-al-agua-5",  
        alt: "Localizador para restaurantes autoservicio CIR-C2 ideal para áreas de espera y zonas de comidas.",
        title: "Usos del localizador para restaurantes autoservicio CIR-C2 en áreas de comida y espera.",
      },
      descripcion: "Tipos de uso: Zonas húmedas o cerca de piscinas.", 
    },
    {
      imagen: {
        src: "v1761664205/ficha-tecnica-localizadores-cir-resistente-al-agua-6",  
        alt: "Localizador para restaurantes autoservicio CIR-C2 con requerimiento de conexión eléctrica para su funcionamiento.",
        title: "Localizador para restaurantes autoservicio CIR-C2 con conexión eléctrica.",
      },
      descripcion: "Requerimiento: Conexión eléctrica",
    },
    {
      imagen: {
        src: "v1761664205/ficha-tecnica-localizadores-cir-resistente-al-agua-7",  
        alt: "Localizador para restaurantes autoservicio CIR-C2 con requerimiento de conexión eléctrica para su funcionamiento.",
        title: "Localizador para restaurantes autoservicio CIR-C2 con conexión eléctrica.",
      },
      descripcion: "Duración de la batería: Más de 3 horas por fuera de la base de recarga.",
    },
    {
      imagen: {
        src: "v1761664204/ficha-tecnica-localizadores-cir-resistente-al-agua-8",  
        alt: "Localizador para restaurantes autoservicio CIR-C2 con requerimiento de conexión eléctrica para su funcionamiento.",
        title: "Localizador para restaurantes autoservicio CIR-C2 con conexión eléctrica.",
      },
      descripcion: "Marca",
    },
  ];
  
  return <FichaTecnica
    fichaTecnica={fichaTecnica}
    title="Ficha técnica del localizador de clientes CIR Resistentes al Agua"
    gridColumns={4}
  />;
};

export default FichaTecnicaSection;