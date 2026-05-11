import puppeteer from 'puppeteer';
import { createServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

async function exportPdf() {
  console.log('Starting Vite server...');
  const server = await createServer({
    root: rootDir,
    server: {
      port: 5173,
    },
  });
  
  await server.listen();
  console.log('Server running at http://localhost:5173/');

  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Wait until the network is idle so all fonts and CSS load
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  
  // Wait a bit more to ensure JS rendered the DOM
  await new Promise(r => setTimeout(r, 1000));
  
  const outputPath = path.resolve(rootDir, 'Ankush_Reddy_Sugureddy_Resume.pdf');
  console.log(`Exporting PDF to ${outputPath}...`);
  
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0',
      bottom: '0',
      left: '0',
      right: '0'
    }
  });

  console.log('PDF export complete!');
  await browser.close();
  await server.close();
  process.exit(0);
}

exportPdf().catch(err => {
  console.error('Error exporting PDF:', err);
  process.exit(1);
});
