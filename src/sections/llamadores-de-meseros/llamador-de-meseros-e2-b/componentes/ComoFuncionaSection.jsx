import ComoFunciona from "@/components/ver-mas-productos/como-funciona/ComoFunciona";

const ComoFuncionaSection = () => {
  const comoFuncionaPasos = [
    {
      imagen: {
        src: "v1757338402/cliente_presiona_boton_llamador_de_meseros",
        alt: "Cliente presionando el llamador de meseros en la mesa para pedir atención.",
        title: "Llamador de meseros para solicitar servicio desde la mesa.",
      },
      descripcion: "1. El cliente presiona el botón <br> para llamar al mesero",
    },
    {
      imagen: {
        src: "v1757338402/mesero_recibe_aviso_del_llamador_de_meseros",
        alt: "Mesero recibiendo la señal del llamador de meseros en pantalla o reloj.",
        title: "Cómo el mesero recibe el llamado con el sistema de llamador de meseros.",
      },
      descripcion: "2. El mesero recibe el llamado en <br> alguna de las pantallas o en el reloj",
    },
    {
      imagen: {
        src: "v1757338401/mesero_atendiendo_aviso_del_llamador_de_meseros",
        alt: "Mesero atendiendo al cliente después de recibir el llamado con el dispositivo.",
        title: "Llamador de meseros para mejorar la atención al cliente.",
      },
      descripcion: "3. El mesero atiende el llamado y presiona la <br> tecla CANCELAR para borrar el llamado",
    },
  ];

  return (
    <ComoFunciona 
      comoFuncionaPasos={comoFuncionaPasos} 
      title="¿Cómo funciona el llamador de meseros E2-B?" 
    />
  );
};

export default ComoFuncionaSection;