"use client";

import GaleriaVerMas from '../GaleriaVerMas';

/**
 * Ejemplo de producto con múltiples colores
 * Basado en el producto de rollos de fichos para turnos
 */
const ProductWithColors = () => {
  const productInfo = {
    title: "Rollos de Fichos para Turnos",
    description: "Rollos de fichos para sistema de turnos. Disponibles en diferentes colores para organizar mejor tu negocio.",
    
    // Imágenes principales (fallback)
    images: [
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745247230/Frame_1_35_vku1gs.webp",
        alt: "Rollo de fichos principal"
      },
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
        alt: "Rollo de fichos vista 2"
      }
    ],
    
    // Colores disponibles con sus respectivas imágenes
    colors: [
      {
        id: "blanco",
        name: "Blanco",
        hex: "#FFFFFF",
        images: [
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744828999/Frame_1_32_tg1wjk.webp",
            alt: "Rollo blanco vista principal"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
            alt: "Rollo blanco vista lateral"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638118/Frame_1_58_r0vivt.webp",
            alt: "Rollo blanco vista detalle"
          }
        ]
      },
      {
        id: "verde",
        name: "Verde",
        hex: "#00FF00",
        images: [
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744828998/Frame_1_31_mxuqgk.webp",
            alt: "Rollo verde vista principal"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
            alt: "Rollo verde vista lateral"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1740762871/10_4x-8_4_zewff6.webp",
            alt: "Rollo verde vista detalle"
          }
        ]
      },
      {
        id: "rosa",
        name: "Rosa",
        hex: "#FF69B4",
        images: [
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744828998/Frame_1_33_t0xzlo.webp",
            alt: "Rollo rosa vista principal"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
            alt: "Rollo rosa vista lateral"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638118/Frame_1_58_r0vivt.webp",
            alt: "Rollo rosa vista detalle"
          }
        ]
      },
      {
        id: "amarillo",
        name: "Amarillo",
        hex: "#FFFF00",
        images: [
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744828459/Frame_1_30_rfuvow.webp",
            alt: "Rollo amarillo vista principal"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
            alt: "Rollo amarillo vista lateral"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743562353/Frame_1_10_amnnfc.webp",
            alt: "Rollo amarillo medidas"
          }
        ]
      },
      {
        id: "azul",
        name: "Azul",
        hex: "#0000FF",
        images: [
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744828998/Frame_1_34_trumlj.webp",
            alt: "Rollo azul vista principal"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
            alt: "Rollo azul vista lateral"
          },
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638118/Frame_1_58_r0vivt.webp",
            alt: "Rollo azul vista detalle"
          }
        ]
      }
    ],
    
    // Color por defecto
    defaultColor: "blanco"
  };

  return (
    <div>
      <h1>Ejemplo de Producto con Colores</h1>
      <GaleriaVerMas verMasInformacion={productInfo} />
    </div>
  );
};

export default ProductWithColors;

/**
 * Ejemplo de producto sin colores (compatibilidad hacia atrás)
 */
export const ProductWithoutColors = () => {
  const productInfo = {
    title: "Producto Simple",
    description: "Un producto sin opciones de color, funciona igual que antes.",
    images: [
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745247230/Frame_1_35_vku1gs.webp",
        alt: "Producto vista 1"
      },
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
        alt: "Producto vista 2"
      }
    ]
  };

  return (
    <div>
      <h1>Ejemplo de Producto sin Colores</h1>
      <GaleriaVerMas verMasInformacion={productInfo} />
    </div>
  );
};

/**
 * Ejemplo de producto con colores complejos (gradientes)
 */
export const ProductWithGradients = () => {
  const productInfo = {
    title: "Producto con Colores Especiales",
    description: "Producto con colores gradientes y efectos especiales.",
    colors: [
      {
        id: "sunset",
        name: "Atardecer",
        gradient: "45deg, #ff6b6b, #ffa500",
        images: [
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745247230/Frame_1_35_vku1gs.webp",
            alt: "Producto atardecer"
          }
        ]
      },
      {
        id: "ocean",
        name: "Océano",
        gradient: "135deg, #667eea, #764ba2",
        images: [
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
            alt: "Producto océano"
          }
        ]
      },
      {
        id: "forest",
        name: "Bosque",
        gradient: "45deg, #11998e, #38ef7d",
        images: [
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741638118/Frame_1_58_r0vivt.webp",
            alt: "Producto bosque"
          }
        ]
      }
    ],
    defaultColor: "sunset"
  };

  return (
    <div>
      <h1>Ejemplo de Producto con Gradientes</h1>
      <GaleriaVerMas verMasInformacion={productInfo} />
    </div>
  );
}; 