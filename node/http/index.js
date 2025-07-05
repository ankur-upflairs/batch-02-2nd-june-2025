const http = require('http')


const server = http.createServer((req,res)=>{
    // console.log(req.url,req.method)
    let route = req.url 
    if(route == '/'){
        res.write('<h1>this is home page</h1>')
        res.end()
    }
    else if (route == '/products'){
        
        res.writeHead(200, {
            'content-type':'text/html'
        })
        res.write('<h1>this is all product page</h1>')
        res.end()
    }
})

server.listen(3000,'',()=>{
    console.log('server is running on port 3000')
})
