# Soporte para Modelos 3D en la Galería

La galería de productos ahora soporta modelos 3D de Sketchfab que se muestran en el modal 360°. Este documento explica cómo configurar y usar esta funcionalidad.

## Configuración de Modelos 3D

Para agregar un modelo 3D a la galería, simplemente agrega un objeto con `type: '3d'` en el array de `media`:

```javascript
const productInfo = {
  title: "Mi Producto",
  description: "Descripción del producto",
  media: [
    {
      type: '3d',
      modelID: 'mi-modelo-3d-abc123def456', // ID del modelo de Sketchfab
      thumbnail: 'https://ejemplo.com/preview.jpg', // Imagen de vista previa
      alt: 'Modelo 3D del producto',
      preview: 'https://ejemplo.com/preview.jpg' // Opcional: imagen de vista previa
    },
    // ... otros elementos de media
  ]
};
```

## Propiedades del Objeto 3D

| Propiedad | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `type` | string | ✅ | Debe ser `'3d'` |
| `modelID` | string | ✅ | ID del modelo de Sketchfab (sin la URL completa) |
| `thumbnail` | string | ✅ | URL de la imagen de vista previa |
| `alt` | string | ✅ | Texto alternativo para accesibilidad |
| `preview` | string | ❌ | URL alternativa de vista previa (opcional) |

## IDs de Sketchfab Soportados

El componente acepta IDs de modelos de Sketchfab directamente:

- `mi-modelo-abc123def456` (ID completo del modelo)
- `abc123def456` (ID corto del modelo)

## Características del Visor 3D

- **Modal 360°**: Se muestra en el modal que se abre al hacer clic en el botón "360°"
- **Carga optimizada**: Muestra un spinner mientras carga el modelo
- **Pantalla completa**: Botón para ver el modelo en pantalla completa
- **Responsive**: Se adapta a diferentes tamaños de pantalla
- **Accesibilidad**: Incluye etiquetas ARIA y navegación por teclado
- **Manejo de errores**: Muestra mensajes de error si el modelo no se puede cargar

## Integración con la Galería

Los modelos 3D se integran perfectamente con:

- **Galería Principal**: Se muestran en el carrusel principal junto con imágenes y videos
- **Thumbnails**: Aparecen en la barra lateral con un ícono 3D distintivo
- **Botón 360°**: Aparece cuando hay un modelo 3D disponible
- **Modal 360°**: Se muestra en el modal que reemplaza al video 360°
- **Prioridad**: Si hay tanto video como modelo 3D, se prioriza el modelo 3D
- **Fallback**: Si no hay modelo 3D, se muestra el video como antes

## Ejemplo Completo

```javascript
import GaleriaVerMas from '@/components/ver-mas-productos/galeria-ver-mas/GaleriaVerMas';

function MiProducto() {
  const productInfo = {
    title: "Llamador de Meseros E2-B",
    description: "Permite llamar al mesero y borrar el llamado al ser atendido.",
    media: [
      {
        type: '3d',
        modelID: 'para-sketchfab-1d14454478b94e1e81d68187b9d9fecd',
        thumbnail: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he',
        alt: 'Modelo 3D del llamador de meseros E2-B',
        preview: 'https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743040123/Frame_1_9_tdu2he'
      },
      {
        type: 'image',
        src: 'https://ejemplo.com/imagen1.jpg',
        alt: 'Vista frontal del producto'
      },
      {
        type: 'image',
        src: 'https://ejemplo.com/imagen2.jpg',
        alt: 'Vista lateral del producto'
      }
    ]
  };

  return <GaleriaVerMas verMasInformacion={productInfo} />;
}
```

## Notas Técnicas

- Los modelos 3D se cargan usando iframes de Sketchfab
- Se aplican configuraciones optimizadas para mejor rendimiento
- El componente maneja automáticamente la extracción del ID del modelo
- Compatible con todos los navegadores modernos que soportan iframes

## Troubleshooting

### El modelo no se carga
- Verifica que el `modelID` sea correcto
- Asegúrate de que el modelo sea público en Sketchfab
- Revisa la consola del navegador para errores

### La vista previa no se muestra
- Verifica que la URL de `thumbnail` sea accesible
- Asegúrate de que la imagen tenga las dimensiones correctas

### Problemas de rendimiento
- Los modelos 3D pueden ser pesados, considera optimizar el modelo en Sketchfab
- Usa imágenes de vista previa de buena calidad pero optimizadas
