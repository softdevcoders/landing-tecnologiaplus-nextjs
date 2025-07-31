#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuración de colores para Markdown
const colors = {
  green: '🟢',
  red: '🔴',
  yellow: '🟡',
  blue: '🔵',
  purple: '🟣',
  orange: '🟠',
  white: '⚪',
  check: '✅',
  cross: '❌',
  warning: '⚠️',
  info: 'ℹ️',
  success: '🎉',
  error: '💥'
};

// Función para generar el reporte en Markdown
function generateMarkdownReport(reportData) {
  const { summary, results } = reportData;
  
  let markdown = `# 🔍 Reporte de Auditoría SEO - Tecnología Plus

**Fecha:** ${new Date().toLocaleString('es-ES')}  
**Sitio:** https://tecnologiaplus.com  
**Total de URLs verificadas:** ${summary.totalUrls}

---

## 📊 Resumen Ejecutivo

| Métrica | Valor | Estado |
|---------|-------|--------|
| **URLs verificadas** | ${summary.totalUrls} | ${colors.info} |
| **Comportamiento correcto** | ${summary.correctBehavior} | ${colors.check} |
| **Problemas encontrados** | ${summary.problems} | ${summary.problems > 0 ? colors.cross : colors.check} |
| **Errores de conexión** | ${summary.errors} | ${summary.errors > 0 ? colors.cross : colors.check} |

${summary.problems === 0 && summary.errors === 0 ? 
  `${colors.success} **¡AUDITORÍA EXITOSA!** - Todas las URLs tienen el comportamiento correcto` : 
  `${colors.warning} **AUDITORÍA CON PROBLEMAS** - Se encontraron ${summary.problems} URLs con problemas`
}

---

## 🔍 ¿Qué se Verifica?

### **Cabeceras HTTP analizadas:**
- **\`X-Robots-Tag\`** - Directiva principal para controlar indexación
- **\`Cache-Control\`** - Control de caché (solo informativo, no afecta indexación)

### **Metaetiquetas HTML analizadas:**
- **\`<meta name="robots">\`** - Directiva para todos los robots
- **\`<meta name="googlebot">\`** - Directiva específica para Google

### **Criterios de evaluación:**
- **Página debe estar INDEXADA**: No debe tener \`noindex\` o \`nofollow\` en cabeceras ni metaetiquetas
- **Página debe estar DESINDEXADA**: Debe tener \`noindex\` o \`nofollow\` en cabeceras o metaetiquetas

---

## 📋 Desglose Detallado por Tipo de Página

`;

  // Agrupar resultados por tipo
  const resultsByType = {};
  results.forEach(result => {
    if (!resultsByType[result.type]) {
      resultsByType[result.type] = [];
    }
    resultsByType[result.type].push(result);
  });

  // Generar sección para cada tipo
  Object.entries(resultsByType).forEach(([type, typeResults]) => {
    const correctCount = typeResults.filter(r => r.status === 'CORRECTO').length;
    const problemCount = typeResults.filter(r => r.status === 'PROBLEMA').length;
    const errorCount = typeResults.filter(r => r.status === 'ERROR').length;
    
    const statusIcon = problemCount === 0 && errorCount === 0 ? colors.green : colors.red;
    const statusText = problemCount === 0 && errorCount === 0 ? 'CORRECTO' : 'CON PROBLEMAS';
    
    markdown += `### ${statusIcon} ${type.toUpperCase()} (${typeResults.length} URLs) - ${statusText}

**Estadísticas:** ${colors.check} Correctas: ${correctCount} | ${colors.cross} Problemas: ${problemCount} | ${colors.warning} Errores: ${errorCount}

| URL | Tipo | Esperado | Estado | Detalles |
|-----|------|----------|--------|----------|
`;

    typeResults.forEach(result => {
      const expectedStatus = result.expectedNoindex ? 'DESINDEXADA' : 'INDEXADA';
      const statusIcon = result.status === 'CORRECTO' ? colors.check : 
                        result.status === 'PROBLEMA' ? colors.cross : colors.warning;
      const statusText = result.status === 'CORRECTO' ? '✅ Correcto' : 
                        result.status === 'PROBLEMA' ? '❌ Problema' : '⚠️ Error';
      
      let details = '';
      if (result.issues && result.issues.length > 0) {
        details = result.issues.map(issue => `• ${issue}`).join('<br>');
      } else if (result.status === 'CORRECTO') {
        if (result.expectedNoindex) {
          details = '✅ **Correctamente desindexada**<br>• Se encontraron etiquetas restrictivas';
        } else {
          details = '✅ **Correctamente indexada**<br>• Sin etiquetas restrictivas detectadas';
        }
      } else if (result.status === 'ERROR') {
        details = result.issues[0] || 'Error de conexión';
      }
      
      // Agregar detalles de cabeceras y metaetiquetas encontradas
      if (result.foundHeaders && result.foundHeaders.length > 0) {
        details += '<br><br>**Cabeceras HTTP encontradas:**<br>';
        details += result.foundHeaders.map(header => `• ${header}`).join('<br>');
      }
      
      if (result.foundMetas && result.foundMetas.length > 0) {
        details += '<br><br>**Metaetiquetas HTML encontradas:**<br>';
        details += result.foundMetas.map(meta => `• ${meta}`).join('<br>');
      }
      
      if ((!result.foundHeaders || result.foundHeaders.length === 0) && 
          (!result.foundMetas || result.foundMetas.length === 0)) {
        details += '<br><br>**No se encontraron cabeceras HTTP ni metaetiquetas restrictivas**';
      }
      
      markdown += `| \`${result.url}\` | ${result.type} | ${expectedStatus} | ${statusIcon} ${statusText} | ${details} |
`;
    });
    
    markdown += '\n';
  });

  // Resumen final
  markdown += `---

## 🎯 Resultado de la Auditoría Completa

### ${colors.success} Resumen Final

**Total de URLs auditadas:** ${summary.totalUrls}  
**URLs con comportamiento correcto:** ${summary.correctBehavior}  
**URLs con problemas:** ${summary.problems}  
**URLs con errores:** ${summary.errors}

### ${colors.info} Análisis por Categoría

`;

  Object.entries(resultsByType).forEach(([type, typeResults]) => {
    const correctCount = typeResults.filter(r => r.status === 'CORRECTO').length;
    const totalCount = typeResults.length;
    const percentage = Math.round((correctCount / totalCount) * 100);
    const statusIcon = correctCount === totalCount ? colors.green : colors.red;
    
    markdown += `- ${statusIcon} **${type.toUpperCase()}**: ${correctCount}/${totalCount} correctas (${percentage}%)
`;
  });

  markdown += `
### ${summary.problems === 0 && summary.errors === 0 ? colors.success : colors.warning} Conclusión

`;

  if (summary.problems === 0 && summary.errors === 0) {
    markdown += `${colors.success} **¡AUDITORÍA EXITOSA!** 

El sitio web **tecnologiaplus.com** tiene un comportamiento de indexación SEO **perfecto**:

✅ **Paginaciones correctamente desindexadas** - Las páginas de paginación del blog y categorías están correctamente marcadas con \`X-Robots-Tag: noindex, nofollow\`

✅ **Contenido principal correctamente indexado** - Todas las páginas principales, landing pages y posts del blog están correctamente indexados sin etiquetas restrictivas

✅ **Sin problemas de SEO detectados** - No se encontraron URLs con comportamiento incorrecto

**Recomendación:** El sitio está optimizado correctamente para SEO. No se requieren cambios en la configuración de indexación.
`;
  } else {
    markdown += `${colors.warning} **AUDITORÍA CON PROBLEMAS**

Se encontraron **${summary.problems} URLs** con problemas de indexación y **${summary.errors} URLs** con errores de conexión.

**Problemas detectados:**
`;
    
    const problematicUrls = results.filter(r => r.status === 'PROBLEMA');
    problematicUrls.forEach(result => {
      markdown += `- ${colors.cross} \`${result.url}\` - ${result.issues.join(', ')}
`;
    });
    
    markdown += `
**Recomendación:** Revisar y corregir los problemas identificados para optimizar el SEO del sitio.
`;
  }

  markdown += `
---

*Reporte generado automáticamente por el sistema de auditoría SEO*  
*Fecha: ${new Date().toISOString()}*
`;

  return markdown;
}

