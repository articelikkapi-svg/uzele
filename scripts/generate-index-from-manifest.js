const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '../build/client/.vite/manifest.json');
const outPath = path.join(__dirname, '../build/client/index.html');

if (!fs.existsSync(manifestPath)) {
  console.error('manifest.json not found at', manifestPath);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Find entry.client file
let entryFile = null;
let cssFile = null;
for (const key of Object.keys(manifest)) {
  const v = manifest[key];
  if (!entryFile && (v.name === 'entry.client' || (typeof v.file === 'string' && v.file.includes('entry.client')))) {
    entryFile = v.file;
  }
  if (!cssFile && v.css && Array.isArray(v.css) && v.css.length) {
    cssFile = v.css[0];
  }
}

if (!entryFile) {
  // fallback: find first isEntry true
  for (const key of Object.keys(manifest)) {
    const v = manifest[key];
    if (v.isEntry && v.file && v.file.includes('entry')) {
      entryFile = v.file; break;
    }
  }
}

if (!entryFile) {
  console.error('Could not locate entry.client file in manifest');
  process.exit(1);
}

const cssLink = cssFile ? `    <link rel="stylesheet" href="${cssFile}" />\n` : '';

const html = `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Site</title>
    <link rel="icon" href="favicon.svg" />\n${cssLink}  </head>
  <body>
    <div id="root">Yükleniyor…</div>
    <script type="module" src="${entryFile}"></script>
  </body>
</html>
`;

fs.writeFileSync(outPath, html, 'utf8');
console.log('Wrote', outPath);
