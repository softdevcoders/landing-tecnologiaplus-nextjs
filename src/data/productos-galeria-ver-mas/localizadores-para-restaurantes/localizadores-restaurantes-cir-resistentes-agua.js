import { routes } from "@/config/routes";

const mainImage = {
  src: 'v1761825183/localizadores_para_restaurantes_cir_resistentes_agua',
  alt: 'Localizadores para restaurantes CIR resistentes al agua apilados junto a la base emisora.',
  title: 'Localizadores para restaurantes CIR resistentes al agua con base transmisora.'
};

export const localizadoresCirResistenteAlAgua = { 
  id: "localizadores-cir-resistente-al-agua",
  title: "Localizadores para restaurantes CIR Resistentes al Agua",
  description: "Diseñado para resistir el agua, el CIR-C2 permite que tus clientes disfruten sin preocupaciones en terrazas, piscinas o zonas húmedas.",
  url: routes.landings.localizadoresParaRestaurantes.children.localizadoresCirResistenteAlAgua.url,
  mainImage,
  media: [
    {
      type: 'image',
      ...mainImage,
    },
    {
      type: 'image',
      src: 'v1761825178/localizadores_para_restaurantes_cir_resistentes_agua_medidas',     
      alt: 'Diagrama técnico del sistema LRS con medidas del localizador CIR para restaurantes.',
      title: 'Sistema LRS CIR con dimensiones y detalles técnicos.',
    },
    {
      type: 'image',
      src: 'v1761825183/avisador_de_pedidos_cir_resistente_al_agua', 
      alt: 'Avisador de pedidos CIR resistente al agua con diseño moderno y antena integrada.',
      title: 'Avisador de pedidos CIR resistente al agua para restaurantes.',
      darkBackground: true
    },
    {
      type: 'image',
      src: 'v1761825181/localizador_de_clientes_cir_resistente_al_agua',
      alt: 'Localizador de clientes CIR sumergido en agua demostrando su resistencia.',
      title: 'Localizador de clientes CIR resistente al agua ideal para terrazas y piscinas.',
      darkBackground: true
    },
    {
      type: 'image',
      src: 'v1761825183/localizador_de_mesas_restaurante_cir_inalambrico',  
      alt: 'Persona usando localizador de mesas restaurante CIR junto a piscina.',
      title: 'Localizador de mesas restaurante CIR inalámbrico y resistente al agua.',
      darkBackground: true
    },
    {
      type: 'image',
      src: 'v1761825181/beeper_para_restaurantes_cir_resistente_al_agua',  
      alt: 'Beeper para restaurantes CIR mostrando señal de conexión activa.',
      title: 'Beeper para restaurantes CIR resistente al agua con gran alcance.',
      darkBackground: true
    },
    {
      type: 'image',
      src: 'v1761825178/sistema_de_llamado_para_restaurante_cir_rompemuros',  
      alt: 'Sistema de llamado para restaurante CIR con señal rompemuros y amplio rango.',
      title: 'Sistema de llamado para restaurante CIR con tecnología rompemuros.',
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