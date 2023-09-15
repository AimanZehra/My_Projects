// 
const http = require("http");
const server = http.createServer((req,resp) => {
    //req: request process
    //resp: for writing response
    resp.writeHead(200,{"content-type": "text/html"});
    resp.write("<h1> Wow this is a response from the first server </h1>");
    resp.write('<h2>Ok nice work </h2>');
    resp.write('<button>Click Me </button>');
    resp.end('ok bye bye');
})
server.listen(9898);
