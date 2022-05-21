var http = require('http');
var url = require('url');
var fs = require('fs');
var mysql = require('mysql');

//Create mysql connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

//Connect to mysql
con.connect(function(){
    if(err) throw err;
    console.log("Connected to the database");
    con.query("CREATE DATABASE nodeDB ", function(err, result){
        if(err) throw err;
        console.log("Database has been created");
    });
});

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if(filename == './') {
        filename = "./index"; //We currently do not have index.html
    }

    filename = filename + ".html"; //In order to remove .html part from the url

    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not found");
        }

        var params = url.parse(req.url, true).query;
        var dates = params.year;
        res.writeHead(200, {'Content-Type': 'text/html'});
        return res.end(dates);
    })
}).listen(8080);