import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1760638309/localizadores_para_restaurantes_cir_c2_amarillo',
  alt: 'Localizadores para restaurantes Cir-C2 amarillos ideales para optimizar la atención al cliente',
  title: 'Mejora la atención con los localizadores para restaurantes Cir-C2'
};

export const localizadoresCirC2 = { 
  id: "localizadores-cir-c2",
  title: "Localizadores para restaurantes CIR C2",
  description: "Los clientes disfrutan una mejor experiencia mientras esperan su orden.",
  url: routes.landings.localizadoresParaRestaurantes.children.rec_c2.url,
  mainImage,
  colors: [
    {
      id: "amarillo",
      name: "Amarillo",
      thumbnail: mainImage,
      media: [
        {
          type: 'image',
          ...mainImage,
        },
        {
          type: 'image',
          src: 'v1760638297/avisador_de_pedidos_cir_c2_con_medidas',     
          alt: 'Avisador de pedidos Cir-C2 con medidas exactas para instalación en mostradores o cocinas',
          title: 'Dimensiones del avisador de pedidos Cir-C2 para tu negocio',
        },
        {
          type: 'image',
          src: 'v1760638309/lrs_cir_c2_con_base_de_carga', 
          alt: 'Sistema LRS Cir-C2 con base de carga múltiple y control numérico para restaurantes.',
          title: 'LRS Cir-C2 con base de carga para gestión eficiente de pedidos.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1760638320/localizador_de_clientes_cir_c2_funcionando',
          alt: 'Localizador de clientes Cir-C2 amarillo en uso para avisar cuando el pedido está listo',
          title: 'Localizador de clientes Cir-C2 en acción dentro del restaurante',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1760638319/beeper_para_restaurantes_cir_c2_en_mesa',  
          alt: 'Beeper para restaurantes Cir-C2 con luz y vibración para avisar a los comensales',
          title: 'Beeper Cir-C2: avisos rápidos y elegantes en tu restaurante',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1760638314/sistema_de_llamado_para_restaurante_cir_c2',  
          alt: 'Sistema de llamado para restaurante Cir-C2 con tres tipos de alerta configurables',
          title: 'Sistema de llamado Cir-C2 con alertas luminosas y sonoras',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1760638302/localizadores_para_restaurantes_colombia_cir_c2_rompemuros',    
          alt: 'Localizadores para restaurantes en Colombia modelo Cir-C2 con tecnología rompe muros',
          title: 'Localizadores Cir-C2 rompe muros: cobertura ideal para restaurantes en Colombia',
          darkBackground: true
        },
      ]
    },
    {
      id: "rojo",
      name: "Rojo",
      thumbnail: {
        src: 'v1760638307/localizadores_para_restaurantes_cir_c2_rojo',  
        alt: 'Localizadores para restaurantes Cir-C2 rojos, ideales para optimizar los tiempos de entrega de pedidos',
        title: 'Localizadores para restaurantes Cir-C2 rojos para mejorar la experiencia del cliente'
      },
      media: [
        {
          type: 'image',
          src: 'v1760638307/localizadores_para_restaurantes_cir_c2_rojo', 
          alt: 'Localizadores para restaurantes Cir-C2 rojos, ideales para optimizar los tiempos de entrega de pedidos',
          title: 'Localizadores para restaurantes Cir-C2 rojos para mejorar la experiencia del cliente'
        },
        {
          type: 'image',
          src: 'v1760638297/avisador_de_pedidos_cir_c2_rojo_con_medidas',
          alt: 'Avisador de pedidos Cir-C2 rojo con medidas exactas y diseño compacto para mostradores',
          title: 'Avisador de pedidos Cir-C2 rojo con tamaño práctico para cocinas' 
        },
        {
          type: 'image',
          src: 'v1760638299/lrs_cir_c2_rojo_con_base_de_carga', 
          alt: 'Sistema LRS Cir-C2 rojo con base de carga múltiple y numeración clara para restaurantes',
          title: 'LRS Cir-C2 rojo con estación de carga para gestión eficiente',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1760638315/localizador_de_clientes_cir_c2_rojo_en_uso',
          alt: 'Localizador de clientes Cir-C2 rojo activo durante el servicio para avisar pedidos listos', 
          title: 'Localizador Cir-C2 rojo para notificar clientes en restaurantes',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1760638317/beeper_para_restaurantes_cir_c2_rojo_en_mesa',
          alt: 'Beeper para restaurantes Cir-C2 rojo con vibración y luz, ideal para ambientes concurridos',
          title: 'Beeper Cir-C2 rojo: avisos discretos y eficaces para tu restaurante',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1760638307/sistema_de_llamado_para_restaurante_cir_c2_rojo', 
          alt: 'Sistema de llamado para restaurante Cir-C2 rojo con alertas visuales, auditivas y de vibración',
          title: 'Sistema de llamado Cir-C2 rojo para atención fluida en tu negocio',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1760638299/localizadores_para_restaurantes_colombia_cir_c2_rojo_rompemuros',
          alt: 'Localizadores para restaurantes en Colombia Cir-C2 rojos con tecnología rompe muros de largo alcance',
          title: 'Localizadores Cir-C2 rojos rompe muros: conexión estable y potente en Colombia',
          darkBackground: true
        },
      ]
    },
    {
      id: "gris",
      name: "Gris",
      thumbnail: {
        src: 'v1760638305/localizadores_para_restaurantes_cir_c2_gris',  
        alt: 'Localizadores para restaurantes Cir-C2 grises que agilizan la entrega de pedidos y mejoran el servicio al cliente',
        title: 'Localizadores para restaurantes Cir-C2 grises para optimizar atención en restaurantes',
      },
      media: [
        {
          type: 'image',
          src: 'v1760638305/localizadores_para_restaurantes_cir_c2_gris', 
          alt: 'Localizadores para restaurantes Cir-C2 grises que agilizan la entrega de pedidos y mejoran el servicio al cliente',
          title: 'Localizadores para restaurantes Cir-C2 grises para optimizar atención en restaurantes',
        },
        {
          type: 'image',
          src: 'v1760638297/avisador_de_pedidos_cir_c2_gris_con_medidas',   
          alt: 'Avisador de pedidos Cir-C2 gris con medidas compactas, ideal para cocinas y zonas de autoservicio', 
          title: 'Avisador de pedidos Cir-C2 gris con diseño funcional para mostradores',
        },
        {
          type: 'image',
          src: 'v1760638303/lrs_cir_c2_grises_con_base_de_carga', 
          alt: 'Sistema de LRS Cir-C2 grises con base de carga múltiple y numeración visible para mejorar la organización',
          title: 'LRS Cir-C2 grises con estación de carga para gestión de pedidos',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1760638320/localizador_de_clientes_cir_c2_gris_en_uso',
          alt: 'Localizador de clientes Cir-C2 gris activo durante el servicio, emite vibración y luz cuando el pedido está listo',
          title: ' Localizador Cir-C2 gris para avisar a clientes al retirar sus pedidos',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1760638319/beeper_para_restaurantes_cir_c2_gris_en_mesa', 
          alt: 'Beeper para restaurantes Cir-C2 gris con vibración potente y señal estable en espacios amplios',
          title: 'Beeper Cir-C2 gris para comunicación rápida en tu restaurante',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1760638307/sistema_de_llamado_para_restaurante_cir_c2_gris', 
          alt: 'Sistema de llamado para restaurante Cir-C2 gris con luz LED y alertas vibratorias para atención inmediata',
          title: 'Sistema de llamado Cir-C2 gris para mejorar el flujo de atención en restaurantes',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1760638298/localizadores_para_restaurantes_colombia_cir_c2_grises_rompemuros',
          alt: 'Localizadores para restaurantes en Colombia Cir-C2 grises con tecnología rompe muros de largo alcance',
          title: 'Localizadores Cir-C2 grises rompe muros para negocios gastronómicos en Colombia',
          darkBackground: true
        },
      ]
    },
  ],
  defaultColor: "amarillo",
  hasColors: true,
  opiniones: [
    {
      nombre: 'Andrés',
      opinion: 'Desde que instalamos el localizador, el servicio al cliente mejoró muchísimo. Ya no tenemos filas ni clientes amontonados esperando su pedido. Los localizadores funcionan perfecto incluso con bastante gente en el local, y el alcance es muy bueno. Además, el control numérico es muy práctico para avisar los pedidos.',
      sector: 'Fast food',
    },
    {
      nombre: 'Laura',
      opinion: 'Nos encantó porque es fácil de usar y muy práctico. Los estudiantes hacen su pedido, se sientan tranquilos y cuando vibra el localizador van por la bebida. Además, el diseño se ve moderno y profesional. Ha sido una buena inversión. Además, el control numérico es muy prático para avisar los pedidos.',
      sector: 'Cafés universidades',
    },
    {
      nombre: 'Carlos',
      opinion: 'Llevamos casi un año con los localizadores y no hemos tenido problemas. La batería dura bastante y el soporte técnico nos ha ayudado cuando necesitamos algo. Nuestros clientes también lo ven como un detalle tecnológico que da confianza.',
      sector: 'Fast food',
    },
  ]
};