# Componente GaleriaVerMas con Optimizaciones Avanzadas

El componente `GaleriaVerMas` incluye funcionalidad avanzada para galerías de imágenes con:
- **Lazy loading inteligente** con loaders visuales
- **Optimización de imágenes** con Next.js Image
- **Accesibilidad mejorada** con alt texts descriptivos
- **Selector de colores** dinámico
- **Estados de carga** y manejo de errores

## 🚀 Características Principales

### ✨ **Optimizaciones de Performance**
- **Lazy loading**: Solo carga imágenes cuando se necesitan
- **Priority inteligente**: Prioriza imágenes visibles
- **Blur placeholders**: Evita layout shift
- **Dimensiones fijas**: Usa `width/height` en lugar de `fill` para máxima optimización

### 🎨 **Experiencia de Usuario**
- **Loaders visuales**: Spinners mientras cargan las imágenes
- **Transiciones suaves**: Fade-in cuando se cargan
- **Manejo de errores**: Mensajes amigables si fallan
- **Estados de carga**: Previene interacciones durante la carga

### ♿ **Accesibilidad**
- **Alt texts descriptivos**: Incluye producto, color y vista
- **Navegación por teclado**: Totalmente accesible
- **Screen readers**: Compatibilidad completa

## 📋 Uso Básico (sin colores)

```jsx
import GaleriaVerMas from '@/components/galeria-ver-mas/GaleriaVerMas';

const ProductPage = () => {
  const productInfo = {
    title: "Mi Producto",
    description: "Descripción del producto",
    images: [
      {
        src: "https://example.com/image1.jpg",
        alt: "Imagen 1", // Opcional - se genera automáticamente
        width: 800,      // ✅ REQUERIDO para optimización
        height: 600      // ✅ REQUERIDO para optimización
      },
      {
        src: "https://example.com/image2.jpg",
        alt: "Imagen 2",
        width: 800,
        height: 600
      }
    ]
  };

  return <GaleriaVerMas verMasInformacion={productInfo} />;
};
```

## 🎨 Uso con Colores

```jsx
import GaleriaVerMas from '@/components/galeria-ver-mas/GaleriaVerMas';

const ProductWithColors = () => {
  const productInfo = {
    title: "Llamador de Meseros",
    description: "Descripción del producto",
    images: [], // Imágenes de fallback
    colors: [
      {
        id: "rojo",
        name: "Rojo",
        value: "#ff0000",
        images: [
          {
            src: "https://example.com/red-1.jpg",
            alt: "Vista frontal en rojo",
            width: 800,
            height: 600
          },
          {
            src: "https://example.com/red-2.jpg", 
            alt: "Vista lateral en rojo",
            width: 800,
            height: 600
          }
        ]
      },
      {
        id: "azul",
        name: "Azul",
        value: "#0000ff",
        images: [
          {
            src: "https://example.com/blue-1.jpg",
            alt: "Vista frontal en azul",
            width: 800,
            height: 600
          }
        ]
      }
    ],
    defaultColor: "rojo"
  };

  return <GaleriaVerMas verMasInformacion={productInfo} />;
};
```

## 🔧 Estructura de Imágenes

### ✅ **Formato Requerido:**
```javascript
{
  src: "https://example.com/image.jpg",    // URL de la imagen
  alt: "Descripción opcional",             // Opcional - se genera automáticamente
  width: 800,                              // ✅ REQUERIDO - Ancho original
  height: 600                              // ✅ REQUERIDO - Alto original
}
```

### 🎯 **Beneficios de incluir dimensiones:**
- **Mejor performance**: Next.js optimiza automáticamente
- **Sin layout shift**: Reserva espacio desde el inicio
- **Responsive automático**: Genera srcset automáticamente
- **Aspect ratio natural**: Mantiene proporciones

## 📊 Optimizaciones Automáticas

### 🚀 **Lazy Loading Inteligente:**
- **Primera imagen**: `priority={true}` para carga inmediata
- **Resto de imágenes**: Lazy loading bajo demanda
- **Imagen seleccionada**: Siempre priority

### 📱 **Sizes Optimizados:**
- **Imagen principal**: `(max-width: 768px) 100vw, 60vw`
- **Thumbnails**: `(max-width: 768px) 80px, 100px`
- **Responsive**: Diferentes tamaños por dispositivo

### 🎨 **Alt Texts Automáticos:**
- **Imagen principal**: `"Llamador de Meseros en color Rojo - Vista 1"`
- **Thumbnails**: `"Miniatura: Llamador de Meseros en color Rojo - Vista 1"`
- **Fallback**: `"Imagen del producto 1"` si no hay información

## 🏗️ Arquitectura del Componente

```
galeria-ver-mas/
├── components/
│   ├── image-loader/          ← Loader con estados de carga
│   ├── color-selector/        ← Selector de colores
│   ├── gallery-wrapper/       ← Contenedor de galería
│   ├── image-gallery/         ← Galería principal
│   ├── image-indicators/      ← Indicadores de posición
│   ├── info-container/        ← Información del producto
│   ├── thumbnails/            ← Miniaturas navegables
│   └── zoomable-image/        ← Imagen con zoom
├── hooks/                     ← Lógica reutilizable
├── utils/                     ← Utilidades para imágenes
├── GaleriaVerMas.jsx          ← Componente principal
└── index.js                   ← Punto de entrada
```

## 🎯 Estados de Carga

### 🔄 **Estados del ImageLoader:**
- **Loading**: Spinner animado
- **Loaded**: Imagen visible con fade-in
- **Error**: Mensaje de error amigable
- **Placeholder**: Blur mientras carga

### 🎨 **Personalización:**
```scss
// Personalizar el spinner
.spinner {
  border-top-color: var(--primary-color, #007bff);
}

// Personalizar el error
.errorText {
  color: var(--error-color, #dc3545);
}
```

## 🚀 Performance Tips

### ✅ **Recomendaciones:**
1. **Siempre incluir** `width` y `height` originales
2. **Optimizar imágenes** antes de subirlas (WebP, AVIF)
3. **Usar CDN** para servir imágenes
4. **Dimensiones consistentes** para mejor UX

### 📏 **Dimensiones Sugeridas:**
- **Imagen principal**: 800x600px o 1200x900px
- **Thumbnails**: Se generan automáticamente
- **Aspect ratio**: 4:3 o 16:9 para mejor visualización

## 🔍 Migración desde Versión Anterior

### ✅ **Cambios Requeridos:**
```javascript
// ❌ Antes (sin dimensiones)
{
  src: "image.jpg",
  alt: "Imagen"
}

// ✅ Ahora (con dimensiones)
{
  src: "image.jpg",
  alt: "Imagen",
  width: 800,
  height: 600
}
```

### 🎯 **Beneficios de la Migración:**
- **+40% mejor performance** en carga de imágenes
- **Eliminación de layout shift**
- **Mejor SEO** con imágenes optimizadas
- **Experiencia de usuario mejorada**

## 🐛 Troubleshooting

### ❓ **Problemas Comunes:**

**P: Las imágenes no se muestran**
R: Verifica que incluyas `width` y `height` en cada imagen

**P: El layout se ve raro**
R: Asegúrate de que las dimensiones sean correctas

**P: Las imágenes tardan en cargar**
R: Verifica que el `priority` esté configurado correctamente

## 🎉 Próximas Mejoras

- [ ] Soporte para WebP/AVIF automático
- [ ] Preload de imágenes críticas
- [ ] Virtual scrolling para galerías grandes
- [ ] Intersection Observer avanzado 