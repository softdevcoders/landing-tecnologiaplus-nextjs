import FichaTecnica from "@/components/ver-mas-productos/ficha-tecnica/FichaTecnica";

const FichaTecnicaSection = () => {
  const fichaTecnica = [
    {
      imagen: {
        src: "v1756135012/dos_teclas_eksjl4",  
        alt: "Icono Doble función: Llamar y Cancelar",
      },
      descripcion: "Doble función:<br> Llamar y Cancelar",
    },
    {
      imagen: {
        src: "v1756135012/bateria_jnbukc",
        alt: "Icono Voltaje: DC12V. Batería 23A12V.",
      },
      descripcion: "Voltaje: DC12V.<br> Batería 23A12V.",
    },
    {
      imagen: {
        src: "v1756135012/rango_xk2u4q",
        alt: "Icono Rango: hasta 100m o más con amplificador de señal Frecuencia: 433MHz",
      },
      descripcion: "Rango: hasta 100m o más<br> con amplificador de señal.<br> Frecuencia: 433MHz",
    },
    {
      imagen: {
        src: "v1756135012/resistente_al_agua_vushok",  
        alt: "Icono Resiste derrames accidentales de agua",
      },
      descripcion: "Resiste derrames<br> accidentales de agua.",
    },
    {
      imagen: {
        src: "v1756135012/compatible_yxoml0",  
        alt: "Icono Compatible con receptores inalámbricos de Tecnología Plus.",
      },
      descripcion: "Compatible con receptores<br> inalámbricos de Tecnología Plus.", 
    },
    {
      imagen: {
        src: "v1756135012/uso_qnltnn",  
        alt: "Icono Uso: en lugares para llamar al mesero o empleados",
      },
      descripcion: "Uso: en lugares para llamar<br> al mesero o empleados",
    },
  ];
  
  return <FichaTecnica
    fichaTecnica={fichaTecnica}
  />;
};

export default FichaTecnicaSection;