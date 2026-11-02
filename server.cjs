const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const files = {'/assets/fortune-cookie.png':['assets/fortune-cookie.png','image/png'], '/':['index.html','text/html'], '/restaurants.js':['restaurants.js','text/javascript'], '/app.js':['app.js','text/javascript'], '/style.css':['style.css','text/css']};
http.createServer((req,res)=>{const file=files[new URL(req.url,'http://localhost').pathname];if(!file){res.writeHead(404);return res.end('Not on the menu.');}fs.readFile(path.join(root,file[0]),(err,data)=>{res.writeHead(err?500:200,{'Content-Type':file[1]+(file[1].startsWith('text/')?'; charset=utf-8':'')});res.end(err?'Kitchen unavailable':data);});}).listen(process.env.PORT || 3000,'127.0.0.1',()=>console.log('Vibe Dining is serving at http://localhost:3000'));
