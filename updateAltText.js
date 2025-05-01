const fs = require("fs");
const path = require("path");

// Cargar el JSON con los ALT actualizados
const altData = JSON.parse(fs.readFileSync(path.join(__dirname, "alt_texts.json"), "utf8"));


// Ruta base donde están los archivos JSX (ajusta según tu proyecto)
const baseDirectory = "./src/";

// Función para actualizar un archivo
function updateFile(filePath) {
    let content = fs.readFileSync(filePath, "utf8");

    altData.forEach(({ src, alt }) => {
        // Expresión regular para buscar el atributo `alt` en una imagen con `src`
        const regex = new RegExp(`(<img[^>]+src=["']${src}["'][^>]*alt=["'])([^"']*)(["'])`, "g");
        content = content.replace(regex, `$1${alt}$3`);
    });

    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ Actualizado: ${filePath}`);
}

// Recorrer archivos en busca de JSX
function processDirectory(directory) {
    fs.readdirSync(directory).forEach((file) => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath); // Si es una carpeta, sigue buscando
        } else if (fullPath.endsWith(".jsx")) {
            updateFile(fullPath); // Si es un archivo `.jsx`, actualizarlo
        }
    });
}

// Ejecutar el script
processDirectory(baseDirectory);
console.log("🎉 ¡Todos los ALT han sido actualizados!");
