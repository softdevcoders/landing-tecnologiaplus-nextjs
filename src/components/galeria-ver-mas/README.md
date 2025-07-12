# Componente GaleriaVerMas con Selector de Colores

El componente `GaleriaVerMas` ahora incluye funcionalidad para seleccionar colores de productos que cambian dinámicamente las imágenes de la galería.

## Características

- **Galería de imágenes**: Carrusel con zoom, miniaturas y navegación
- **Selector de colores**: Permite cambiar entre diferentes colores de producto
- **Cambio dinámico**: Las imágenes cambian automáticamente según el color seleccionado
- **Compatibilidad**: Funciona tanto con productos con colores como sin colores

## Uso Básico (sin colores)

```jsx
import GaleriaVerMas from '@/components/galeria-ver-mas/GaleriaVerMas';

const ProductPage = () => {
  const productInfo = {
    title: "Mi Producto",
    description: "Descripción del producto",
    images: [
      {
        src: "https://example.com/image1.jpg",
        alt: "Imagen 1"
      },
      {
        src: "https://example.com/image2.jpg", 
        alt: "Imagen 2"
      }
    ]
  };

  return <GaleriaVerMas verMasInformacion={productInfo} />;
};
```

## Uso con Colores

```jsx
import GaleriaVerMas from '@/components/galeria-ver-mas/GaleriaVerMas';

const ProductPage = () => {
  const productInfo = {
    title: "Mi Producto",
    description: "Descripción del producto",
    images: [], // Imágenes fallback (opcional)
    colors: [
      {
        id: "rojo",
        name: "Rojo",
        hex: "#FF0000",
        images: [
          {
            src: "https://example.com/producto-rojo-1.jpg",
            alt: "Producto rojo vista 1"
          },
          {
            src: "https://example.com/producto-rojo-2.jpg",
            alt: "Producto rojo vista 2"
          }
        ]
      },
      {
        id: "azul",
        name: "Azul",
        hex: "#0000FF",
        images: [
          {
            src: "https://example.com/producto-azul-1.jpg",
            alt: "Producto azul vista 1"
          },
          {
            src: "https://example.com/producto-azul-2.jpg",
            alt: "Producto azul vista 2"
          }
        ]
      }
    ],
    defaultColor: "rojo" // Color por defecto (opcional)
  };

  return <GaleriaVerMas verMasInformacion={productInfo} />;
};
```

## Estructura de Datos

### Objeto `verMasInformacion`

```typescript
interface VerMasInformacion {
  title?: string;
  description?: string;
  images?: ImageData[];
  colors?: ColorData[];
  defaultColor?: string;
}
```

### Objeto `ImageData`

```typescript
interface ImageData {
  src: string;
  alt?: string;
}
```

### Objeto `ColorData`

```typescript
interface ColorData {
  id: string;
  name: string;
  hex?: string;          // Color sólido en formato hex
  value?: string;        // Color alternativo (rgb, hsl, etc.)
  gradient?: string;     // Gradiente CSS (opcional)
  images: ImageData[];
}
```

## Ejemplos de Colores

### Colores Sólidos

```jsx
{
  id: "rojo",
  name: "Rojo",
  hex: "#FF0000",
  images: [...]
}
```

### Colores con Gradiente

```jsx
{
  id: "sunset",
  name: "Atardecer",
  gradient: "45deg, #ff6b6b, #ffa500",
  images: [...]
}
```

### Colores con Valores RGB

```jsx
{
  id: "verde",
  name: "Verde",
  value: "rgb(0, 255, 0)",
  images: [...]
}
```

## Componentes Relacionados

### ProductColorProvider

Context que maneja el estado de selección de colores:

```jsx
import { ProductColorProvider, useProductColor } from '@/contexts/ProductColorContext';

const MyComponent = () => {
  const { selectedColor, selectColor, availableColors } = useProductColor();
  
  return (
    <div>
      <p>Color seleccionado: {selectedColor}</p>
      {availableColors.map(color => (
        <button 
          key={color.id}
          onClick={() => selectColor(color.id)}
        >
          {color.name}
        </button>
      ))}
    </div>
  );
};
```

### ColorSelector

Componente independiente para seleccionar colores:

```jsx
import ColorSelector from '@/components/color-selector';

const ProductInfo = () => {
  return (
    <div>
      <h2>Información del Producto</h2>
      <ColorSelector 
        title="Elige tu color"
        showColorName={true}
        size="large"
      />
    </div>
  );
};
```

## Migración

Para migrar productos existentes:

1. **Sin cambios**: Los productos sin colores funcionan igual que antes
2. **Con colores**: Agregar el array `colors` a `verMasInformacion`
3. **Opcional**: Mantener `images` como fallback para compatibilidad

## Notas

- El componente detecta automáticamente si hay colores disponibles
- Si no hay colores, funciona como el componente original
- El selector de colores solo aparece cuando hay múltiples colores
- Las imágenes se cambian automáticamente al seleccionar un color
- El zoom y la navegación se resetean al cambiar de color 