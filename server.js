const http = require('http');
const httpServer = http.createServer( (request, response)=>{
    const url = request.url;
    // response.end(`Request URL - ${url}`);
    switch (url) {
        case '/':
            response.end(`Home content`);
            break;
        case '/home':
            response.end(`Home content`);
            break;
        case '/about':
            response.end(`About content`);
            break;
        case '/project':
            response.end(`Project content`);
            break; 
        case '/skills':
            response.end(`Skills content`);
            break;        
        default:
            console.log(`Invalid URL`);
            response.end(`Invalid URL`)
            break;
    }
    //response.end("Hello, from server....");
    } );
    
    httpServer.listen(8080, ()=>{
        console.log(`Server started on port 8080`); 
    });