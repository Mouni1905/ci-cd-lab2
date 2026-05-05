const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to CI/CD Lab 2 🚀");
  } else if (req.url === "/health") {
    res.end("OK");
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});
