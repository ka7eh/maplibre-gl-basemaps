const fs = require("fs");
const http = require("http");
const path = require("path");

http.createServer(function(req, res) {
    const url = req.url === "/" ? "/index.html" : req.url;
    const dir = url.startsWith("/lib/") ? path.join(__dirname, "../") : "./examples";
    fs.readFile(`${dir}${url}`, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(8080);
