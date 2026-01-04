#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3333;
const FILE_PATH = path.join(__dirname, '../packages/rrweb/dist/rrweb.min.js');

const server = http.createServer((req, res) => {
  // Only serve the main file
  if (req.url === '/rrweb.min.js' || req.url === '/') {
    fs.readFile(FILE_PATH, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error loading file: ' + err.message);
        return;
      }
      
      res.writeHead(200, {
        'Content-Type': 'application/javascript',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Serving: ${FILE_PATH}`);
  console.log(`Access at: http://localhost:${PORT}/rrweb.min.js`);
});

