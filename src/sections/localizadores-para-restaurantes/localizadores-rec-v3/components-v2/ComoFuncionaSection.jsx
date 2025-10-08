import ComoFunciona from "@/components/ver-mas-productos/como-funciona/ComoFunciona";

const ComoFuncionaSection = () => {
  const comoFuncionaPasos = [
    {
      imagen: {
        src: "v1759858180/avisador_de_pedidos_rec_v3_entrega_de_localizador",
        alt: "Avisador de pedidos REC-V3 mostrando cómo el cliente hace el pedido y recibe un localizador para esperar su turno.",
        title: "Avisador de pedidos REC-V3 - Entrega de localizador al cliente tras realizar su pedido.",
      },
      descripcion: "1. El cliente hace el pedido y le entregan un localizador",
    },
    {
      imagen: {
        src: "v1759858180/localizador_de_clientes_rec_v3_llamando_usuario",
        alt: "Localizador de clientes REC-V3 mostrando cómo el empleado digita el número del localizador cuando el pedido está listo.",
        title: "Localizador de clientes REC-V3 - Comunicación entre cocina y cliente cuando el pedido está preparado.",
      },
      descripcion: "2. Cuando el pedido está listo, digita en el control el número del localizador",
    },
    {
      imagen: {
        src: "v1759941976/localizadores_para_restaurantes_rec_v3_senales__alerta",
        alt: "Localizadores para restaurantes REC-V3 mostrando a un cliente sentado en su mesa recibiendo la alerta de luz, sonido y vibración al estar listo su pedido.",
        title: "Localizadores para restaurantes REC-V3 - Aviso por vibración, luz y sonido cuando el pedido está listo.",
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