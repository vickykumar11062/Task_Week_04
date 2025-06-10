// Set up a simple web server using Express.js that can handle basic routing and middleware. Implement routes to respond to at least two different endpoints.

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: Log each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route 1: Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Express Web Server!');
});

// Route 2: About endpoint
app.get('/about', (req, res) => {
  res.send('This is a simple server using Express.js');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
