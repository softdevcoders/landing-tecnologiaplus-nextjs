import FichaTecnica from "@/components/ver-mas-productos/ficha-tecnica/FichaTecnica";

const FichaTecnicaSection = () => {
  const fichaTecnica = [
    {
      imagen: {
        src: "v1740254431/16_4x-8_pcbsng",
        alt: "Batería 23A12V Voltaje: DC12V",
      },
      descripcion: "Batería 23A12V Voltaje: DC12V",
    },
    {
      imagen: {
        src: "v1739998010/icono_7_4x-8_gkqxdl",
        alt: "Rango: hasta 100m o más con amplificador de señal Frecuencia: 433MHz",
      },
      descripcion: "Rango: hasta 100m o más con amplificador de señal Frecuencia: 433MHz",
    },
    {
      imagen: {
        src: "v1743039883/11_4x-8_rp9yee",  
        alt: "3 teclas de llamado: Tecla llamar o tecla pagar. Cancelar (para borrar el llamado cuando atienden el cliente)",
      },
      descripcion: "3 teclas de llamado: Tecla llamar o tecla pagar. Cancelar (para borrar el llamado cuando atienden el cliente)",
    },
    {
      imagen: {
        src: "v1740254426/11_4x-8_tfnsac",  
        alt: "Uso: en lugares para llamar al mesero o empleados",
      },
      descripcion: "Uso: en lugares para llamar al mesero o empleados",
    },
    {
      imagen: {
        src: "v1740161084/9_4x-8_l5gvik",  
        alt: "Compatible con: Equipos de Tecnología Plus.",
      },
      descripcion: "Compatible con: Equipos de Tecnología Plus.",
    },
    {
      imagen: {
        src: "v1740172482/7_4x-8_1_ptxtfo",  
        alt: "Resiste derrames accidentales de agua",
      },
      descripcion: "Resiste derrames accidentales de agua",
    },
  ];
  
  return <FichaTecnica
    fichaTecnica={fichaTecnica}
  />;
};

export default FichaTecnicaSection;