// Create web server
// Create a web server that listens on port 3000 and outputs a message when it's ready.
// To test the server, open the browser and navigate to http://localhost:3000.
// Expected output: Server is running on http://localhost:3000
// Use the createServer method from the http module to create the server.
// Use the listen method from the server object to listen on port 3000.
// Use the writeHead method to set the status code to 200 and the content type to text/plain.
// Use the end method to send the response with the message "Server is running on http://localhost:3000".
// Use the console.log method to output the message "Server is running on http://localhost:3000" when the server is ready.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server is running on http://localhost:3000');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: comment.js
// Create a web server that listens on port 3000 and outputs a message when it's ready.
// To test the server, open the browser and navigate to http://localhost:3000.
// Expected output: Server is running on http://localhost:3000
// Use the createServer method from the http module to create the server.
// Use the listen method from the server object to listen on port 3000.
// Use the writeHead method to set the status code to 200 and the content type to text/plain.
// Use the end method to send the response with the message "Server is running on http://localhost:3000".
// Use the console.log method to output the message "Server is running on http://localhost:3000" when the server is ready.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Server is running on http://localhost:3000');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: comment.js
// Create a web server that listens on port 3000 and