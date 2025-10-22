/**
 * Configuración para el 3D Viewer de Sketchfab
 */

// Configuración por defecto basada en la documentación oficial de Sketchfab
// https://sketchfab.com/developers/viewer/initialization
export const DEFAULT_3D_CONFIG = {
  // Parámetros de inicialización
  autostart: 1,
  preload: 1,
  
  // Parámetros de UI principales
  ui_controls: 0,
  ui_infos: 0,
  ui_inspector: 0,
  ui_watermark: 0,
  ui_stop: 0,
  ui_help: 0,
  ui_settings: 0,
  ui_vr: 0,
  ui_fullscreen: 0,
  ui_annotations: 0,
  
  // Parámetros de cámara y visualización
  camera: 0, // Habilitar controles de cámara
  transparent: 0,
  autospin: 1,
  orbit_constraint_pan_y: 0,
  
  // Parámetros adicionales de la documentación oficial
  blending: 1,
  annotation_cycle: 0,
  annotations_visible: 0,
  
  // Parámetros de interacción y ayuda
  ui_hint: 0,
  ui_controls_help: 0,
  ui_inspector_help: 0,
  ui_watermark_link: 0,
  ui_stop_help: 0,
  ui_help_help: 0,
  ui_settings_help: 0,
  ui_vr_help: 0,
  ui_fullscreen_help: 0,
  ui_annotations_help: 0
};

// Presets de configuración predefinidos
export const PRESET_CONFIGS = {
  // Configuración minimalista (actual)
  minimal: {
    ...DEFAULT_3D_CONFIG
  },
  
  // Configuración con controles básicos
  basic: {
    autostart: 1,
    ui_controls: 1,
    ui_infos: 1,
    ui_inspector: 0,
    ui_watermark: 0,
    ui_stop: 1,
    ui_help: 0,
    ui_settings: 0,
    ui_vr: 0,
    ui_fullscreen: 1,
    ui_annotations: 0,
    camera: 0,
    preload: 1,
    transparent: 0,
    autospin: 0
  },
  
  // Configuración completa con todas las opciones
  full: {
    autostart: 1,
    ui_controls: 1,
    ui_infos: 1,
    ui_inspector: 1,
    ui_watermark: 1,
    ui_stop: 1,
    ui_help: 1,
    ui_settings: 1,
    ui_vr: 1,
    ui_fullscreen: 1,
    ui_annotations: 1,
    camera: 0,
    preload: 1,
    transparent: 0,
    autospin: 0
  },
  
  // Configuración para mobile (optimizada)
  mobile: {
    autostart: 1,
    ui_controls: 0,
    ui_infos: 0,
    ui_inspector: 0,
    ui_watermark: 0,
    ui_stop: 0,
    ui_help: 0,
    ui_settings: 0,
    ui_vr: 0,
    ui_fullscreen: 1,
    ui_annotations: 0,
    camera: 0,
    preload: 1,
    transparent: 0,
    autospin: 0,
    orbit_constraint_pan_y: 0
  },
  
  // Configuración para presentación (sin controles)
  presentation: {
    autostart: 1,
    ui_controls: 0,
    ui_infos: 0,
    ui_inspector: 0,
    ui_watermark: 0,
    ui_stop: 0,
    ui_help: 0,
    ui_settings: 0,
    ui_vr: 0,
    ui_fullscreen: 0,
    ui_annotations: 0,
    camera: 0,
    preload: 1,
    transparent: 0,
    autospin: 0.2
  },
  
  // Configuración para fondo blanco (optimizada para modales blancos)
  whiteBackground: {
    autostart: 1,
    ui_controls: 0,
    ui_infos: 0,
    ui_inspector: 0,
    ui_watermark: 0,
    ui_stop: 0,
    ui_help: 0,
    ui_settings: 0,
    ui_vr: 0,
    ui_fullscreen: 1,
    ui_annotations: 0,
    camera: 0,
    preload: 1,
    transparent: 1,
    autospin: 0,
    orbit_constraint_pan_y: 0,
    blending: 1
  },
  
  // Configuración para e-commerce (con controles básicos y fondo blanco)
  ecommerce: {
    autostart: 1,
    ui_controls: 1,
    ui_infos: 1,
    ui_inspector: 0,
    ui_watermark: 0,
    ui_stop: 1,
    ui_help: 0,
    ui_settings: 0,
    ui_vr: 0,
    ui_fullscreen: 1,
    ui_annotations: 0,
    camera: 0,
    preload: 1,
    transparent: 1,
    autospin: 0,
    orbit_constraint_pan_y: 0,
    blending: 1
  },
  
  // Configuración para VR/AR (con opciones de realidad virtual)
  vr: {
    autostart: 1,
    ui_controls: 1,
    ui_infos: 1,
    ui_inspector: 0,
    ui_watermark: 0,
    ui_stop: 1,
    ui_help: 0,
    ui_settings: 1,
    ui_vr: 1,
    ui_fullscreen: 1,
    ui_annotations: 0,
    camera: 0,
    preload: 1,
    transparent: 0,
    autospin: 0,
    orbit_constraint_pan_y: 0
  },
  
  // Configuración con controles de zoom habilitados
  zoomEnabled: {
    autostart: 1,
    ui_controls: 1, // Habilitar controles de UI
    ui_infos: 0,
    ui_inspector: 0,
    ui_watermark: 0,
    ui_stop: 1,
    ui_help: 0,
    ui_settings: 0,
    ui_vr: 0,
    ui_fullscreen: 1,
    ui_annotations: 0,
    camera: 1, // Habilitar controles de cámara
    preload: 1,
    transparent: 0,
    autospin: 0,
    orbit_constraint_pan_y: 0
  },
  
  // Configuración con zoom limitado
  zoomLimited: {
    autostart: 1,
    ui_controls: 0,
    ui_infos: 0,
    ui_inspector: 0,
    ui_watermark: 0,
    ui_stop: 1,
    ui_help: 0,
    ui_settings: 0,
    ui_vr: 0,
    ui_fullscreen: 1,
    ui_annotations: 0,
    camera: 1, // Habilitar controles de cámara
    preload: 1,
    transparent: 0,
    autospin: 0,
    orbit_constraint_pan_y: 0
  }
};

