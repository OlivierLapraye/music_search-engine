/* INCLUDES */
const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {
  const content = fs.readFileSync("./datasets/indexed.json");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(content);
});

var port = process.env.PORT || 3000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
