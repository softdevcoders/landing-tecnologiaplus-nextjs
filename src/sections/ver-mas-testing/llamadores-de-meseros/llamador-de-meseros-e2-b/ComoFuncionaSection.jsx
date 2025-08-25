import ComoFunciona from "@/components/ver-mas-productos/como-funciona/ComoFunciona";

const ComoFuncionaSection = () => {
  const comoFuncionaPasos = [
    {
      imagen: {
        src: "v1756136678/llamador-de-meseros-e2-b_como_funciona_1_osbkfu",
        alt: "Imagen de cliente presionando botón",
      },
      descripcion: "1. El cliente presiona el botón <br> para llamar al mesero",
    },
    {
      imagen: {
        src: "v1756136679/llamador-de-meseros-e2-b_como_funciona_2_gkkh7n",
        alt: "Imagen de mesero recibiendo llamado",
      },
      descripcion: "2. El mesero recibe el llamado en <br> alguna de las pantallas o en el reloj",
    },
    {
      imagen: {
        src: "v1756136679/llamador-de-meseros-e2-b_como_funciona_3_jagwii",
        alt: "Imagen de mesero atendiendo llamado",
      },
      descripcion: "3. El mesero atiende el llamado y presiona la <br> tecla CANCELAR para borrar el llamado",
    },
  ];

  return (
    <ComoFunciona comoFuncionaPasos={comoFuncionaPasos} />
  );
};

export default ComoFuncionaSection;