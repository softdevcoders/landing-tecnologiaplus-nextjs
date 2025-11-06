import ComoFunciona from "@/components/ver-mas-productos/como-funciona/ComoFunciona";

const ComoFuncionaSection = () => {
  const comoFuncionaPasos = [
    {
      imagen: {
        src: "v1762448298/1",
        alt: "Avisador de pedidos CIR Resistente al Agua mostrando cómo el cliente hace el pedido y recibe un localizador para esperar su turno.",
        title: "Avisador de pedidos CIR Resistente al Agua - Entrega de localizador al cliente tras realizar su pedido.",
      },
      descripcion: "1. El cliente hace el pedido y le entregan un localizador",
    },
    {
      imagen: {
        src: "v1762448297/2",
        alt: "Localizador de clientes CIR Resistente al Agua mostrando cómo el empleado digita el número del localizador cuando el pedido está listo.",
        title: "Localizador de clientes CIR Resistente al Agua - Comunicación entre cocina y cliente cuando el pedido está preparado.",
      },
      descripcion: "2. Cuando el pedido está listo, digita en el control el número del localizador",
    },
    {
      imagen: {
        src: "v1762448297/3",
        alt: "Localizadores para restaurantes CIR Resistente al Agua - Aviso por vibración, luz y sonido cuando el pedido está listo.",
        title: "Localizadores para restaurantes CIR Resistente al Agua - Aviso por vibración, luz y sonido cuando el pedido está listo.",
      },
      descripcion: "3. El localizador vibra, alumbra y suena, notificando al cliente del llamado",
    },
  ];

  return (
    <ComoFunciona 
      comoFuncionaPasos={comoFuncionaPasos} 
      title="¿Cómo funcionan los localizadores para restaurantes autoservicio CIR Resistente al Agua?" 
    />
  );
};

export default ComoFuncionaSection;