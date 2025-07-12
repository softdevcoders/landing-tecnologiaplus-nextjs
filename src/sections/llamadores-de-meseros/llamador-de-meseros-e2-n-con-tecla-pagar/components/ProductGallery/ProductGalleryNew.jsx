"use client";

import GaleriaVerMas from '@/components/galeria-ver-mas/GaleriaVerMas';
import TinesPreguntasButton from "@/components/tines-preguntas-button";
import BackButton from "@/components/back-button";
import styles from "@/styles/ProductGallery.module.scss";

function ProductGalleryNew() {
  // Datos del producto migrados al nuevo formato
  const productInfo = {
    title: "LLAMADOR DE MESEROS E2-N CON TECLA PAGAR",
    description: "Llamador de meseros inalámbrico para reducir tiempo de espera, ideal en restaurantes, hoteles, bares, cafés y salas VIP. La mejor forma de agilizar el servicio. Permite llamar al mesero y pedir la cuenta.",
    
    // Imágenes principales (fallback)
    images: [
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq.webp",
        alt: "Llamador de meseros E2-N vista principal"
      },
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039882/5_4x-8_wzjgam.webp",
        alt: "Llamador de meseros E2-N vista lateral"
      },
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/7_4x-8_1_saux20.webp",
        alt: "Llamador de meseros E2-N vista detalle"
      },
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/3_4x-8_wiiwjz.webp",
        alt: "Llamador de meseros E2-N vista uso"
      },
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he.webp",
        alt: "Llamador de meseros E2-N medidas"
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
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039510/Frame_2_5_fznqyt.webp",
            alt: "Llamador de meseros E2-N color negro"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq.webp",
            alt: "Llamador de meseros E2-N negro vista principal"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039882/5_4x-8_wzjgam.webp",
            alt: "Llamador de meseros E2-N negro vista lateral"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he.webp",
            alt: "Llamador de meseros E2-N negro medidas"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039510/Frame_2_5_fznqyt.webp",
            alt: "Llamador de meseros E2-N color negro"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq.webp",
            alt: "Llamador de meseros E2-N negro vista principal"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039882/5_4x-8_wzjgam.webp",
            alt: "Llamador de meseros E2-N negro vista lateral"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he.webp",
            alt: "Llamador de meseros E2-N negro medidas"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039510/Frame_2_5_fznqyt.webp",
            alt: "Llamador de meseros E2-N color negro"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/6_4x-8_1_jbkzeq.webp",
            alt: "Llamador de meseros E2-N negro vista principal"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039882/5_4x-8_wzjgam.webp",
            alt: "Llamador de meseros E2-N negro vista lateral"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he.webp",
            alt: "Llamador de meseros E2-N negro medidas"
          }
        ]
      },
      {
        id: "blanco",
        name: "Blanco",
        hex: "#FFFFFF",
        images: [
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039509/Frame_2_6_qar5li.webp",
            alt: "Llamador de meseros E2-N color blanco"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/7_4x-8_1_saux20.webp",
            alt: "Llamador de meseros E2-N blanco vista detalle"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743039883/3_4x-8_wiiwjz.webp",
            alt: "Llamador de meseros E2-N blanco vista uso"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he.webp",
            alt: "Llamador de meseros E2-N blanco medidas"
          }
        ]
      }
    ],
    
    // Color por defecto
    defaultColor: "negro"
  };

  return (
    <section className={styles.hero}>
      <div className={styles.action__nav}>
        <BackButton /> 
      </div>

      <div style={{ padding: '20px 0' }}>
        {/* Usar el nuevo componente GaleriaVerMas */}
        <GaleriaVerMas verMasInformacion={productInfo} />
        
        {/* Botón de contacto */}
        <div className={styles.container__contact__info} style={{ marginTop: '20px', textAlign: 'center' }}>
          <TinesPreguntasButton styles={styles} />
        </div>
      </div>
    </section>
  );
}

export default ProductGalleryNew; 