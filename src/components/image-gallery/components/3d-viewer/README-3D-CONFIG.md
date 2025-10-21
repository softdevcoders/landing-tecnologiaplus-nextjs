# Configuración del 3D Viewer - Sketchfab

Sistema de configuración completo para el 3D Viewer basado en la [documentación oficial de Sketchfab](https://sketchfab.com/developers/viewer/initialization).

## 🚀 Uso Básico

```jsx
import Viewer3D from './3dViewer';

// Uso básico con configuración por defecto
<Viewer3D 
  modelID="abc123" 
  title="Mi Modelo 3D" 
/>

// Uso con preset específico
<Viewer3D 
  modelID="abc123" 
  title="Mi Modelo 3D"
  preset="whiteBackground"  // Optimizado para fondo blanco
/>

// Uso con configuración personalizada
<Viewer3D 
  modelID="abc123" 
  title="Mi Modelo 3D"
  config={{
    autospin: 0.3,
    ui_controls: 1,
    ui_fullscreen: 1,
    transparent: 1
  }}
/>
```

## 📋 Presets Disponibles

### `minimal` (por defecto)
- Configuración minimalista sin controles UI
- Ideal para embeds simples

### `basic`
- Controles básicos habilitados
- Información del modelo visible
- Botón de pantalla completa

### `full`
- Todos los controles habilitados
- Máxima funcionalidad
- Ideal para exploración completa

### `mobile`
- Optimizado para dispositivos móviles
- Controles mínimos para mejor rendimiento
- Se aplica automáticamente cuando `isMobile={true}`

### `presentation`
- Sin controles UI
- Auto-rotación suave
- Ideal para presentaciones

### `whiteBackground` ⭐ **NUEVO**
- Optimizado para modales con fondo blanco
- Fondo transparente habilitado
- Controles mínimos
- Ideal para e-commerce

### `ecommerce` ⭐ **NUEVO**
- Configuración específica para e-commerce
- Controles básicos + fondo blanco
- Botón de pantalla completa
- Optimizado para productos

### `vr` ⭐ **NUEVO**
- Configuración para realidad virtual
- Opciones VR habilitadas
- Controles completos
- Ideal para experiencias inmersivas

## ⚙️ Parámetros Disponibles

Basado en la [documentación oficial de Sketchfab](https://sketchfab.com/developers/viewer/initialization):

### Parámetros de Inicialización
| Parámetro | Descripción | Valores | Default |
|-----------|-------------|---------|---------|
| `autostart` | Inicia automáticamente el modelo 3D | 0, 1 | 1 |
| `preload` | Precarga el modelo antes de mostrarlo | 0, 1 | 1 |

### Parámetros de UI
| Parámetro | Descripción | Valores | Default |
|-----------|-------------|---------|---------|
| `ui_controls` | Muestra los controles de navegación | 0, 1 | 0 |
| `ui_infos` | Muestra la información del modelo | 0, 1 | 0 |
| `ui_inspector` | Muestra el inspector de materiales | 0, 1 | 0 |
| `ui_watermark` | Muestra la marca de agua de Sketchfab | 0, 1 | 0 |
| `ui_stop` | Muestra el botón de parar | 0, 1 | 0 |
| `ui_help` | Muestra la ayuda | 0, 1 | 0 |
| `ui_settings` | Muestra la configuración | 0, 1 | 0 |
| `ui_vr` | Muestra las opciones de VR | 0, 1 | 0 |
| `ui_fullscreen` | Permite pantalla completa | 0, 1 | 0 |
| `ui_annotations` | Muestra las anotaciones | 0, 1 | 0 |

### Parámetros de Visualización
| Parámetro | Descripción | Valores | Default |
|-----------|-------------|---------|---------|
| `camera` | Configuración inicial de la cámara | 0, 1 | 0 |
| `transparent` | Fondo transparente | 0, 1 | 1 |
| `autospin` | Velocidad de rotación automática | 0-1 | 0 |
| `orbit_constraint_pan_y` | Restricción de movimiento vertical | 0, 1 | 0 |
| `blending` | Modo de mezcla de colores | 0, 1 | 1 |
| `annotation_cycle` | Ciclo de anotaciones | 0, 1 | 0 |

## 🎯 Ejemplos de Uso Avanzado

### Para Modales con Fondo Blanco
```jsx
<Viewer3D 
  modelID={modelID}
  title="Vista 3D del Producto"
  preset="whiteBackground"
  isMobile={isMobile}
/>
```

### Para E-commerce
```jsx
<Viewer3D 
  modelID={product.modelID}
  title={`${product.name} - Vista 3D`}
  preset="ecommerce"
  config={{
    autospin: 0.1,  // Rotación muy suave
    ui_controls: 1, // Controles básicos
    transparent: 1  // Fondo transparente
  }}
/>
```

### Para Presentaciones
```jsx
<Viewer3D 
  modelID={modelID}
  title="Presentación 3D"
  preset="presentation"
  config={{
    autospin: 0.2,
    transparent: 0  // Fondo negro
  }}
/>
```

### Para Realidad Virtual
```jsx
<Viewer3D 
  modelID={modelID}
  title="Experiencia VR"
  preset="vr"
  config={{
    ui_vr: 1,
    ui_settings: 1,
    ui_fullscreen: 1
  }}
/>
```

## 🔧 Funciones de Utilidad

```jsx
import { 
  buildEmbedUrl, 
  getAvailablePresets, 
  getParameterInfo,
  isValidPreset 
} from './3dViewerConfig';

// Construir URL personalizada
const url = buildEmbedUrl('abc123', { autospin: 0.3 }, 'basic');

// Obtener presets disponibles
const presets = getAvailablePresets();
// ['minimal', 'basic', 'full', 'mobile', 'presentation', 'whiteBackground', 'ecommerce', 'vr']

// Obtener información de parámetros
const paramInfo = getParameterInfo();
console.log(paramInfo.autospin.description); // "Velocidad de rotación automática (0-1)"

// Validar preset
const isValid = isValidPreset('whiteBackground'); // true
```

## 📱 Detección Automática de Mobile

El sistema detecta automáticamente si es mobile y aplica el preset `mobile`:

```jsx
// Se aplica automáticamente el preset 'mobile' en dispositivos móviles
<Viewer3D 
  modelID="abc123"
  isMobile={true}  // Se detecta automáticamente
/>
```

## 🎨 Casos de Uso Recomendados

- **Galería de productos**: `whiteBackground` o `ecommerce`
- **Presentaciones**: `presentation`
- **Exploración completa**: `full`
- **Móviles**: `mobile` (automático)
- **VR/AR**: `vr`
- **Embeds simples**: `minimal`

## 📚 Referencias

- [Documentación oficial de Sketchfab](https://sketchfab.com/developers/viewer/initialization)
- [Parámetros de inicialización](https://sketchfab.com/developers/viewer/initialization)
