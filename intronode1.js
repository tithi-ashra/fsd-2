//url Module
url = require('url');
http = require('http');
fs = require('fs');
// attr = "https://localhost:8000/default.html?name='rahul'&age=50#sir";
// data = url.parse(attr,true);
// console.log(data);

//task-1
// attr = "https://localhost:8000/default.html?year=2025&month:march";
// data = url.parse(attr,true);
// year = data.query.year;
// if((year%4==0 || year%100==0) && year%400!=0){
//     console.log(year+" is a leap year");
// }
// else{
//     console.log(year+" is not a leap year");
// }

// attr = "https://localhost:8000/default.html?year=2028&month:march";
// data = url.parse(attr,true);
// http.createServer((req,res)=>{
//     res.write(data.year+" "+data.month);
//     res.end();
// }).listen(3007);

// http.createServer((req,res)=>{
//     data = url.parse(req.url,true).query;;
//     res.writeHead(200,{'content-type':'text/html'});
//     res.write(data.year);
//     res.end();
// }).listen(3007);

//task-1
attr = "https://localhost:8000/default.html?year=2028&month:march";
data = url.parse(attr,false).query;
fs.writeFile('a.txt',data,()=>{});