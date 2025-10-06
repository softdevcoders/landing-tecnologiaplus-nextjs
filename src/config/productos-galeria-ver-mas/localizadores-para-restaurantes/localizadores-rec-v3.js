import { routes } from "@/config/routes";
import { controlNumerico } from "@/config/productos-galeria-ver-mas/llamadores-meseros/control-numerico";
import { habladorDeMesa } from "@/config/productos-galeria-ver-mas/llamadores-meseros/hablador-de-mesa";
import { relojReceptorDeLlamados } from "@/config/productos-galeria-ver-mas/llamadores-meseros/reloj-receptor-de-llamados";
import { pantallaT1B } from "@/config/productos-galeria-ver-mas/llamadores-meseros/pantalla-t1-b";
import { pantallaT6 } from "@/config/productos-galeria-ver-mas/llamadores-meseros/pantalla-t6";

// Inverntar un cambio

const mainImage = {
  src: 'v1757338389/llamador_meseros_e2b_negro_rojo_2teclas',
  alt: 'Llamador de meseros E2-B negro y rojo con 2 teclas para restaurante.',
  title: 'Llamador de meseros E2-B negro y rojo de 2 teclas.'
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
    {
      type: 'video',
      src: 'v1757338405/timbre_de_restaurante_modelo_e2b_video.mp4',
      alt: 'Demostración de timbre de restaurante modelo E2-B en funcionamiento.',
      title: 'Timbre de restaurante modelo E2-B.',
      thumbnail: 'so_0/v1754070602/llamador_e2_b_de_2_teclas_negro_rojo_2_pffe7w', 
      darkBackground: true
    },
  ],
  compatibleConProducts: [
    habladorDeMesa,
    relojReceptorDeLlamados,
    pantallaT1B,
    pantallaT6, 
    controlNumerico,
  ]
};