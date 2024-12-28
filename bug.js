const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error: Event listener leaks
//If you attach event listeners without detaching them when they're no longer needed,
//You may get memory leaks, especially in long-running applications like servers.

//Example (Adding an event listener that's not removed):
// let counter = 0;
// server.on('request', (req, res) => {
//   counter++;
//   console.log(`Requests handled ${counter}`);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// });