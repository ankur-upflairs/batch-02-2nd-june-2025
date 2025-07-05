const http = require("http");


const requestListner =(req, res) => {
    // console.log(req.url, req.method) 
    let route = req.url 
    if(route == '/'){
        res.statusCode = 201 
        res.setHeader('Content-Type','text/plain')
        res.write('this is home page')
        res.end()
    }
    else if(route === '/blogs'){        
        res.write('this is all blogs page')
        res.end()
    }
    else if(route == '/edit'){
        res.writeHead(200,{
            'Content-Type':'application/json'
        })
        res.write(JSON.stringify({name:'pawan'}))
        res.end()
    }
//   res.end("hello there !!!");
}
//html content , css ,json , csv , javascript 

const server = http.createServer(requestListner);
// const server = http.createServer((req, res) => {
//   res.end("hello there !!!");
// });

server.listen(3000, "localhost", () => {
  console.log("server is running on port 3000");
});
 


