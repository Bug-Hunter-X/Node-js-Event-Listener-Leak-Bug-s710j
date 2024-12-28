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

// Solution: Removing Event Listeners
//To prevent memory leaks, make sure to remove event listeners when they're no longer needed:

// let requestCount = 0;
// const requestListener = (req, res) => {
//   requestCount++;
//   console.log(`Requests handled ${requestCount}`);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
// };

// server.on('request', requestListener);

// // After some time or when the server is shutting down:
// // server.removeListener('request', requestListener);
// //This should be done when we don't need the listener anymore to prevent memory leaks.