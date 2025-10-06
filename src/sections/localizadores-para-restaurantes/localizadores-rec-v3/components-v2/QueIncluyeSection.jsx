import QueIncluye from "@/components/ver-mas-productos/que-incluye/QueIncluye";

const QueIncluyeSection = () => {
  const articulosIncluidos = [
    {
      imagen: {
        type: 'image',
        src: 'v1757338400/boton_llamador_meseros_e2b_doble_funcion',     
        alt: 'Botón llamador inalámbrico E2-B con doble función llamar y cancelar para restaurantes.',
        title: 'Botón llamador de meseros E2-B doble función.',
      },
      descripcion: "1 botón llamador inalámbrico E2-B (doble función: Llamar / Cancelar)",
    },
    {
      imagen: {
        type: 'image',
        src: 'v1757338399/bateria_23a_12vtimbres_para_restaurantes',     
        alt: 'Batería 23A 12V instalada para timbres para restaurantes lista para usar.',
        title: 'Batería 23A 12V para timbres para restaurantes.',
      },
      descripcion: "Batería  23A 12V instalada (lista para usar)",
    },
    {
      imagen: {
        type: 'image',
        src: 'v1757338399/adhesivo_alta_resistencia_boton_para_llamar_al_mesero',     
        alt: 'Adhesivo de alta resistencia para fijación del botón para llamar al mesero en superficies lisas.',
        title: 'Adhesivo resistente para botón para llamar al mesero.',
      },
      descripcion: "Adhesivo de alta resistencia para fijación en superficies lisas",
    },
    {
      imagen: {
        type: 'image',
        src: 'v1757338400/empaque_protector_individual_timbre_para_restaurante',     
        alt: 'Empaque protector individual para timbre para restaurante, garantiza mayor cuidado y durabilidad.',
        title: 'Empaque protector individual para timbre para restaurante.',
      },
      descripcion: "Empaque protector individual",
    }
  ];

  return (
    <QueIncluye 
      articulosIncluidos={articulosIncluidos} 
      title="¿Qué incluye el localizador de clientes REC-V3?"
    />
  );
};

export default QueIncluyeSection;