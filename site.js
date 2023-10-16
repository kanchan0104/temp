const { readFileSync } = require('fs');
const http = require('http')


//get html file
const home=readFileSync('./coffeesite.html')
const homestyle=readFileSync('./coffeesite.css')
const homejs=readFileSync('./coffeesite.js')
const homebg=readFileSync('./coffeebg.jpg')
const server = http.createServer((req,res) => {
    const url=req.url
    console.log(url);

    // res.writeHead(200,{'content-type': 'test/html'});
    if(url==='/home')
    {
        // res.writeHead(200,{'content-type': 'test/html'});
        res.write(home);
        res.end('hey');
        
    }
    if(url==='/coffeesite.css')
    {
        // res.writeHead(200,{'content-type': 'test/html'});
        res.write(homestyle);
        res.end();
        
    }
    if(url==='/coffeesite.js')
    {
        // res.writeHead(200,{'content-type': 'test/html'});
        res.write(homejs);
        res.end();
        
    }
    if(url==='/img3.jpg')
    {
        // res.writeHead(200,{'content-type': 'test/html'});
        res.write(homebg);
        res.end();
        
    }
    
})

server.listen(5000)