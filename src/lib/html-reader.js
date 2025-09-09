import fs from 'fs';
import path from 'path';

export const htmlReader = (filePath) => {
  const absolutePath = path.join(process.cwd(), 'src', 'data', 'blogs', 'html', 'articles', filePath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }
  
  const htmlContent = fs.readFileSync(absolutePath, 'utf-8');

  return htmlContent;
}