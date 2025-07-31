# 🔍 Auditoría SEO - Tecnología Plus

Scripts para auditar la indexación SEO del sitio `tecnologiaplus.com`, verificando que las paginaciones estén desindexadas y el resto del sitio esté correctamente indexado.

## 📋 Archivos

- **`seo-audit.js`** - Script principal de auditoría completa (118 URLs)
- **`test-quick.js`** - Prueba rápida con URLs clave (5 URLs)
- **`generate-report.js`** - Generador de reportes en Markdown
- **`run-audit.sh`** - Script bash para ejecutar auditorías
- **`README.md`** - Este archivo

## 🚀 Cómo Usar

### Opción 1: Prueba Rápida (Recomendado)
```bash
./run-audit.sh test
```
Verifica 5 URLs clave en menos de 1 minuto.

### Opción 2: Auditoría Completa + Reporte
```bash
./run-audit.sh full
```
Verifica todas las 118 URLs del sitio y genera reporte en Markdown (toma varios minutos).

### Opción 3: Solo Reporte
```bash
./run-audit.sh report
```
Genera solo el reporte en Markdown (requiere haber ejecutado la auditoría antes).

### Opción 4: Scripts Directos
```bash
# Prueba rápida
node test-quick.js

# Auditoría completa
node seo-audit.js

# Generar reporte
node generate-report.js
```

## 📊 Resultados Esperados

### ✅ Comportamiento Correcto:
- **Paginaciones**: Deben estar desindexadas con `X-Robots-Tag: noindex, nofollow`
- **Páginas principales**: Deben estar indexadas sin etiquetas restrictivas
- **Landing pages**: Deben estar indexadas sin etiquetas restrictivas
- **Posts del blog**: Deben estar indexados sin etiquetas restrictivas

### ℹ️ Información Adicional:
- **Cache-Control restrictivo** en páginas del blog (no afecta indexación, es normal en Next.js)

## 📈 Estadísticas

- **118 URLs totales** en auditoría completa
- **69 URLs** que deben estar indexadas
- **49 URLs** que deben estar desindexadas (paginaciones)

## 📄 Reportes

Los reportes se guardan automáticamente en:
- `seo-audit-report.json` - Reporte completo en formato JSON
- `seo-audit-report.md` - Reporte detallado en Markdown con colores

## 🔍 ¿Qué se Verifica?

### Cabeceras HTTP analizadas:
- **`X-Robots-Tag`** - Directiva principal para controlar indexación
- **`Cache-Control`** - Control de caché (solo informativo, no afecta indexación)

### Metaetiquetas HTML analizadas:
- **`<meta name="robots">`** - Directiva para todos los robots
- **`<meta name="googlebot">`** - Directiva específica para Google

### Criterios de evaluación:
- **Página debe estar INDEXADA**: No debe tener `noindex` o `nofollow` en cabeceras ni metaetiquetas
- **Página debe estar DESINDEXADA**: Debe tener `noindex` o `nofollow` en cabeceras o metaetiquetas

## 🎯 Objetivo

Verificar que solo las paginaciones del blog estén desindexadas mientras que todo el resto del sitio esté correctamente indexado para SEO.

## ✅ Verificación Exitosa

La auditoría confirma que:
- ✅ Página principal correctamente indexada
- ✅ Blog principal correctamente indexado  
- ✅ Landing pages correctamente indexadas
- ✅ Posts del blog correctamente indexados
- ✅ Paginaciones correctamente desindexadas con `X-Robots-Tag: noindex, nofollow`
- ✅ Paginaciones de categorías correctamente desindexadas

**¡El sitio tiene el comportamiento de indexación correcto!**

## 📝 Notas Técnicas

### Cache-Control en Next.js
Las páginas del blog muestran `Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate`. Esto es:
- ✅ **Normal** en páginas dinámicas de Next.js
- ✅ **No afecta la indexación** - Google puede indexar estas páginas
- ✅ **Solo controla el caché** del navegador

### Estructura de URLs Verificadas
- **Páginas principales**: 13 URLs
- **Landing pages**: 10 URLs
- **Landing pages hijas**: 27 URLs
- **Posts del blog**: 19 URLs
- **Paginaciones del blog**: 9 URLs
- **Paginaciones de categorías**: 40 URLs

## 🛠️ Requisitos

- Node.js 14+ instalado
- Acceso a internet para verificar URLs
- Permisos de escritura en el directorio

## 🔧 Solución de Problemas

### Error: "Node.js no está instalado"
```bash
# Instalar Node.js desde https://nodejs.org/
# O usar nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
```

### Error: "No se encontró el script"
```bash
# Verificar que estés en el directorio correcto
cd scripts/seo-audit
ls -la
```

### Error de permisos
```bash
# Hacer ejecutable el script bash
chmod +x run-audit.sh
``` 