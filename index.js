// 1. Require the http module
const http = require("http");

// 2. Create the server
const server = http.createServer((req, res) => {
  // Log request path
  console.log(`Request path: ${req.url}`);

  // Respond only to GET requests at "/"
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  } else {
    // Handle other paths with 404
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

// 3. Listen on port 3000
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});