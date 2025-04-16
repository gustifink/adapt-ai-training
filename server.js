const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

// Add security headers but configure to allow CSS and other resources
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

// Compress responses
app.use(compression());

// Set correct MIME types
app.use((req, res, next) => {
  const ext = path.extname(req.url);
  if (ext === '.css') {
    res.type('text/css');
  }
  next();
});

// Log requests with environment info
app.use((req, res, next) => {
  console.log(`[${config.env}] ${req.method} ${req.url}`);
  next();
});

// Add environment indicator for non-production environments
app.use((req, res, next) => {
  if (config.env !== 'production') {
    res.locals.env = config.env;
  }
  next();
});

// Serve static files with proper caching
app.use(express.static(path.join(__dirname), {
  maxAge: config.env === 'production' ? '1d' : '0',
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${config.env} mode at http://localhost:${PORT}/`);
  console.log(`Press Ctrl+C to stop the server`);
}); 