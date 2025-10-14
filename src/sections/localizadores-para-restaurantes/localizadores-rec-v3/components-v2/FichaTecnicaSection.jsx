import FichaTecnica from "@/components/ver-mas-productos/ficha-tecnica/FichaTecnica";

const FichaTecnicaSection = () => {
  const fichaTecnica = [
    {
      imagen: {
        src: "v1760116908/vibracion_sonido_luz_localizador_para_restaurantes_autoservicio_rec_v3_",  
        alt: "Función de vibración, sonido y luz del localizador para restaurantes autoservicio REC-V3 para alertar al cliente.",
        title: "Localizador para restaurantes autoservicio REC-V3 con vibración, sonido y luz de alerta.",
      },
      descripcion: "Vibra, suena y alumbra",
    },
    {
      imagen: {
        src: "v1760116908/largo_alcance_localizador_para_restaurantes_autoservicio_rec_v3_",
        alt: "Localizador para restaurantes autoservicio REC-V3 con largo alcance de más de 200 metros a la redonda.",
        title: "Localizador para restaurantes autoservicio REC-V3 con alcance superior a 200 metros.",
      },
      descripcion: "Largo Alcance, más de 200 metros a la redonda.",
    },
    {
      imagen: {
        src: "v1760116908/material_resistente_localizador_para_restaurantes_autoservicio_rec_v3_",
        alt: "Localizador para restaurantes autoservicio REC-V3 fabricado en material termoplástico resistente a golpes.",
        title: "Localizador para restaurantes autoservicio REC-V3 de material termoplástico resistente.",
      },
      descripcion: "Material: Termoplástico (resistente a golpes)",
    },
    {
      imagen: {
        src: "v1760116908/capacidad_20_localizadores_para_restaurantes_autoservicio_rec_v3_",  
        alt: "Base del localizador para restaurantes autoservicio REC-V3 con capacidad de hasta 20 dispositivos y opción de expansión.",
        title: "Localizador para restaurantes autoservicio REC-V3 con capacidad de 20 unidades.",
      },
      descripcion: "Capacidad: <br/> hasta 20 localizadores y <br/>pueden adicionar más bases.",
    },
    {
      imagen: {
        src: "v1760116908/conexion_electrica_localizador_para_restaurantes_autoservicio_rec_v3_",  
        alt: "Localizador para restaurantes autoservicio REC-V3 ideal para áreas de espera y zonas de comidas.",
        title: "Usos del localizador para restaurantes autoservicio REC-V3 en áreas de comida y espera.",
      },
      descripcion: "Requerimiento: <br />Conexión eléctrica", 
    },
    {
      imagen: {
        src: "v1760116908/bateria_localizador_para_restaurantes_autoservicio_rec_v3_",  
        alt: "Localizador para restaurantes autoservicio REC-V3 con requerimiento de conexión eléctrica para su funcionamiento.",
        title: "Localizador para restaurantes autoservicio REC-V3 con conexión eléctrica.",
      },
      descripcion: "Duración de la batería: <br /> Más de 3 horas por fuera <br />de la base de recarga.",
    },
  ];
  
  return <FichaTecnica
    fichaTecnica={fichaTecnica}
    title="Ficha técnica del viper para restaurantes REC-V3"
  />;
};

export default FichaTecnicaSection;