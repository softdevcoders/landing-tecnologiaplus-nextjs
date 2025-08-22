import QueIncluye from "@/components/ver-mas-productos/que-incluye/QueIncluye";

const QueIncluyeSection = () => {
  const articulosIncluidos = [
    {
      imagen: {
        type: 'image',
        src: 'v1755800020/1_ci5rug.jpg',     
        alt: 'Botón llamador inalámbrico E2-B (doble función: Llamar / Cancelar)', 
      },
      descripcion: "1 botón llamador inalámbrico E2-B (doble función: Llamar / Cancelar)",
    },
    {
      imagen: {
        type: 'image',
        src: 'v1755800037/2_t9j0a8.jpg',     
        alt: 'Batería  23A 12V instalada (lista para usar)',
      },
      descripcion: "Batería  23A 12V instalada (lista para usar)",
    },
    {
      imagen: {
        type: 'image',
        src: 'v1755800044/3_zgooya.jpg',     
        alt: 'Adhesivo de alta resistencia para fijación en superficies lisas',
      },
      descripcion: "Adhesivo de alta resistencia para fijación en superficies lisas",
    },
    {
      imagen: {
        type: 'image',
        src: 'v1755800051/4_h1gzbg.jpg',     
        alt: 'Empaque protector individual',
      },
      descripcion: "Empaque protector individual",
    }
  ];

  return (
    <QueIncluye 
      articulosIncluidos={articulosIncluidos} 
    />
  );
};

export default QueIncluyeSection;