const http = require("node:http");
const fs = require("node:fs");

const hostname = "0.0.0.0";
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    fs.readFile("./index.html", function (err, data) {
      res.write(data);
      res.end();
    });
  } else {
    res.write("404");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
