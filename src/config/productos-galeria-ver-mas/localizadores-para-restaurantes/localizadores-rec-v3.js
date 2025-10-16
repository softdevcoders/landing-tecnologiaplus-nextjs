import { routes } from "@/config/routes";
import { controlNumerico } from "@/config/productos-galeria-ver-mas/llamadores-meseros/control-numerico";
import { habladorDeMesa } from "@/config/productos-galeria-ver-mas/llamadores-meseros/hablador-de-mesa";
import { relojReceptorDeLlamados } from "@/config/productos-galeria-ver-mas/llamadores-meseros/reloj-receptor-de-llamados";
import { pantallaT1B } from "@/config/productos-galeria-ver-mas/llamadores-meseros/pantalla-t1-b";
import { pantallaT6 } from "@/config/productos-galeria-ver-mas/llamadores-meseros/pantalla-t6";

// Inverntar un cambio

const mainImage = {
  src: 'v1759858183/localizadores_para_restaurantes_rec_v3_con_base_de_carga',
  alt: 'Localizadores para restaurantes REC-V3 con base de carga para avisar pedidos',
  title: 'Localizadores para restaurantes REC-V3 que mejoran la atención'
};

export const localizadoresRecV3 = {
  id: "localizadores-rec-v3",
  title: "Localizadores para restaurantes REC-V3",
  description: "Tus clientes disfrutan el tiempo mientras esperan el pedido.",
  url: routes.landings.localizadoresParaRestaurantes.children.rec_v3.url,
  mainImage,
  media: [
    {
      type: 'image',
      ...mainImage,
    },
    {
      type: '3d',
      modelID: 'de67c55171d44cf2add1dee2321a6867',
      thumbnail: 'v1759858183/localizadores_para_restaurantes_rec_v3_con_base_de_carga',
      preview: 'v1759858183/localizadores_para_restaurantes_rec_v3_con_base_de_carga',
      alt: 'Modelo 3D del localizador de clientes REC-V3'
    },
    {
      type: 'image',
      src: 'v1759858182/avisador_de_pedidos_rec_v3_medidas',     
      alt: 'Medidas del avisador de pedidos REC-V3 con base de carga y botones numéricos',
      title: 'Dimensiones del avisador de pedidos REC-V3 para restaurantes',
    },
    {
      type: 'image',
      src: 'v1759858183/localizador_de_clientes_rec_v3_control_de_llamado', 
      alt: 'Sistema localizador de clientes REC-V3 con base cargador, control de llamado y numerador digital para restaurantes.',
      title: 'Localizador de clientes REC-V3 para restaurantes - Base cargador con control de llamado y teclado numérico.',
      darkBackground: true
    },
    {
      type: 'image',
      src: 'v1759858439/localizador_de_mesas_restaurante_rec_v3_antena_conexion',
      alt: 'Localizador de mesas restaurante REC-V3 con antena y conexión eléctrica, ideal para optimizar el servicio en locales gastronómicos.',
      title: 'Localizador de mesas restaurante REC-V3 con antena y conexión eléctrica.',
      darkBackground: true
    },
    {
      type: 'image',
      src: 'v1759858185/viper_para_restaurante_rec_v3_con_logo',  
      alt: 'Viper para restaurante REC-V3 mostrando el logo del cliente en mesa, ideal para mejorar la atención y experiencia del comensal.',
      title: 'Viper para restaurante REC-V3 con logo personalizado del cliente.',
      darkBackground: true
    },
    {
      type: 'image',
      src: 'v1759858616/beeper_para_restaurantes_rec_v3_senales_alerta',  
      alt: 'Beeper para restaurantes REC-V3 con tres tipos de alertas: vibración, sonido y luz, ideal para mejorar la comunicación con los clientes.',
      title: 'Beeper para restaurantes REC-V3 con alertas de vibración, sonido y luz.',
      darkBackground: true
    },
  ],
  // compatibleConProducts: [],
  opiniones: [
    {
      nombre: 'Andrés',
      opinion: 'Desde que instalamos el localizador, el servicio al cliente mejoró muchísimo. Ya no tenemos filas ni clientes amontonados esperando su pedido. Los localizadores funcionan perfecto incluso con bastante gente en el local, y el alcance es muy bueno.',
      sector: 'Fast food',
    },
    {
      nombre: 'Laura',
      opinion: 'Nos encantó porque es fácil de usar y muy práctico. Los estudiantes hacen su pedido, se sientan tranquilos y cuando vibra el localizador van por la bebida. Además, el diseño se ve moderno y profesional. Ha sido una buena inversión.',
      sector: 'Cafés universidades',
    },
    {
      nombre: 'Carlos',
      opinion: 'Llevamos casi un año con los localizadores y no hemos tenido problemas. La batería dura bastante y el soporte técnico nos ha ayudado cuando necesitamos algo. Nuestros clientes también lo ven como un detalle tecnológico que da confianza.',
      sector: 'Fast food',
    },
  ]
};