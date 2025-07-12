import GaleriaVerMas from '@/components/galeria-ver-mas/GaleriaVerMas';
import styles from "@/styles/ProductGallery.module.scss";

function ProductGalleryNew() {
  // Datos del producto migrados al nuevo formato
  const productInfo = {
    title: "LLAMADOR DE MESEROS E2-N CON TECLA PAGAR",
    description: "Llamador de meseros inalámbrico para reducir tiempo de espera, ideal en restaurantes, hoteles, bares, cafés y salas VIP. La mejor forma de agilizar el servicio. Permite llamar al mesero y pedir la cuenta.",
    
    // Imágenes principales (fallback)
    images: [
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq",
        alt: "Llamador de meseros E2-N vista principal",
        width: 1381,
        height: 1442
      },
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039882/5_4x-8_wzjgam",
        alt: "Llamador de meseros E2-N vista lateral",
        width: 1381,
        height: 1442
      },
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/7_4x-8_1_saux20",
        alt: "Llamador de meseros E2-N vista detalle",
        width: 1381,
        height: 1443
      },
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/3_4x-8_wiiwjz",
        alt: "Llamador de meseros E2-N vista uso",
        width: 1381,
        height: 1442
      },
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he",
        alt: "Llamador de meseros E2-N medidas",
        width: 1385,
        height: 1090
      }
    ],
    
    // Colores disponibles con sus respectivas imágenes
    colors: [
      {
        id: "negro",
        name: "Negro",
        hex: "#000000",
        images: [
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039510/Frame_2_5_fznqyt",
            alt: "Llamador de meseros E2-N color negro",
            width: 1381,
            height: 1442
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq",
            alt: "Llamador de meseros E2-N negro vista principal",
            width: 1381,
            height: 1442
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039882/5_4x-8_wzjgam",
            alt: "Llamador de meseros E2-N negro vista lateral",
            width: 1381,
            height: 1442
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he",
            alt: "Llamador de meseros E2-N negro medidas",
            width: 1385,
            height: 1090
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039510/Frame_2_5_fznqyt",
            alt: "Llamador de meseros E2-N color negro",
            width: 1381,
            height: 1442
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq",
            alt: "Llamador de meseros E2-N negro vista principal",
            width: 1381,
            height: 1442
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039882/5_4x-8_wzjgam",
            alt: "Llamador de meseros E2-N negro vista lateral",
            width: 1381,
            height: 1442
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he",
            alt: "Llamador de meseros E2-N negro medidas",
            width: 1385,
            height: 1090
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039510/Frame_2_5_fznqyt",
            alt: "Llamador de meseros E2-N color negro",
            width: 1381,
            height: 1442
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq",
            alt: "Llamador de meseros E2-N negro vista principal",
            width: 1381,
            height: 1442
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039882/5_4x-8_wzjgam",
            alt: "Llamador de meseros E2-N negro vista lateral",
            width: 1381,
            height: 1442
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he",
            alt: "Llamador de meseros E2-N negro medidas",
            width: 1385,
            height: 1090
          }
        ]
      },
      {
        id: "blanco",
        name: "Blanco",
        hex: "#FFFFFF",
        images: [
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039509/Frame_2_6_qar5li",
            alt: "Llamador de meseros E2-N color blanco",
            width: 1381,
            height: 1442
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/7_4x-8_1_saux20",
            alt: "Llamador de meseros E2-N blanco vista detalle",
            width: 1381,
            height: 1443
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/3_4x-8_wiiwjz",
            alt: "Llamador de meseros E2-N blanco vista uso",
            width: 1381,
            height: 1442
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he",
            alt: "Llamador de meseros E2-N blanco medidas",
            width: 1385,
            height: 1090
          }
        ]
      }
    ],
    
    // Color por defecto
    defaultColor: "negro"
  };

  return (
    <section className={styles.hero}>
      <div style={{ padding: '20px 0' }}>
        {/* Usar el nuevo componente GaleriaVerMas */}
        <GaleriaVerMas verMasInformacion={productInfo} />
      </div>
    </section>
  );
}

export default ProductGalleryNew; 