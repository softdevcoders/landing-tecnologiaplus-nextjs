import ComoFunciona from "@/components/ver-mas-productos/como-funciona/ComoFunciona";

const ComoFuncionaSection = () => {
  const comoFuncionaPasos = [
    {
      imagen: {
        src: "v1741016959/14_4x-8_6_xofupb",
        alt: "Cliente presionando el llamador de meseros en la mesa para pedir atención.",
        title: "Llamador de meseros para solicitar servicio desde la mesa.",
      },
      descripcion: "1. El cliente hace el pedido y le entregan un localizador",
    },
    {
      imagen: {
        src: "v1741016959/14_4x-8_6_xofupb",
        alt: "Mesero recibiendo la señal del llamador de meseros en pantalla o reloj.",
        title: "Cómo el mesero recibe el llamado con el sistema de llamador de meseros.",
      },
      descripcion: "2. Cuando el pedido está listo, digita en el control el número del localizador",
    },
    {
      imagen: {
        src: "v1750431315/NUEVA_3x-100_frfoy1",
        alt: "Mesero atendiendo al cliente después de recibir el llamado con el dispositivo.",
        title: "Llamador de meseros para mejorar la atención al cliente.",
      },
      descripcion: "3. El localizador vibra, alumbra y suena, notificando al cliente del llamado",
    },
  ];

  return (
    <ComoFunciona 
      comoFuncionaPasos={comoFuncionaPasos} 
      title="¿Cómo funciona el localizador de restaurantes autoservicio REC-V3?" 
    />
  );
};

export default ComoFuncionaSection;