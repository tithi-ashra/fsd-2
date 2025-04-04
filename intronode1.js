//url Module
// url = require('url');
// http = require('http');
// fs = require('fs');
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

//Events
// const EventEmitter = require('events');
// const Event = new EventEmitter();
// Event.on('sayname',()=>{console.log("your name is xyz.")});
// Event.emit('sayname');

// Event.on('sayname',()=>{console.log("your name is xyz.")});
// Event.on('sayname',()=>{console.log("middle name")});
// Event.on('sayname',()=>{console.log("last name")});
// Event.emit('sayname');

// Event.on('StatusPage',(code,msg)=>{console.log(code,msg)});
// Event.emit('StatusPage',200,'OK');

// Event.on('sayname',()=>{console.log("your name is xyz."),Event.emit('sayclass')});
// Event.on('sayclass',()=>{console.log("I am in B1.")});
// Event.emit("sayname");
// console.log("Thanks");

//task-2
// const fs = require('fs');
// Event.on('write',()=>{
//             fs.writeFile('new.txt','this is data',()=>{Event.emit('append')})
//             });
// Event.on('append',()=>{
//             fs.appendFile('new.txt','that is data',()=>{Event.emit('read')})
//             });
// Event.on('read',()=>{
//             data = fs.readFile('new.txt','utf-8',()=>{console.log(data)})
//             });
// Event.emit('write');
// console.log('Thanks for using my program');

//task-1
// var l1 = ()=>{console.log("I am listener1")};
// var l2 = ()=>{console.log("I am listener2")};
// Event.addListener('task',l1);
// Event.on('task',l2);
// let count = Event.listenerCount('task');
// console.log(count+' for task event');
// Event.emit('task');
// Event.removeListener('task',l1);
// count = Event.listenerCount('task');
// console.log(count);
// Event.emit('task');

//task-3
// Event.on('radneg',(r)=>{
//         if(r<0){
//             console.log("Radius must be positive.");
//         }
//         else{
//             console.log("Perimeter of circle is "+2*3.14*r);
//         }
// });
// Event.on('sideneg',(s)=>{
//     if(s<0){
//         console.log("Side must be positive.");
//     }
//     else{
//         console.log("Perimeter of Square is "+4*s);
//     }
// });
// Event.emit('radneg',5);
// Event.emit('radneg',-5);
// Event.emit('sideneg',-6);
// Event.emit('sideneg',6);

//Own module
// const sum = (a,b)=>{return a+b};
// module.exports = sum;

// const sum = (a,b)=>{return a+b};
// const mul = (a,b)=>{return a*b};
// module.exports.s = sum;
// module.exports.m = mul;