// Función principal
function main() {
  try {
    // Leer el reporte JSON
    const reportPath = path.join(__dirname, 'seo-audit-report.json');
    
    if (!fs.existsSync(reportPath)) {
      console.log('❌ No se encontró el archivo de reporte seo-audit-report.json');
      console.log('Ejecuta primero la auditoría completa: ./run-audit.sh full');
      return;
    }
    
    const reportData = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    
    // Generar reporte en Markdown
    const markdownReport = generateMarkdownReport(reportData);
    
    // Guardar reporte
    const outputPath = path.join(__dirname, 'seo-audit-report.md');
    fs.writeFileSync(outputPath, markdownReport);
    
    console.log('✅ Reporte en Markdown generado exitosamente');
    console.log(`📄 Archivo: ${outputPath}`);
    console.log('');
    console.log('📊 Resumen del reporte:');
    console.log(`   - Total de URLs: ${reportData.summary.totalUrls}`);
    console.log(`   - Correctas: ${reportData.summary.correctBehavior}`);
    console.log(`   - Problemas: ${reportData.summary.problems}`);
    console.log(`   - Errores: ${reportData.summary.errors}`);
    
  } catch (error) {
    console.error('❌ Error al generar el reporte:', error.message);
    process.exit(1);
  }
}

// Ejecutar script
if (require.main === module) {
  main();
}

module.exports = { generateMarkdownReport }; 