import GaleriaVerMas from '@/components/galeria-ver-mas/GaleriaVerMas';
import { routes } from '@/config/routes';

function ProductGalleryNew() {
  const productInfo = {
    title: "Llamado de meseros E2-B", 
    description: "Permite llamar al mesero y borrar el llamado al ser atendido.",
    colors: [
      {
        id: "negro",
        name: "Negro",
        thumbnail: {
          src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039510/Frame_2_5_fznqyt',
          alt: 'Llamador de meseros E2-N negro vista principal',
          width: 1383,
          height: 1383
        },
        media: [
          {
            type: 'video',
            url: 'https://res.cloudinary.com/ddqh0mkx9/video/upload/v1750185556/website-v2/images/landings/llamadores-de-meseros/ver-mas/llamadores-de-meseros/llamador-de-meseros-e2-b/videos/zm7deogzrlnnfj6hznbv.mp4',
            thumbnail: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he',
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497011/20_4x-8_onyawh',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },          
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497011/19_4x-8_jxofor',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497010/21_4x-8_1_zysjdc',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740497010/17_4x-8_1_bykczq',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741632153/Frame_1_41_whqmii',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743026399/16_4x-8_h030co',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },
        ]
      },
      {
        id: "blanco",
        name: "Blanco",
        thumbnail: {
          src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039509/Frame_2_6_qar5li',
          alt: 'Llamador de meseros E2-N negro vista principal',
          width: 1138,
          height: 1138
        },
        media: [
          {
            type: 'video',
            url: 'https://res.cloudinary.com/ddqh0mkx9/video/upload/v1750185556/website-v2/images/landings/llamadores-de-meseros/ver-mas/llamadores-de-meseros/llamador-de-meseros-e2-b/videos/zm7deogzrlnnfj6hznbv.mp4',
            thumbnail: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638695/Frame_1_60_sl57gi',
            darkBackground: true
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039882/5_4x-8_wzjgam',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/7_4x-8_1_saux20',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/3_4x-8_wiiwjz',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },
          {
            type: 'image',
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he',
            alt: 'Llamador de meseros E2-N negro vista principal',
            width: 1381,
            height: 1442
          },
        ]
      }
    ],
    defaultColor: "negro",
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

export default ProductGalleryNew; 