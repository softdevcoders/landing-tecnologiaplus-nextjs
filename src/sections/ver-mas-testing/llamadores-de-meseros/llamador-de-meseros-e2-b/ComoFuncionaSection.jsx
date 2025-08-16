import ComoFunciona from "@/components/ver-mas-productos/como-funciona/ComoFunciona";

const ComoFuncionaSection = () => {
  const comoFuncionaPasos = [
    {
      imagen: {
        src: "v1743039883/14_4x-8_1_nfpyrv",
        alt: "Usuario presionando el llamador de meseros",
      },
      descripcion: "1. El cliente presiona el botón: tecla para llamar al mesero o tecla para pagar.",
    },
    {
      imagen: {
        src: "v1743039883/15_4x-8_1_otbk7u",
        alt: "Mesero recibiendo el llamado en el reloj recepto o pantallas de turno",
      },
      descripcion: "2. El mesero recibe el llamado en alguna de las pantallas o en el reloj.",
    },
    {
      imagen: {
        src: "v1743039883/16_4x-8_2_ej3v5o",
        alt: "Batería 23A12V Voltaje: DC12V",
      },
      descripcion: "3. El mesero atiende el llamado y presiona la tecla CANCELAR para borrar el llamado",
    },
  ];

  return (
    <ComoFunciona comoFuncionaPasos={comoFuncionaPasos} />
  );
};

export default ComoFuncionaSection;