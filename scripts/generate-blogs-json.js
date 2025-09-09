const fs = require('fs');
const path = require('path');

// Leer el archivo de blogs
const blogsFilePath = path.join(__dirname, '..', 'src', 'data', 'blogs', 'index.js');
const outputFile = path.join(__dirname, '..', 'data', 'blogs.json');

// Leer el contenido del archivo
const content = fs.readFileSync(blogsFilePath, 'utf8');

// Buscar todos los arrays de posts
const arrayMatches = content.match(/const\s+(\w+)\s*=\s*\[([\s\S]*?)\];/g);

if (!arrayMatches) {
  console.error('No se encontraron arrays de datos');
  process.exit(1);
}

let allBlogs = [];

// Procesar cada array encontrado
for (const match of arrayMatches) {
  const arrayNameMatch = match.match(/const\s+(\w+)\s*=\s*\[/);
  if (!arrayNameMatch) continue;
  
  const arrayName = arrayNameMatch[1];
  console.log(`Procesando: ${arrayName}`);
  
  // Extraer el contenido del array
  const arrayContentMatch = match.match(/\[([\s\S]*?)\];$/);
  if (!arrayContentMatch) continue;
  
  const arrayContent = arrayContentMatch[1];
  
  // Crear código temporal que simule las dependencias
  const tempCode = `
const routes = {
  blog: {
    children: {
      llamadoDeEnfermeriaCuidamaster: { url: '/llamado-de-enfermeria-cuidamaster', category_key: 'llamado-de-enfermeria' },
      llamadoresDeMeseros: { url: '/llamadores-de-meseros', category_key: 'llamadores-de-meseros' },
      localizadoresParaRestaurantes: { url: '/localizadores-para-restaurantes', category_key: 'localizadores-para-restaurantes' },
      turneroTurnoexpress: { url: '/turnero-turnoexpress', category_key: 'turnero-turnoexpress' },
      sistemaDeTurnosTurnomaster: { url: '/sistema-de-turnos-turnomaster', category_key: 'sistema-de-turnos-turnomaster' },
      dispensadorDeTickets: { url: '/dispensador-de-tickets', category_key: 'dispensador-de-tickets' },
      rollosDeFichosParaTurnos: { url: '/rollos-de-fichos-para-turnos', category_key: 'rollos-de-fichos-para-turnos' },
      rollosDePapelTermico: { url: '/rollos-de-papel-termico', category_key: 'rollos-de-papel-termico' },
      calificadorDeServicioAlCliente: { url: '/calificador-de-servicio-al-cliente-opinamaster', category_key: 'calificador-de-servicio-al-cliente' },
      encuestaVirtualOpinamaster: { url: '/encuesta-virtual-opinamaster', category_key: 'encuesta-virtual' }
    }
  }
};

const categories = {};

const arrayData = [${arrayContent}];
arrayData;
`;

  try {
    const arrayData = eval(tempCode);
    if (Array.isArray(arrayData)) {
      allBlogs = allBlogs.concat(arrayData);
      console.log(`  ✅ ${arrayData.length} blogs encontrados`);
    }
  } catch (evalError) {
    console.warn(`  ⚠️  Error procesando ${arrayName}: ${evalError.message}`);
  }
}

if (allBlogs.length === 0) {
  console.error('No se pudieron extraer datos de blogs');
  process.exit(1);
}

// Crear directorio si no existe
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Escribir el JSON
fs.writeFileSync(outputFile, JSON.stringify(allBlogs, null, 2));

console.log(`✅ JSON generado exitosamente!`);
console.log(`📁 Archivo: ${outputFile}`);
console.log(`📊 Total de blogs: ${allBlogs.length}`);
