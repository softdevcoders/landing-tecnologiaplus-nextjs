import GaleriaVerMas from '@/components/galeria-ver-mas/GaleriaVerMas';

function ProductGalleryNew() {
  const productInfo = {
    title: "LLAMADOR DE MESEROS E2-N CON TECLA PAGAR",
    description: "Llamador de meseros inalámbrico para reducir tiempo de espera, ideal en restaurantes, hoteles, bares, cafés y salas VIP. La mejor forma de agilizar el servicio. Permite llamar al mesero y pedir la cuenta.",
    colors: [
      {
        id: "negro",
        name: "Negro",
        thumbnail: {
          src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq',
          alt: 'Llamador de meseros E2-N negro vista principal',
          width: 1381,
          height: 1442
        },
        media: [
          {
            type: 'video',
            url: 'https://res.cloudinary.com/ddqh0mkx9/video/upload/v1750185556/website-v2/images/landings/llamadores-de-meseros/ver-mas/llamadores-de-meseros/llamador-de-meseros-e2-b/videos/zm7deogzrlnnfj6hznbv.mp4',
            thumbnail: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he'
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
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq',
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
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq',
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
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq',
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
          src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq',
          alt: 'Llamador de meseros E2-N negro vista principal',
          width: 1381,
          height: 1442
        },
        media: [
          {
            type: 'video',
            url: 'https://res.cloudinary.com/ddqh0mkx9/video/upload/v1743040123/Frame_1_9_tdu2he',
            thumbnail: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he'
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
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq',
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
            src: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq',
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
      }
    ],
    defaultColor: "negro"
  };

  return (
    <GaleriaVerMas verMasInformacion={productInfo} />
  );
}

export default ProductGalleryNew; 