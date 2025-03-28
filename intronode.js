// const msg = function(){
//     var d = new Date();
//     var h = d.getHours();
//     var m = d.getMinutes();
//     var s = d.getSeconds();
//     var ampm = h < 12 ? 'AM' : 'PM';
//     h = h % 12;
//     if(h == 0) h = 12;
//     console.log(h + ':' + m + ':' + s + ' ' + ampm);
// }
// setInterval(msg,1000);
// setTimeout(msg,3000);
//OR
// const msg1 = function(){
//     var d1 = new Date().toLocaleTimeString();
//     console.log(d1);
// }
// setInterval(msg1,1000);
// setTimeout(msg1,3000);


// http module
// http = require('http');
// http.createServer((req,res) => {
//     var a = {'name':'abc','age':30};
//     res.write(JSON.stringify(a));
//     res.end();
// }).listen(3007);

// http = require('http');
// fs = require('fs');
// http.createServer((req,res)=>{
//     let a = fs.readFileSync("images.jpg");
//     res.writeHead(200,{'content-type':'image/png'});
//     res.write(a);
//     res.end;
// }).listen(3007);

//task-1
// http = require('http');
// fs = require('fs');
// server = http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.writeHead(200,{'content-type':'text/json'});
//         var a = {'name':'abc','age':30};
//         res.write(JSON.stringify(a));
//         res.end();
//     }
//     else if(req.url=='/gallery'){
//         res.writeHead(200,{'content-type':'image/jpeg'});
//         res.write(fs.readFileSync('images.jpg'));
//         res.end;
//     }
//     else if(req.url=='/form'){
//         res.writeHead(200,{'content-type':'text/html'});
//         res.write(fs.readFileSync('intronode.html'));
//         res.end;
//     }
// }).listen(3007);

// http = require('http');
// fs = require('fs');
// server = http.createServer((req,res)=>{
//     setTimeout(()=>{
//         res.writeHead(200,{'content-type':'text/html'});
//             res.write('hello');
//             res.end();
//     },5000)
// }).listen(3007);

// http = require('http');
// fs = require('fs');
// server = http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write(`<p id='demo'></p>
//         <script>
//             setTimeout(function(){
//             document.getElementById("demo").innerHTML = 'helloworld';},5000)</script>`)
//     res.end()
// }).listen(3007);