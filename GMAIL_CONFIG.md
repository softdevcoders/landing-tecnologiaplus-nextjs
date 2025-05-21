# Configuración de Gmail para Tecnología Plus

Este documento detalla el proceso de configuración de Gmail para el sistema de correo de Tecnología Plus, incluyendo la generación de contraseñas de aplicación y la configuración de etiquetas.

## 📧 Configuración de Correo

### 1. Variables de Entorno

Crea o actualiza el archivo `.env` en la raíz del proyecto:

```env
GMAIL_USER=tu_correo@gmail.com
GMAIL_APP_PASSWORD=tu_contraseña_de_aplicacion
```

## 🔐 Generación de Contraseña de Aplicación

### 1. Activar Verificación en Dos Pasos

1. Accede a tu [Cuenta de Google](https://myaccount.google.com/apppasswords)


### 2. Crear Contraseña de Aplicación

1. En la sección "Seguridad" de tu cuenta de Google
2. Busca "Contraseñas de aplicación" (en la sección "Iniciar sesión en Google")
3. Selecciona "Otra (nombre personalizado)"
4. En el campo de nombre, escribe "Tecnologia Plus Website"
5. Haz clic en "Generar"
6. Google mostrará una contraseña de 16 caracteres
7. **IMPORTANTE**: Copia esta contraseña inmediatamente, solo se mostrará una vez
8. Pega la contraseña en tu archivo `.env` como `GMAIL_APP_PASSWORD`

## 🏷️ Configuración de Etiquetas en Gmail

### 1. Crear Etiqueta Principal

1. Abre Gmail
2. Haz clic en el ícono de configuración (⚙️) en la esquina superior derecha
3. Selecciona "Ver todas las configuraciones"
4. Ve a la pestaña "Etiquetas"
5. Desplázate hasta "Etiquetas" y haz clic en "Crear nueva etiqueta"
6. Escribe "Contacto" y haz clic en "Crear"

### 2. Crear Subetiquetas (Opcional)

1. En la misma sección de etiquetas
2. Haz clic en "Crear nueva etiqueta"
3. Escribe "Contacto/Nuevo" (esto creará una subetiqueta)
4. Repite el proceso para otras subetiquetas como:
   - Contacto/Respondido
   - Contacto/Urgente
   - Contacto/Archivado

## 📥 Configuración de Filtros

### 1. Crear Filtro Principal

1. En Gmail, haz clic en el ícono de configuración (⚙️)
2. Ve a "Ver todas las configuraciones"
3. Ve a la pestaña "Filtros y direcciones bloqueadas"
4. Haz clic en "Crear un nuevo filtro"
5. En el campo "De", ingresa tu dirección de correo
6. En "Tiene las palabras", ingresa "[Contacto]"
7. Haz clic en "Crear filtro"
8. Marca las siguientes opciones:
   - ✓ Aplicar la etiqueta: selecciona "Contacto"
   - ✓ Nunca enviarlo a Spam
   - ✓ Marcar como importante
9. Haz clic en "Crear filtro"

### 2. Filtros Adicionales (Opcional)

Puedes crear filtros adicionales para:
- Mensajes con palabras clave específicas
- Mensajes de ciertos dominios
- Mensajes con archivos adjuntos

## 🔍 Verificación de la Configuración

### 1. Prueba de Envío
1. Envía un correo de prueba desde el formulario
2. Verifica que:
   - El correo llega a la bandeja de entrada
   - Se aplica la etiqueta "Contacto"
   - No va a la carpeta de spam
   - El asunto incluye "[Contacto]"

### 2. Verificación de Etiquetas
1. Abre Gmail
2. En el panel lateral, verifica que:
   - La etiqueta "Contacto" está visible
   - Las subetiquetas están correctamente anidadas
   - Los colores de las etiquetas son visibles