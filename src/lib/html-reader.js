import fs from 'fs';
import path from 'path';
import { enlacesParaReemplazar } from '@/config/enlaces-para-reemplazar-en-html';

const replaceLinksInHtml = (htmlContent) => {
  let modifiedHtml = htmlContent;

  // Recorremos la lista de enlaces a reemplazar
  enlacesParaReemplazar.forEach(({ previous, current }) => {
    // Si el enlace 'previous' es una URL completa, necesitamos reemplazar solo el path.
    // Si el enlace 'previous' contiene el dominio base, extraemos el path solo.
    const pathToReplace = new URL(previous).pathname;
    
    // Creamos una expresión regular para encontrar todas las instancias del `path` en el contenido HTML
    const regex = new RegExp(pathToReplace, 'g');
    const regexUrlBase = new RegExp('https://tecnologiaplus.com/', 'g');
    
    // Reemplazamos el `path` encontrado por la URL actual
    modifiedHtml = modifiedHtml.replace(regex, current);
    modifiedHtml = modifiedHtml.replace(regexUrlBase, '/');
  });

  return modifiedHtml;
};

export const htmlReader = (filePath) => {
  const absolutePath = path.join(process.cwd(), 'src', 'data', 'blogs', 'html', 'articles', filePath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }
  
  const htmlContent = fs.readFileSync(absolutePath, 'utf-8');

  const modifiedHtml = replaceLinksInHtml(htmlContent);
  return modifiedHtml;
}