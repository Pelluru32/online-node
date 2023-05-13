var http = require("http");
var fs = require("fs");
//--------------------------

var server = http.createServer(function(request, response){
    console.log(request.url);
    var fileurl = request.url.replace("/","");
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(fs.readFileSync(fileurl,"utf-8"));
    response.end();
});

server.listen(1010,"localhost",function(error){
    if(error){
        console.log("Error ", error);
    }else{
        console.log("Web Server is now ready to be used")
    }
})