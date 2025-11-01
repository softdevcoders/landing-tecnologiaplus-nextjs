import FichaTecnica from "@/components/ver-mas-productos/ficha-tecnica/FichaTecnica";

const FichaTecnicaSection = () => {
  const fichaTecnica = [
    {
      imagen: {
        src: "v1761825177/vibra_suena_y_alumbra_cir",  
        alt: "Icono que muestra vibración, sonido y luz del avisador.",
        title: "Vibra, suena y alumbra.",
      },
      descripcion: "Vibra, suena y alumbra",
    },
    {
      imagen: {
        src: "v1761825177/largo_alcance_localizador_cir",
        alt: "Icono de señal que representa el largo alcance del localizador.",
        title: "Largo alcance de más de 200 metros.",
      },
      descripcion: "Largo Alcance, más de 200 metros a la redonda",
    },
    {
      imagen: {
        src: "v1761825179/material_termoplastico_resistente",
        alt: "Icono de resistencia que indica material termoplástico del dispositivo.",
        title: "Material termoplástico resistente a golpes.",
      },
      descripcion: "Material: Termoplástico (resistente a golpes)",
    },
    {
      imagen: {
        src: "v1761825178/capacidad_personalizable_localizador",  
        alt: "Icono que representa capacidad adaptable según necesidad.",
        title: "Capacidad personalizable.",
      },
      descripcion: "Capacidad: La cantidad es según la necesidad. Pueden tener varias bases de recarga.",
    },
    {
      imagen: {
        src: "v1761825178/uso_en_zonas_humedas_y_piscinas",  
        alt: "Icono de gota que indica uso en zonas húmedas o piscinas.",
        title: "Ideal para zonas húmedas o piscinas.",
      },
      descripcion: "Tipos de uso: Zonas húmedas o cerca de piscinas.", 
    },
    {
      imagen: {
        src: "v1761825178/conexion_electrica_base_localizador",  
        alt: "Icono de enchufe que representa conexión eléctrica del equipo.",
        title: "Requiere conexión eléctrica.",
      },
      descripcion: "Requerimiento: Conexión eléctrica",
    },
    {
      imagen: {
        src: "v1761825178/duracion_bateria_localizador_cir",  
        alt: "Icono de batería que muestra autonomía de más de tres horas.",
        title: "Duración de batería extendida.",
      },
      descripcion: "Duración de la batería: Más de 3 horas por fuera de la base de recarga.",
    },
    {
      imagen: {
        src: "v1761825177/tecnologia_plus_fabricante_localizador",  
        alt: "Logotipo de Tecnología Plus fabricante del localizador CIR.",
        title: "Tecnología Plus fabricante del localizador.",
      },
      descripcion: "Marca",
    },
  ];
  
  return <FichaTecnica
    fichaTecnica={fichaTecnica}
    title="Ficha técnica del localizador de clientes CIR-C2 para exteriores y ambientes húmedos"
    gridColumns={4}
  />;
};

export default FichaTecnicaSection;