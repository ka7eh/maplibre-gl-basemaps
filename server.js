const fs = require("fs");
const http = require("http");

http.createServer(function(req, res) {
    const url = req.url === "/" ? "/example.html" : req.url;
    fs.readFile(`${__dirname}${url}`, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(8080);
