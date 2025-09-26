# YouTubePlayer Component - Guía de Uso

## 🚀 Características Mejoradas

El componente `YouTubePlayer` ha sido completamente mejorado con las siguientes funcionalidades:

### ✅ Características Principales
- **Manejo robusto de errores** con reintentos automáticos
- **Estados de carga** con indicadores visuales
- **Accesibilidad completa** (ARIA, navegación por teclado)
- **Mecanismo de reintentos** con backoff exponencial
- **Soporte para autoplay y muted**
- **Callbacks para analytics** y tracking
- **Mejor experiencia de usuario** con mensajes informativos

## 📋 Props Disponibles

```javascript
const YouTubePlayer = ({
  // Props básicos (requeridos)
  videoId,                    // ID del video o URL completa
  title,                      // Título del video
  
  // Props de imagen (opcionales)
  imageCover,                 // URL de imagen personalizada
  imageCoverAlt,              // Alt text para la imagen
  imageCoverTitle,            // Title para la imagen
  
  // Props de reproducción (opcionales)
  autoplay,                   // true/false - autoplay del video
  muted,                      // true/false - video silenciado
  startTime,                  // número - tiempo de inicio en segundos
  
  // Callbacks (opcionales)
  onVideoStart,               // función - se ejecuta cuando inicia el video
  onVideoError,               // función - se ejecuta cuando hay error
  
  // Props de estilo (opcionales)
  className,                  // clase CSS adicional
  ...props                    // otras props HTML
})
```

## 💡 Ejemplos de Uso

### 1. Uso Básico
```jsx
<YouTubePlayer
  videoId="aB7FLAPCCJ8"
  title="Video de ejemplo"
/>
```

### 2. Con Imagen Personalizada
```jsx
<YouTubePlayer
  videoId="aB7FLAPCCJ8"
  title="Video con imagen personalizada"
  imageCover="https://mi-sitio.com/imagen-personalizada.jpg"
  imageCoverAlt="Descripción de la imagen"
  imageCoverTitle="Título de la imagen"
/>
```

### 3. Con Autoplay y Muted
```jsx
<YouTubePlayer
  videoId="aB7FLAPCCJ8"
  title="Video con autoplay"
  autoplay={true}
  muted={true}
  startTime={30} // Inicia en el segundo 30
/>
```

### 4. Con Analytics y Callbacks
```jsx
const handleVideoStart = (videoId) => {
  console.log('Video iniciado:', videoId);
  // Enviar evento a Google Analytics
  gtag('event', 'video_start', {
    video_id: videoId,
    video_title: 'Mi video'
  });
};

const handleVideoError = (videoId, retryCount) => {
  console.log('Error en video:', videoId, 'Intento:', retryCount);
  // Enviar error a sistema de monitoreo
  Sentry.captureException(new Error(`YouTube video error: ${videoId}`));
};

<YouTubePlayer
  videoId="aB7FLAPCCJ8"
  title="Video con analytics"
  onVideoStart={handleVideoStart}
  onVideoError={handleVideoError}
/>
```

### 5. Con Estilos Personalizados
```jsx
<YouTubePlayer
  videoId="aB7FLAPCCJ8"
  title="Video con estilos"
  className="mi-clase-personalizada"
  style={{ borderRadius: '12px' }}
/>
```

### 6. Diferentes Formatos de URL
```jsx
// Funciona con todos estos formatos:
<YouTubePlayer videoId="aB7FLAPCCJ8" />
<YouTubePlayer videoId="https://www.youtube.com/watch?v=aB7FLAPCCJ8" />
<YouTubePlayer videoId="https://youtu.be/aB7FLAPCCJ8" />
<YouTubePlayer videoId="https://www.youtube.com/embed/aB7FLAPCCJ8" />
```

## 🔧 Funcionalidades Avanzadas

### Mecanismo de Reintentos
- **3 intentos automáticos** con backoff exponencial
- **Delays progresivos**: 1s, 2s, 4s, 8s, 10s (máximo)
- **Botón de reintento manual** después de fallos
- **Límite máximo** de 3 reintentos

### Estados de Carga
- **Spinner animado** durante la carga
- **Overlay semitransparente** con mensaje
- **Indicadores visuales** claros del estado

### Accesibilidad
- **Navegación por teclado** (Enter, Espacio)
- **ARIA labels** descriptivos
- **Focus visible** para navegación
- **Screen reader friendly**

### Manejo de Errores
- **Validación de video ID** antes de renderizar
- **Mensajes de error** informativos
- **Fallback graceful** cuando falla la carga
- **Información de reintentos** para el usuario

## 🎨 Estilos CSS Disponibles

```scss
.youtubeContainer          // Contenedor principal
.thumbnailContainer        // Contenedor del thumbnail
.thumbnail                 // Imagen del thumbnail
.playButton               // Botón de play
.playButtonBg             // Fondo del botón de play
.consentMessage           // Mensaje de consentimiento
.iframeContainer          // Contenedor del iframe
.youtubeIframe            // Iframe de YouTube
.loadingOverlay           // Overlay de carga
.loadingSpinner           // Spinner de carga
.retryButton              // Botón de reintento
.errorContainer           // Contenedor de error
.errorIcon                // Icono de error
```

## 🚨 Casos de Error Manejados

1. **Video ID inválido**: Muestra mensaje de error claro
2. **Error de carga**: Reintentos automáticos con feedback
3. **Error de red**: Manejo graceful con opción de reintento
4. **Error 153**: Solucionado con referrerPolicy correcto
5. **Timeout de carga**: Reintento automático después de delay

## 📊 Mejoras de Rendimiento

- **Lazy loading** del iframe
- **Memoización** del componente
- **Cleanup automático** de timeouts
- **Optimización de re-renders**
- **Cache busting** en reintentos

## 🔒 Seguridad y Privacidad

- **YouTube-nocookie.com** para evitar cookies
- **Sandbox attributes** en iframe
- **ReferrerPolicy** estricto
- **No tracking** hasta consentimiento del usuario

## 🧪 Testing

Para probar el componente:

```jsx
// Test de error
<YouTubePlayer videoId="invalid-id" />

// Test de reintentos
<YouTubePlayer videoId="aB7FLAPCCJ8" onVideoError={(id, count) => console.log('Error:', count)} />

// Test de autoplay
<YouTubePlayer videoId="aB7FLAPCCJ8" autoplay={true} muted={true} />
```

## 📱 Responsive

El componente es completamente responsive y se adapta a diferentes tamaños de pantalla usando las media queries existentes en el CSS.

## 🔄 Migración desde Versión Anterior

La nueva versión es **completamente compatible** con el uso anterior. Solo necesitas actualizar si quieres usar las nuevas funcionalidades:

```jsx
// Antes
<YouTubePlayer videoId="aB7FLAPCCJ8" title="Mi video" />

// Ahora (mismo uso, pero con mejoras internas)
<YouTubePlayer videoId="aB7FLAPCCJ8" title="Mi video" />

// O con nuevas funcionalidades
<YouTubePlayer 
  videoId="aB7FLAPCCJ8" 
  title="Mi video"
  autoplay={true}
  onVideoStart={(id) => console.log('Video iniciado:', id)}
/>
```
