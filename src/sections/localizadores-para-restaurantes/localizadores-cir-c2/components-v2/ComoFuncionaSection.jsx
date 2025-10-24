import ComoFunciona from "@/components/ver-mas-productos/como-funciona/ComoFunciona";

const ComoFuncionaSection = () => {
  const comoFuncionaPasos = [
    {
      imagen: {
        src: "v1741011138/12_4x-8_5_gg4wnr",
        alt: "Avisador de pedidos CIR-C2 mostrando cómo el cliente hace el pedido y recibe un localizador para esperar su turno.",
        title: "Avisador de pedidos CIR-C2 - Entrega de localizador al cliente tras realizar su pedido.",
      },
      descripcion: "1. El cliente hace el pedido y le entregan un localizador",
    },
    {
      imagen: {
        src: "v1741011138/13_4x-8_7_jzd9lo",
        alt: "Localizador de clientes CIR-C2 mostrando cómo el empleado digita el número del localizador cuando el pedido está listo.",
        title: "Localizador de clientes CIR-C2 - Comunicación entre cocina y cliente cuando el pedido está preparado.",
      },
      descripcion: "2. Cuando el pedido está listo, digita en el control el número del localizador",
    },
    {
      imagen: {
        src: "v1750431315/NUEVA_3x-100_frfoy1",
        alt: "Localizadores para restaurantes CIR-C2 mostrando a un cliente sentado en su mesa recibiendo la alerta de luz, sonido y vibración al estar listo su pedido.",
        title: "Localizadores para restaurantes CIR-C2 - Aviso por vibración, luz y sonido cuando el pedido está listo.",
      },
      descripcion: "3. El localizador vibra, alumbra y suena, notificando al cliente del llamado",
    },
  ];

  return (
    <ComoFunciona 
      comoFuncionaPasos={comoFuncionaPasos} 
      title="¿Cómo funcionan los localizadores para restaurantes autoservicio CIR-C2?" 
    />
  );
};

export default ComoFuncionaSection;