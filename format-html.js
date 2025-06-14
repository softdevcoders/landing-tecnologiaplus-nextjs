const fs = require('fs');
const prettier = require('prettier');
const path = require('path');

// Ruta del archivo HTML a formatear
// const htmlFile = 'src/data/blogs/html/articles/localizadores-para-restaurantes/guia-localizadores-clientes-para-restaurantes-colombia.html';
const htmlFile = 'src/data/blogs/html/articles/localizadores-para-restaurantes/localizadores-de-clientes-resistentes-golpes-caidas.html';

// Leer el contenido del archivo
fs.readFile(htmlFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Eliminar los caracteres de escape
    const unescapedHtml = data.replace(/\\"/g, '"').replace(/\\n/g, '\n');

    // Formatear el HTML usando prettier
    prettier.format(unescapedHtml, {
        parser: 'html',
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: false,
        bracketSpacing: true,
        htmlWhitespaceSensitivity: 'css'
    }).then(formattedHtml => {
        // Escribir el HTML formateado de vuelta al archivo
        fs.writeFile(htmlFile, formattedHtml, 'utf8', (err) => {
            if (err) {
                console.error('Error al escribir el archivo:', err);
                return;
            }
            console.log('HTML formateado correctamente!');
        });
    }).catch(err => {
        console.error('Error al formatear el HTML:', err);
    });
}); 