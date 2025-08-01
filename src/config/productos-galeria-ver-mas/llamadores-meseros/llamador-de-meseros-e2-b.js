import { routes } from "@/config/routes";
import { controlNumerico } from "@/config/productos-galeria-ver-mas/llamadores-meseros/control-numerico";
import { habladorDeMesa } from "@/config/productos-galeria-ver-mas/llamadores-meseros/hablador-de-mesa";
import { relojReceptorDeLlamados } from "@/config/productos-galeria-ver-mas/llamadores-meseros/reloj-receptor-de-llamados";

const mainImage = {
  src: 'v1754070595/llamador_e2_b_de_2_teclas_negro_rojo_1_oi6rrv',
  alt: 'Llamador de meseros E2-B negro y rojo vista principal',
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
          src: 'https://res.cloudinary.com/ddqh0mkx9/video/upload/v1754070602/llamador_e2_b_de_2_teclas_negro_rojo_2_pffe7w.mp4',
          alt: 'Llamador de meseros E2-B negro y rojo vista principal - 2',
          thumbnail: 'so_0/v1754070602/llamador_e2_b_de_2_teclas_negro_rojo_2_pffe7w', 
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754070595/llamador_e2_b_de_2_teclas_negro_rojo_3_srtnbz',     
          alt: 'Llamador de meseros E2-B negro y rojo vista principal - 2',
        },
        {
          type: 'image',
          src: 'v1754070601/llamador_e2_b_de_2_teclas_negro_rojo_4_ylmsj3', 
          alt: 'Llamador de meseros E2-B negro y rojo vista principal - 3',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754070595/llamador_e2_b_de_2_teclas_negro_rojo_5_bv6j7e',
          alt: 'Llamador de meseros E2-B negro y rojo vista principal - 4',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754070599/llamador_e2_b_de_2_teclas_negro_rojo_6_iw2wjx',  
          alt: 'Llamador de meseros E2-B negro y rojo vista principal - 5',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754070601/llamador_e2_b_de_2_teclas_negro_rojo_7_bnnqdk',  
          alt: 'Llamador de meseros E2-B negro y rojo vista principal - 6',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754070594/llamador_e2_b_de_2_teclas_negro_rojo_8_ebrqrx',    
          alt: 'Llamador de meseros E2-B negro y rojo vista principal - 7',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754070595/llamador_e2_b_de_2_teclas_negro_rojo_9_efjug7',    
          alt: 'Llamador de meseros E2-B negro y rojo vista principal - 7',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1754070599/llamador_e2_b_de_2_teclas_negro_rojo_10_vcxtna',    
          alt: 'Llamador de meseros E2-B negro y rojo vista principal - 7',
          darkBackground: true
        },
      ]
    },
    {
      id: "negro_amarillo",
      name: "Negro y Amarillo",
      thumbnail: {
        src: 'v1753973014/llamador_e2_b_de_2_teclas_negro_amarillo_12_waqi0z',  
        alt: 'Llamador de meseros E2-B negro y amarillo vista principal',
      },
      media: [
        {
          type: 'image',
          src: 'v1753973014/llamador_e2_b_de_2_teclas_negro_amarillo_12_waqi0z', 
          alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 1',
          darkBackground: true
        },

        {
          type: 'image',
          src: 'v1753973110/llamador_e2_b_de_2_teclas_negro_amarillo_8_ykycrn',
          alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 2', 
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1753973111/llamador_e2_b_de_2_teclas_negro_amarillo_9_m0pe12', 
          alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 3',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1753973040/llamador_e2_b_de_2_teclas_negro_amarillo_10_lzrfzo',
          alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 4', 
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1753973150/llamador_e2_b_de_2_teclas_negro_amarillo_11_viqyi1',
          alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 5',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1753973015/llamador_e2_b_de_2_teclas_negro_amarillo_13_x8x17j', 
          alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 6',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1753973017/llamador_e2_b_de_2_teclas_negro_amarillo_14_ihrdul',
          alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 7',
          darkBackground: true
        },
      ]
    },
    {
      id: "negro_negro",
      name: "Negro y Negro",
      thumbnail: {
        src: 'v1753973026/llamador_e2_b_de_2_teclas_negro_negro_19_bl8l7p',  
        alt: 'Llamador de meseros E2-B negro y negro vista principal',
      },
      media: [
        {
          type: 'image',
          src: 'v1753973026/llamador_e2_b_de_2_teclas_negro_negro_19_bl8l7p', 
          alt: 'Llamador de meseros E2-B negro y negro vista principal - 1',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1753973053/llamador_e2_b_de_2_teclas_negro_negro_15_gxg2ft',   
          alt: 'Llamador de meseros E2-B negro y negro vista principal - 2', 
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1753973035/llamador_e2_b_de_2_teclas_negro_negro_16_q0q6dz', 
          alt: 'Llamador de meseros E2-B negro y negro vista principal - 3',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1753973034/llamador_e2_b_de_2_teclas_negro_negro_17_pwatas',
          alt: 'Llamador de meseros E2-B negro y negro vista principal - 4',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1753973031/llamador_e2_b_de_2_teclas_negro_negro_18_eo24n7', 
          alt: 'Llamador de meseros E2-B negro y negro vista principal - 5',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1753973017/llamador_e2_b_de_2_teclas_negro_negro_20_jxcr0y', 
          alt: 'Llamador de meseros E2-B negro y negro vista principal - 6',
          darkBackground: true
        },
        {
          type: 'image',
          src: 'v1753973013/llamador_e2_b_de_2_teclas_negro_negro_21_izogwa',
          alt: 'Llamador de meseros E2-B negro y negro vista principal - 7',
          darkBackground: true
        },
      ]
    }
  ],
  defaultColor: "negro_rojo",
  hasColors: true,
  compatibleConProducts: [
    controlNumerico,
    habladorDeMesa,
    relojReceptorDeLlamados,
  ]
};