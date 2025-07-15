import styles from "./galeria-ver-mas.module.scss";
import GalleryWrapper from "./components/gallery-wrapper";
import InfoContainer from "./components/info-container";
import { ProductColorProvider } from "@/contexts/ProductColorContext";

const defaultProps = {
  title: "",
  description: "",
  media: [], // Para productos sin colores
  colors: [], // Lista de colores, cada uno con su propia colección de media
  defaultColor: null
};

const GaleriaVerMas = ({ verMasInformacion = defaultProps }) => {
  const { title, description, media, colors, defaultColor } = verMasInformacion;
  const hasColors = colors && colors.length > 0;

  if (!media && !hasColors) {
    return (
      <div className={styles.container}>
        <p className={styles.emptyMessage}>No hay contenido disponible</p>
      </div>
    );
  }

  const content = (
    <section className={styles.container}>
      <GalleryWrapper 
        media={media}
        colors={colors}
        hasColors={hasColors}
        productTitle={title}
      />

      <InfoContainer 
        title={title}
        description={description}
      />
    </section>
  );

  if (hasColors) {
    return (
      <ProductColorProvider 
        colors={colors} 
        defaultColor={defaultColor}
      >
        {content}
      </ProductColorProvider>
    );
  }

  return content;
};

export default GaleriaVerMas;

/*
Tipos de datos:

interface MediaBase {
  type: 'image' | 'video';
}

interface ImageMedia extends MediaBase {
  type: 'image';
  src: string;          // URL de la imagen
  alt?: string;         // Texto alternativo
  width: number;        // Ancho original
  height: number;       // Alto original
}

interface VideoMedia extends MediaBase {
  type: 'video';
  url: string;          // URL del video en Cloudinary
  thumbnail: string;    // URL de la miniatura
}

interface Color {
  id: string;          // Identificador único del color
  name: string;        // Nombre para mostrar
  value: string;       // Valor hexadecimal o RGB
  media: (ImageMedia | VideoMedia)[]; // Media específica para este color
}

interface ProductInfo {
  // Información básica del producto
  title: string;       // Título del producto
  description: string; // Descripción del producto

  // Contenido multimedia (solo uno de estos dos debe estar presente)
  media?: (ImageMedia | VideoMedia)[]; // Para productos sin colores
  colors?: Color[];    // Para productos con colores
  defaultColor?: string; // ID del color por defecto (requerido si hay colors)
}

Ejemplos de uso:

// 1. Producto simple sin colores
const simpleProduct = {
  title: "Dispensador de turnos",
  description: "Dispensador automático de turnos para filas",
  media: [
    {
      type: 'video',
      url: 'https://res.cloudinary.com/tu-cloud/dispensador-demo.mp4',
      thumbnail: 'https://res.cloudinary.com/tu-cloud/dispensador-thumb.jpg'
    },
    {
      type: 'image',
      src: '/dispensador-frontal.jpg',
      alt: 'Vista frontal del dispensador',
      width: 800,
      height: 600
    }
  ]
};

// 2. Producto con colores - cada color tiene su propia colección de media
const productWithColors = {
  title: "Llamador de meseros",
  description: "Sistema de llamado para restaurantes",
  colors: [
    {
      id: "negro",
      name: "Negro",
      value: "#000000",
      media: [
        {
          type: 'video',
          url: 'https://res.cloudinary.com/tu-cloud/llamador-negro-demo.mp4',
          thumbnail: 'https://res.cloudinary.com/tu-cloud/llamador-negro-thumb.jpg'
        },
        {
          type: 'image',
          src: '/llamador-negro-frontal.jpg',
          alt: 'Llamador negro - Vista frontal',
          width: 800,
          height: 600
        }
      ]
    },
    {
      id: "blanco",
      name: "Blanco",
      value: "#FFFFFF",
      media: [
        {
          type: 'video',
          url: 'https://res.cloudinary.com/tu-cloud/llamador-blanco-demo.mp4',
          thumbnail: 'https://res.cloudinary.com/tu-cloud/llamador-blanco-thumb.jpg'
        },
        {
          type: 'image',
          src: '/llamador-blanco-frontal.jpg',
          alt: 'Llamador blanco - Vista frontal',
          width: 800,
          height: 600
        }
      ]
    }
  ],
  defaultColor: "negro"
};
*/ 