// ===== SCRIPT DE BUNDLE AUTOMÁTICO =====
import fs from 'fs';
import path from 'path';

const files = [
  'i18n.js',
  'mockData.js',
  'state.js',
  'charts.js',
  'dayforceExporter.js',
  'app.js'
];

let bundleContent = '// ===== BUNDLE STANDALONE (ZERO CORS / COMPATIBLE CON FILE://) =====\n(function() {\n';

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Quitar imports
  content = content.replace(/^import\s+[\s\S]*?from\s+['"][^'"]+['"];?/gm, '');

  // Quitar export default, export const, export function, export class
  content = content.replace(/^export\s+default\s+/gm, '');
  content = content.replace(/^export\s+(const|let|var|function|class)\s+/gm, '$1 ');
  content = content.replace(/^export\s*\{[\s\S]*?\};?/gm, '');

  bundleContent += `\n// --- MODULE: ${file} ---\n` + content + '\n';
}

bundleContent += '\n})();\n';

fs.writeFileSync(path.join(process.cwd(), 'bundle.js'), bundleContent, 'utf8');
console.log('✅ bundle.js creado exitosamente (' + (bundleContent.length / 1024).toFixed(1) + ' KB)');
