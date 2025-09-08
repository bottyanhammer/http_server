import * as http from "node:http";

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end("Helló itt a szerever!");
});

server.listen(3000, () => {
    console.log("The server is running on http://localhost:3000");
});