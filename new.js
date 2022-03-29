const http = require("http");
const {
  makeFile,
  getFile,
  updateFile,
  deleteFile,
} = require("./controllers/controller");

const server = http.createServer((req, res) => {
  if (req.url === "/post" && req.method === "POST") {
    makeFile(req, res);
  } else if (req.url === "/get" && req.method === "GET") {
    getFile(req, res);
  } else if (req.url === "/put" && req.method === "PUT") {
    updateFile(req, res);
  } else if (req.url === "/delete" && req.method === "DELETE") {
    deleteFile(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

const PORT = 8081;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