/**
 * Construye la URL del embed de Sketchfab con la configuración proporcionada
 * @param {string} modelID - ID del modelo de Sketchfab
 * @param {Object} config - Configuración personalizada
 * @param {string} preset - Preset predefinido a usar
 * @returns {string|null} URL del embed o null si no hay modelID
 */
export const buildEmbedUrl = (modelID, config = {}, preset = 'minimal') => {
  if (!modelID) return null;
  
  // Obtener la configuración base del preset
  const baseConfig = PRESET_CONFIGS[preset] || PRESET_CONFIGS.minimal;
  
  // Combinar con la configuración personalizada
  const finalConfig = { ...baseConfig, ...config };
  
  // Construir los parámetros de la URL
  const params = Object.entries(finalConfig)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  
  return `https://sketchfab.com/models/${modelID}/embed?${params}`;
};

/**
 * Valida si un preset existe
 * @param {string} preset - Nombre del preset
 * @returns {boolean}
 */
export const isValidPreset = (preset) => {
  return Object.keys(PRESET_CONFIGS).includes(preset);
};

/**
 * Obtiene la lista de presets disponibles
 * @returns {Array<string>}
 */
export const getAvailablePresets = () => {
  return Object.keys(PRESET_CONFIGS);
};

/**
 * Obtiene información detallada sobre los parámetros disponibles
 * Basado en la documentación oficial de Sketchfab
 * @returns {Object} Objeto con descripción de cada parámetro
 */
export const getParameterInfo = () => {
  return {
    // Parámetros de inicialización
    autostart: {
      description: "Inicia automáticamente el modelo 3D",
      values: [0, 1],
      default: 1
    },
    preload: {
      description: "Precarga el modelo antes de mostrarlo",
      values: [0, 1],
      default: 1
    },
    
    // Parámetros de UI principales
    ui_controls: {
      description: "Muestra los controles de navegación",
      values: [0, 1],
      default: 0
    },
    ui_infos: {
      description: "Muestra la información del modelo",
      values: [0, 1],
      default: 0
    },
    ui_inspector: {
      description: "Muestra el inspector de materiales",
      values: [0, 1],
      default: 0
    },
    ui_watermark: {
      description: "Muestra la marca de agua de Sketchfab",
      values: [0, 1],
      default: 0
    },
    ui_stop: {
      description: "Muestra el botón de parar",
      values: [0, 1],
      default: 0
    },
    ui_help: {
      description: "Muestra la ayuda",
      values: [0, 1],
      default: 0
    },
    ui_settings: {
      description: "Muestra la configuración",
      values: [0, 1],
      default: 0
    },
    ui_vr: {
      description: "Muestra las opciones de VR",
      values: [0, 1],
      default: 0
    },
    ui_fullscreen: {
      description: "Permite pantalla completa",
      values: [0, 1],
      default: 0
    },
    ui_annotations: {
      description: "Muestra las anotaciones",
      values: [0, 1],
      default: 0
    },
    
    // Parámetros de cámara y visualización
    camera: {
      description: "Configuración inicial de la cámara",
      values: [0, 1],
      default: 0
    },
    transparent: {
      description: "Fondo transparente",
      values: [0, 1],
      default: 1
    },
    autospin: {
      description: "Velocidad de rotación automática (0-1)",
      values: "0-1",
      default: 0
    },
    orbit_constraint_pan_y: {
      description: "Restricción de movimiento vertical",
      values: [0, 1],
      default: 0
    },
    blending: {
      description: "Modo de mezcla de colores",
      values: [0, 1],
      default: 1
    },
    annotation_cycle: {
      description: "Ciclo de anotaciones",
      values: [0, 1],
      default: 0
    }
  };
};
