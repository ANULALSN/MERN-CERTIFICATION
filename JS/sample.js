var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("<h3 style=color:red;>Hello World</h3>");
    res.end()
}).listen(8080);