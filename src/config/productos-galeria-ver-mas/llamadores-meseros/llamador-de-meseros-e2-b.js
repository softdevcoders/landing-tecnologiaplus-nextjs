import { routes } from "@/config/routes";
import { controlNumerico } from "@/config/productos-galeria-ver-mas/llamadores-meseros/control-numerico";
import { habladorDeMesa } from "@/config/productos-galeria-ver-mas/llamadores-meseros/hablador-de-mesa";
import { relojReceptorDeLlamados } from "@/config/productos-galeria-ver-mas/llamadores-meseros/reloj-receptor-de-llamados";
import { pantallaT1B } from "@/config/productos-galeria-ver-mas/llamadores-meseros/pantalla-t1-b";
import { pantallaT6 } from "@/config/productos-galeria-ver-mas/llamadores-meseros/pantalla-t6";

const mainImage = {
  src: 'v1757338389/llamador_meseros_e2b_negro_rojo_2teclas',
  alt: 'Llamador de meseros E2-B negro y rojo con 2 teclas para restaurante.',
  title: 'Llamador de meseros E2-B negro y rojo de 2 teclas.'
};

export const llamadorDeMeserosE2B = {
  id: "llamador-de-meseros-e2-b",
  title: "LLAMADOR DE MESEROS E2-B",
  description: "Permite llamar al mesero y borrar el llamado al ser atendido.",
  url: routes.landings.llamadoresDeMeseros.children.e2_b.url,
  mainImage,
  colors: [
    {
      id: "negro_rojo",
      name: "Negro y Rojo",
      thumbnail: mainImage,
      media: [
        {
          type: 'image',
          ...mainImage,
        },
        {
          type: 'video',
          src: 'v1757338405/timbre_de_restaurante_modelo_e2b_video.mp4',
          alt: 'Demostración de timbre de restaurante modelo E2-B en funcionamiento.',
          title: 'Timbre de restaurante modelo E2-B.',
          thumbnail: 'so_0/v1754070602/llamador_e2_b_de_2_teclas_negro_rojo_2_pffe7w', 
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338389/medidas_timbre_inalambrico_restaurantes_e2b_2teclas_negro_rojo',     
          alt: 'Medidas de timbre inalámbrico para restaurantes E2-B de dos teclas en color negro y rojo.',
          title: 'Medidas timbre inalámbrico para restaurantes E2-B 2 teclas negro y rojo.',
        },
        {
          type: 'image',
          src: 'v1757338391/timbre_de_restaurante_e2b_2teclas_negro_rojo_en_uso', 
          alt: 'Timbre de restaurante E2-B negro y rojo de dos teclas en uso en restaurante con clientes.',
          title: 'Timbre de restaurante E2-B negro y rojo en uso con clientes.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338390/llamadores_para_restaurantes_e2b_2teclas_negro_rojo_diferentes_sectores',
          alt: 'Llamadores para restaurantes E2-B en color negro y rojo, ideales para gimnasios, gastrobares y sector salud.',
          title: 'Llamadores para restaurantes E2-B negro y rojo ideales para diferentes sectores.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338391/timbres_para_mesas_restaurantes_e2b_2teclas_negro_rojo_comparacion',  
          alt: 'Timbres para mesas de restaurantes E2-B negro y rojo comparados con otros modelos, diseño moderno y batería de larga duración.',
          title: 'Timbres para mesas de restaurantes E2-B comparados con otros modelos.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338389/llamadores_de_meseros_e2B_negro_rojo_fijacion_hablador_adhesivo',  
          alt: 'Llamadores de meseros E2-B negro y rojo fijados en mesa con hablador publicitario y adhesivo extra fuerte.',
          title: 'Llamadores de meseros E2-B negro y rojo con hablador y adhesivo extra fuerte.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338391/timbre_de_mesa_e2_b_negro_rojo_resistente_agua',    
          alt: 'Timbre de mesa E2-B negro rojo resistente a derrames de agua para restaurantes.',
          title: 'Timbre de mesa E2-B negro rojo resistente al agua.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338390/timbres_para_restaurantes_e2_b_negro_rojo_receptores',    
          alt: 'Timbres para restaurantes E2-B negro rojo compatibles con reloj receptor y pantallas de llamados.',
          title: 'Timbres para restaurantes E2-B negro rojo con receptores.',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1757338390/llamadores_de_mesa_e2_b_negro_rojo_rompemuros',    
          alt: 'Llamadores de mesa E2-B negro rojo con señal rompemuros para restaurantes.',
          title: 'Llamadores de mesa E2-B negro rojo rompemuros.',
          darkBackground: true
        },
      ]
    },
    {
      id: "negro_amarillo",
      name: "Negro y Amarillo",
      thumbnail: {
        src: 'v1754405572/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_amarillo_1_bkashy',  
        alt: 'Timbre para mesa de restaurante modelo E2-B en color negro y amarillo con diseño moderno.',
      },
      media: [
        {
          type: 'image',
          src: 'v1754405572/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_amarillo_1_bkashy', 
          alt: 'Timbre de restaurante negro con amarillo, moderno y llamativo',
        },
        {
          type: 'image',
          src: 'v1754405563/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_amarillo_2_bzppnd',
          alt: 'Medidas de Timbre inalámbrico para restaurantes', 
        },
        {
          type: 'image',
          src: 'v1754405589/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_amarillo_3_sfxlts', 
          alt: 'Timbre para mesa de restaurante usado por comensales en restaurante',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405581/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_amarillo_4_ggyri8',
          alt: 'Llamadores de personal  en color negro y amarillo usados por clientes', 
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405586/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_amarillo_5_jgso6j',
          alt: 'Timbres para mesas de restaurantes en presentación negra con amarillo',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405615/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_amarillo_6_nqzmku', 
          alt: 'Beeper para restaurantes color negro con amarillo y el hablador de mesa',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405571/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_amarillo_7_v2pyf7',
          alt: 'Timbre inalámbrico para restaurantes en negro y amarillo listo para usar',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405574/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_amarillo_8_iobgnw',
          alt: 'Viper para restaurante con sus complementos reloj receptor y pantalla numérica',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405575/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_amarillo_9_zet932',
          alt: 'Llamador de mesa en negro y amarillo rompemuros de muros, columnas y aglomeraciones',
          darkBackground: true
        },
      ]
    },
    {
      id: "negro_negro",
      name: "Negro y Negro",
      thumbnail: {
        src: 'v1754405569/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_negro_1_zvum3c',  
        alt: 'Timbre para restaurante en negro elegante y moderno para mesas',
      },
      media: [
        {
          type: 'image',
          src: 'v1754405569/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_negro_1_zvum3c', 
          alt: 'Timbre para restaurante en negro elegante y moderno para mesas',
        },
        {
          type: 'image',
          src: 'v1754405565/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_negro_2_obik81',   
          alt: 'Medidas de Timbre inalámbrico para restaurantes', 
        },
        {
          type: 'image',
          src: 'v1754405613/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_negro_3_cdlkpe', 
          alt: 'Llamadores para restaurantes en negro utilizados por comensales en grupo',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405590/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_negro_4_duwi78',
          alt: 'Timbre de mesa negro para personal con clientes solicitando atención',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405612/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_negro_5_uhnyv5', 
          alt: 'Sistema de llamado para meseros con botones en negro resaltando tu marca',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405616/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_negro_6_wersl0', 
          alt: 'Timbres para mesas de restaurantes con su complemento hablador de mesa',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405569/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_negro_7_zpnw5w',
          alt: 'Timbre de restaurante negro con botón iluminado y diseño circular',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405574/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_negro_8_craymv',
          alt: 'Viper para restaurante con íconos de llamado junto a reloj receptor y pantallas numéricas',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405580/llamadores_de_meseros_llamador_e2_b_de_2_teclas_negro_negro_9_rr9whl',
          alt: 'Llamador de mesa negro rompemuros de muros, columnas y aglomeraciones',
          darkBackground: true
        },
      ]
    },
    {
      id: "blanco_rojo",
      name: "Blanco y Rojo",
      thumbnail: {
        src: 'v1754405568/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_rojo_1_rrgun7',  
        alt: 'Timbre para restaurante blanco con botón rojo brillante para llamado inmediato',
      },
      media: [
        {
          type: 'image',
          src: 'v1754405568/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_rojo_1_rrgun7', 
          alt: 'Timbre para restaurante blanco con botón rojo brillante para llamado inmediato', 
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405562/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_rojo_2_zs2atb',   
          alt: 'Medidas de Timbre inalámbrico para restaurantes', 
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405587/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_rojo_3_zsef9j', 
          alt: 'Llamadores de meseros blanco-rojo en uso por grupo de clientes', 
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405575/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_rojo_4_wrc1m0',
          alt: 'Timbre de personal en rojo y negro usado por usuarios con atención rápida', 
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405586/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_rojo_5_new0c5', 
          alt: 'Timbres para mesas de restaurantes con botón rojo y base negra moderna',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405613/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_rojo_6_k3ld8e', 
          alt: 'Beeper para restaurantes en rojo y blanco iluminado  con su complemento hablador de mesa',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405570/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_rojo_7_gjiwav',
          alt: 'Timbre de restaurante rojo con blanco activado para llamado de personal',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405573/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_rojo_8_sf0jcd',
          alt: 'Sistema de llamado para meseros en rojo-blanco con opciones en reloj receptor y pantallas',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405570/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_rojo_9_e4rf5a',
          alt: 'Llamadores de mesa para restaurante con diseño rojo rompemuros de muros, columnas y aglomeraciones',
          darkBackground: true
        },
      ]
    },
    {
      id: "blanco_amarillo",
      name: "Blanco y Amarillo",
      thumbnail: {
        src: 'v1754405564/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_amarillo_1_axza96',  
        alt: 'Timbre para restaurante en blanco elegante y moderno para mesas',
      },
      media: [
        {
          type: 'image',
          src: 'v1754405564/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_amarillo_1_axza96', 
          alt: 'Timbre para restaurante en blanco elegante y moderno para mesas',
        },
        {
          type: 'image',
          src: 'v1754405562/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_amarillo_2_fvtbhr',   
          alt: 'Medidas de Timbre inalámbrico para restaurantes', 
        },
        {
          type: 'image',
          src: 'v1754405581/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_amarillo_3_fcrugu', 
          alt: 'Llamadores para restaurantes en blanco utilizados por comensales en grupo',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405570/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_amarillo_4_wvjzkn',
          alt: 'Timbre de mesa blanco para personal con clientes solicitando atención',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405573/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_amarillo_5_y5woht', 
          alt: 'Sistema de llamado para meseros con botones en blanco resaltando tu marca',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405587/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_amarillo_6_fodu2g', 
          alt: 'Timbres para mesas de restaurantes con su complemento hablador de mesa',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405565/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_amarillo_7_aaoyow',
          alt: 'Timbre de restaurante blanco con botón iluminado y diseño circular',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405564/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_amarillo_8_k3myo6',
          alt: 'Viper para restaurante con íconos de llamado junto a reloj receptor y pantallas numéricas',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405566/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_amarillo_9_eebjm8',
          alt: 'Llamador de mesa blanco rompemuros de muros, columnas y aglomeraciones',
          darkBackground: true
        },
      ]
    },
    {
      id: "blanco_negro",
      name: "Blanco y Negro",
      thumbnail: {
        src: 'v1754405563/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_negro_1_ttimdl',  
        alt: 'Timbre para restaurante en blanco elegante y moderno para mesas',
      },
      media: [
        {
          type: 'image',
          src: 'v1754405563/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_negro_1_ttimdl', 
          alt: 'Timbre para restaurante en blanco elegante y moderno para mesas',
        },
        {
          type: 'image',
          src: 'v1754405562/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_negro_2_xpxdee',   
          alt: 'Medidas de Timbre inalámbrico para restaurantes', 
        },
        {
          type: 'image',
          src: 'v1754405581/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_negro_3_hx7a89', 
          alt: 'Llamadores para restaurantes en blanco utilizados por comensales en grupo',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405572/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_negro_4_hjvtyn',
          alt: 'Timbre de mesa blanco para personal con clientes solicitando atención',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405575/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_negro_5_nxafy8', 
          alt: 'Sistema de llamado para meseros con botones en negro resaltando tu marca',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405588/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_negro_6_cqwzvj', 
          alt: 'Timbres para mesas de restaurantes con su complemento hablador de mesa',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405564/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_negro_7_fjxwqw',
          alt: 'Timbre de restaurante blanco con botón iluminado y diseño circular',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405567/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_negro_8_kwwxki',
          alt: 'Viper para restaurante con íconos de llamado junto a reloj receptor y pantallas numéricas',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754405568/llamadores_de_meseros_llamador_e2_b_de_2_teclas_blanco_negro_9_ewbrno',
          alt: 'Llamador de mesa blanco rompemuros de muros, columnas y aglomeraciones',
          darkBackground: true
        },
      ]
    },
  ],
  defaultColor: "negro_rojo",
  hasColors: true,
  compatibleConProducts: [
    habladorDeMesa,
    relojReceptorDeLlamados,
    pantallaT1B,
    pantallaT6, 
    controlNumerico,
  ]
};