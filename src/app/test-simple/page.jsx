"use client";

import GaleriaVerMas from '@/components/galeria-ver-mas/GaleriaVerMas';

const TestSimple = () => {
  // Producto sin colores (para verificar compatibilidad)
  const productWithoutColors = {
    title: "Producto Simple",
    description: "Un producto sin colores para verificar que funciona correctamente.",
    images: [
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1745247230/Frame_1_35_vku1gs.webp",
        alt: "Imagen 1"
      },
      {
        src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1741637817/Frame_1_57_fsalbd.webp",
        alt: "Imagen 2"
      }
    ]
  };

  // Producto con colores (para verificar funcionalidad completa)
  const productWithColors = {
    title: "Producto con Colores",
    description: "Un producto con colores para verificar la funcionalidad completa.",
    colors: [
      {
        id: "rojo",
        name: "Rojo",
        hex: "#FF0000",
        images: [
          {
            src: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1744828999/Frame_1_32_tg1wjk.webp",
            alt: "Producto rojo"
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
            alt: "Producto azul"
          }
        ]
      }
    ],
    defaultColor: "rojo"
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Prueba Simple de Galería</h1>
      
      <h2>1. Producto sin colores:</h2>
      <GaleriaVerMas verMasInformacion={productWithoutColors} />
      
      <hr style={{ margin: '40px 0' }} />
      
      <h2>2. Producto con colores:</h2>
      <GaleriaVerMas verMasInformacion={productWithColors} />
    </div>
  );
};

export default TestSimple; 