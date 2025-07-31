#!/usr/bin/env node

const { makeRequest, hasIndexingIssues } = require('./seo-audit');

// URLs de prueba rápida
const testUrls = [
  {
    url: 'https://tecnologiaplus.com',
    type: 'page',
    label: 'Página Principal',
    expectedNoindex: false
  },
  {
    url: 'https://tecnologiaplus.com/blog',
    type: 'page',
    label: 'Blog Principal',
    expectedNoindex: false
  },
  {
    url: 'https://tecnologiaplus.com/localizadores-para-restaurantes',
    type: 'landing',
    label: 'Landing Localizadores',
    expectedNoindex: false
  },
  {
    url: 'https://tecnologiaplus.com/blog?page=2',
    type: 'blog-pagination',
    label: 'Blog Paginación',
    expectedNoindex: true
  },
  {
    url: 'https://tecnologiaplus.com/blog/llamadores-de-meseros?page=2',
    type: 'category-pagination',
    label: 'Categoría Paginación',
    expectedNoindex: true
  }
];

// Función para procesar una URL de prueba
async function processTestUrl(urlData) {
  const { url, type, label, expectedNoindex } = urlData;
  
  try {
    console.log(`\n🔍 Verificando: ${url}`);
    console.log(`   Tipo: ${type} | Esperado: ${expectedNoindex ? 'DESINDEXADA' : 'INDEXADA'}`);
    
    const response = await makeRequest(url);
    const indexingResult = hasIndexingIssues(response.headers, response.body);
    const issues = indexingResult.issues;
    const hasIssues = issues.length > 0;
    
    // Determinar estado
    let status = 'CORRECTO';
    if (response.statusCode >= 400) {
      status = 'ERROR';
    } else if (expectedNoindex && !hasIssues) {
      status = 'PROBLEMA';
    } else if (!expectedNoindex && hasIssues) {
      status = 'PROBLEMA';
    }
    
    // Mostrar resultado
    if (status === 'CORRECTO') {
      if (expectedNoindex) {
        console.log(`   ✅ Correctamente desindexada`);
        if (issues.length > 0) {
          issues.forEach(issue => console.log(`      - ${issue}`));
        }
      } else {
        console.log(`   ✅ Correctamente indexada`);
      }
    } else if (status === 'PROBLEMA') {
      console.log(`   ❌ Problema: debería estar ${expectedNoindex ? 'desindexada' : 'indexada'}`);
      if (issues.length > 0) {
        issues.forEach(issue => console.log(`      - ${issue}`));
      }
    } else {
      console.log(`   ⚠️ Error: ${response.statusCode}`);
    }
    
    return { url, type, label, status, expectedNoindex, issues };
    
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
    return { url, type, label, status: 'ERROR', expectedNoindex, issues: [error.message] };
  }
}

// Función principal
async function main() {
  console.log('🧪 PRUEBA RÁPIDA SEO - TECNOLOGIAPLUS.COM');
  console.log('Verificando 5 URLs clave...\n');
  
  const results = [];
  
  for (const urlData of testUrls) {
    const result = await processTestUrl(urlData);
    results.push(result);
    
    // Pequeña pausa entre requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Resumen
  const correct = results.filter(r => r.status === 'CORRECTO').length;
  const problems = results.filter(r => r.status === 'PROBLEMA').length;
  const errors = results.filter(r => r.status === 'ERROR').length;
  
  console.log('\n📊 RESUMEN DE PRUEBA RÁPIDA');
  console.log('============================');
  console.log(`✅ Correctas: ${correct}`);
  console.log(`❌ Problemas: ${problems}`);
  console.log(`⚠️ Errores: ${errors}`);
  
  if (problems === 0 && errors === 0) {
    console.log('\n🎉 ¡Prueba exitosa! Todas las URLs tienen el comportamiento correcto');
  } else if (problems > 0) {
    console.log(`\n⚠️ Se encontraron ${problems} URLs con problemas`);
  }
  
  return results;
}

// Ejecutar script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { main, testUrls }; 