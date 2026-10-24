const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4000;

const server = http.createServer((req, res) => {

    let filePath = path.join(
        __dirname,
        req.url === "/" ? "index.html" : req.url
    );

    const ext = path.extname(filePath);

    const contentTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "application/javascript"
    };

    fs.readFile(filePath, (err, data) => {

        if (err) {
            res.writeHead(404);
            res.end("File Not Found");
            return;
        }

        res.writeHead(200, {
            "Content-Type": contentTypes[ext] || "text/plain"
        });

        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});