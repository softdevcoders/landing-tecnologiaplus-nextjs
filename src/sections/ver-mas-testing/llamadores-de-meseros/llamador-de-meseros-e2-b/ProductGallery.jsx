import GaleriaVerMas from '@/components/galeria-ver-mas/GaleriaVerMas';
import { routes } from '@/config/routes';

function ProductGallery() {
  const productInfo = {
    title: "LLAMADOR DE MESEROS E2-B", 
    description: "Permite llamar al mesero y borrar el llamado al ser atendido.",
    colors: [
      {
        id: "negro_rojo",
        name: "Negro y Rojo",
        thumbnail: {
          src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_85/v1753973028/llamador_e2_b_de_2_teclas_negro_rojo_5_djowrm',
          alt: 'Llamador de meseros E2-B negro y rojo vista principal', 
          width: 85, 
          height: 85
        },
        media: [
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973028/llamador_e2_b_de_2_teclas_negro_rojo_5_djowrm',   
            alt: 'Llamador de meseros E2-B negro y rojo vista principal - 1',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973032/llamador_e2_b_de_2_teclas_negro_rojo_1_y6fhaj',     
            alt: 'Llamador de meseros E2-B negro y rojo vista principal - 2',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973127/llamador_e2_b_de_2_teclas_negro_rojo_2_yzg6ks', 
            alt: 'Llamador de meseros E2-B negro y rojo vista principal - 3',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973023/llamador_e2_b_de_2_teclas_negro_rojo_3_grufj1',
            alt: 'Llamador de meseros E2-B negro y rojo vista principal - 4',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973123/llamador_e2_b_de_2_teclas_negro_rojo_4_jtuvam',  
            alt: 'Llamador de meseros E2-B negro y rojo vista principal - 5',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973028/llamador_e2_b_de_2_teclas_negro_rojo_6_yh4mx7',  
            alt: 'Llamador de meseros E2-B negro y rojo vista principal - 6',
            width: 780, 
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973025/llamador_e2_b_de_2_teclas_negro_rojo_7_nv6s8k',    
            alt: 'Llamador de meseros E2-B negro y rojo vista principal - 7',
            width: 780,
            height: 780,
            darkBackground: true
          },
        ]
      },
      {
        id: "negro_amarillo",
        name: "Negro y Amarillo",
        thumbnail: {
          src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_85/v1753973014/llamador_e2_b_de_2_teclas_negro_amarillo_12_waqi0z',  
          alt: 'Llamador de meseros E2-B negro y amarillo vista principal',
          width: 85,
          height: 85
        },
        media: [
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973014/llamador_e2_b_de_2_teclas_negro_amarillo_12_waqi0z', 
            alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 1',
            width: 780,
            height: 780,
            darkBackground: true
          },

          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973110/llamador_e2_b_de_2_teclas_negro_amarillo_8_ykycrn',
            alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 2', 
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973111/llamador_e2_b_de_2_teclas_negro_amarillo_9_m0pe12', 
            alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 3',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973040/llamador_e2_b_de_2_teclas_negro_amarillo_10_lzrfzo',
            alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 4',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973150/llamador_e2_b_de_2_teclas_negro_amarillo_11_viqyi1',
            alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 5',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973015/llamador_e2_b_de_2_teclas_negro_amarillo_13_x8x17j', 
            alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 6',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973017/llamador_e2_b_de_2_teclas_negro_amarillo_14_ihrdul',
            alt: 'Llamador de meseros E2-B negro y amarillo vista principal - 7',
            width: 780,
            height: 780,
            darkBackground: true
          },
        ]
      },
      {
        id: "negro_negro",
        name: "Negro y Negro",
        thumbnail: {
          src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_85/v1753973026/llamador_e2_b_de_2_teclas_negro_negro_19_bl8l7p',  
          alt: 'Llamador de meseros E2-B negro y negro vista principal',
          width: 85,
          height: 85
        },
        media: [
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973026/llamador_e2_b_de_2_teclas_negro_negro_19_bl8l7p', 
            alt: 'Llamador de meseros E2-B negro y negro vista principal - 1',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973053/llamador_e2_b_de_2_teclas_negro_negro_15_gxg2ft',   
            alt: 'Llamador de meseros E2-B negro y negro vista principal - 2', 
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973035/llamador_e2_b_de_2_teclas_negro_negro_16_q0q6dz', 
            alt: 'Llamador de meseros E2-B negro y negro vista principal - 3',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973034/llamador_e2_b_de_2_teclas_negro_negro_17_pwatas',
            alt: 'Llamador de meseros E2-B negro y negro vista principal - 4',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973031/llamador_e2_b_de_2_teclas_negro_negro_18_eo24n7', 
            alt: 'Llamador de meseros E2-B negro y negro vista principal - 5',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973017/llamador_e2_b_de_2_teclas_negro_negro_20_jxcr0y', 
            alt: 'Llamador de meseros E2-B negro y negro vista principal - 6',
            width: 780,
            height: 780,
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_780/v1753973013/llamador_e2_b_de_2_teclas_negro_negro_21_izogwa',
            alt: 'Llamador de meseros E2-B negro y negro vista principal - 7',
            width: 780,
            height: 780,
            darkBackground: true
          },
        ]
      }
    ],
    defaultColor: "negro_rojo",
    hasColors: true,
    compatibleConProducts: [
      {
        name: 'Llamador de meseros E2-N negro vista principal',
        description: 'Permite llamar al mesero y borrar el llamado al ser atendido.',
        link: routes.landings.llamadoresDeMeseros.children.e2_b.url,
        image: {
          url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_85/v1738694394/2_2x-8_1_yojp4b',
          alt: 'Llamador de meseros E2-B blanco vista principal',
        },
      },
      {
        name: 'Llamador de meseros E2-N negro vista principal',
        description: 'Resalta tu marca con un espacio adecuado para el botón',
        link: routes.landings.llamadoresDeMeseros.children.habladorDeMesa.url,
        image: {
          url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_85/v1738694393/3_2x-8_igijiu',
          alt: 'Hablador de mesa junto al botón para llamar al mesero',
        },
      },
      {
        name: 'Llamador de meseros E2-N negro vista principal',
        description: 'Para llamar empleados o meseros desde cocina',
        link: routes.landings.llamadoresDeMeseros.children.controlNumerico.url,
        image: {
          url: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/f_webp,w_85/v1738694391/4_2x-8_mioq3p',
          alt: 'Control numérico para cocina',
        },
      },
    ]
  };

  return (
    <GaleriaVerMas verMasInformacion={productInfo} />
  );
}

export default ProductGallery; 