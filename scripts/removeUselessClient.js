const fs = require('fs');
const path = require('path');

const hookKeywords = [
  'useState(', 'useEffect(', 'useRef(', 'useReducer(', 'useLayoutEffect(',
  'navigator.', 'window.', 'document.', 'addEventListener(', 'removeEventListener(',
  'localStorage', 'sessionStorage'
];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let results = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      results = results.concat(walk(full));
    } else if (ent.isFile() && /\.jsx$/.test(ent.name)) {
      results.push(full);
    }
  }
  return results;
}

function shouldRemove(content) {
  if (!content.startsWith("'use client'")) return false;
  // If any hook / browser-specific keyword exists, keep it client.
  for (const kw of hookKeywords) {
    if (content.includes(kw)) return false;
  }
  return true;
}

function transform(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  if (!shouldRemove(code)) return;
  const modified = code.replace(/^'use client';?\n/, '');
  fs.writeFileSync(filePath, modified, 'utf8');
  console.log('Removed use client ->', filePath);
}

const target = path.join(__dirname, '..', 'src');
walk(target).forEach(transform); 