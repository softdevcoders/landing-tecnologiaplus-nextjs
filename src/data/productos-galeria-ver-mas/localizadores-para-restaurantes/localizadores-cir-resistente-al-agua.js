import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1761664211/ver-mas-localizadores-cir-resistente-al-agua-1',
  alt: 'Localizadores para restaurantes CIR Resistentes al Agua ideales para optimizar la atención al cliente',
  title: 'Mejora la atención con los localizadores para restaurantes CIR Resistentes al Agua'
};

export const localizadoresCirResistenteAlAgua = { 
  id: "localizadores-cir-resistente-al-agua",
  title: "Localizadores para restaurantes CIR Resistentes al Agua",
  description: "Los clientes disfrutan una mejor experiencia mientras esperan su orden.",
  url: routes.landings.localizadoresParaRestaurantes.children.localizadoresCirResistenteAlAgua.url,
  mainImage,
  media: [
    {
      type: 'image',
      ...mainImage,
    },
    {
      type: 'image',
      src: 'v1761664208/ver-mas-localizadores-cir-resistente-al-agua-2',     
      alt: 'Medidas del avisador de pedidos REC-V3 con base de carga y botones numéricos',
      title: 'Dimensiones del avisador de pedidos REC-V3 para restaurantes',
    },
    {
      type: 'image',
      src: 'v1761664210/ver-mas-localizadores-cir-resistente-al-agua-3', 
      alt: 'Sistema localizador de clientes REC-V3 con base cargador, control de llamado y numerador digital para restaurantes.',
      title: 'Localizador de clientes REC-V3 para restaurantes - Base cargador con control de llamado y teclado numérico.',
      darkBackground: true
    },
    {
      type: 'image',
      src: 'v1761664212/ver-mas-localizadores-cir-resistente-al-agua-4',
      alt: 'Localizador de mesas restaurante REC-V3 con antena y conexión eléctrica, ideal para optimizar el servicio en locales gastronómicos.',
      title: 'Localizador de mesas restaurante REC-V3 con antena y conexión eléctrica.',
      darkBackground: true
    },
    {
      type: 'image',
      src: 'v1761664215/ver-mas-localizadores-cir-resistente-al-agua-5',  
      alt: 'Viper para restaurante REC-V3 mostrando el logo del cliente en mesa, ideal para mejorar la atención y experiencia del comensal.',
      title: 'Viper para restaurante REC-V3 con logo personalizado del cliente.',
      darkBackground: true
    },
    {
      type: 'image',
      src: 'v1761664213/ver-mas-localizadores-cir-resistente-al-agua-6',  
      alt: 'Beeper para restaurantes REC-V3 con tres tipos de alertas: vibración, sonido y luz, ideal para mejorar la comunicación con los clientes.',
      title: 'Beeper para restaurantes REC-V3 con alertas de vibración, sonido y luz.',
      darkBackground: true
    },
    {
      type: 'image',
      src: 'v1761664209/ver-mas-localizadores-cir-resistente-al-agua-7',  
      alt: 'Beeper para restaurantes REC-V3 con tres tipos de alertas: vibración, sonido y luz, ideal para mejorar la comunicación con los clientes.',
      title: 'Beeper para restaurantes REC-V3 con alertas de vibración, sonido y luz.',
      darkBackground: true
    },
  ],
  opiniones: [
    {
      nombre: 'Ana M.',
      opinion: 'Nos han funcionado muy bien. A veces se mojan un poco porque las mesas están cerca de la piscina y siguen andando como si nada.',
      sector: 'Club Campestre',
    },
    {
      nombre: 'Daniel R.',
      opinion: 'Lo que más me gusta es que se ven bonitos y no parecen aparatos de hace mil años. Los clientes entienden fácil cómo usarlos y se ahorra tiempo en la entrega.',
      sector: 'Cafés centro comercial',
    },
    {
      nombre: 'Mónica G.',
      opinion: 'Los compramos porque nos dijeron que aguantaban la humedad, y sí, eso es cierto. Pero además duran mucho cargados y no han dado fallas.',
      sector: 'Club social',
    },
  ]
};