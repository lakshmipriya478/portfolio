import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const distPath = path.join(__dirname, 'dist');

// Serve static files first
app.use(express.static(distPath, { maxAge: '1d' }));

// For any other request, serve index.html (SPA routing)
app.use((req, res, next) => {
  // If it's not a static file, serve index.html
  if (!req.path.includes('.')) {
    res.sendFile(path.join(distPath, 'index.html'));
  } else {
    next();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n✅ Portfolio is LIVE!`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`✨ All pages working!\n`);
});
