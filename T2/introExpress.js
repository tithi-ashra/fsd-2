const path = require('path');
const expr = require('express');
const app = expr();
// app.get('/',(req,res)=>{
//     res.set('Content-type','text/html');
//     res.write('<h1>Hello</h1>');
//     res.send();
// });
// app.get('/about',(req,res)=>{
//     res.send('how are you?');
// });
// app.use((req,res)=>{
//     res.status(404).send('Page not found');
// });
// app.listen(3006,()=>{console.log('ON')});


//route parameter
// app.get('/:id',(req,res)=>{
//     res.set('Content-type','text/html');
//     res.write('your user id is : '+req.params.id);
//     res.send();
// });
// app.listen(3006,()=>{console.log('ON')});

//task-1
// app.get('/userId/:uid/test/:test',(req,res)=>{
//     res.set('Content-type','text/html');
//     res.write('your marks is '+req.params.uid+" in the test of "+req.params.test);
//     res.send();
// });
// app.get('/things/:item/:id',(req,res)=>{
//     res.set('Content-type','text/html');
//     res.write('your item is '+req.params.item+' of id '+req.params.id);
//     res.send();
// });
// app.get('/flight/:from-:to',(req,res)=>{
//     res.set('Content-type','text/html');
//     res.write('your flight is from '+req.params.from+' to '+req.params.to);
//     res.send();
// });
// app.listen(3006,()=>{console.log('ON')});


//json response
// student = {'name':'deep','age':20};
// app.get('/',(req,res)=>{
//     res.set('Content-type','application/json');
//     //res.write(JSON.stringify(student));
//     res.send(student);
// });
// app.listen(3006,()=>{console.log('ON')});

// data = JSON.stringify(student);
// app.get('/',(req,res)=>{
//     res.set('Content-type','application/json');
//     //res.write(data.name);                           //error
//     res.send(data.name);                              //no output
// });
// app.get('/',(req,res)=>{
//     res.set('Content-type','text/html');                         
//     res.send(student.name);                             
// });
// app.listen(3006);

//task-2
// app.get('/',(req,res)=>{
//     student = [{name:'abc',age:28},{name:'def',age:40},{name:'mno',age:10}];
//     res.send(student);
// });
// app.get('/sort',(req,res)=>{
//     sorted = student.sort((a,b)=>b.age-a.age);
//     for(i=0;i<sorted.length;i++){
//         res.send(sorted[i].name+" "+sorted[i].age+"<br>");
//     }
// });
// app.listen(3006);


//Link HTML,CSS,JS
// app.use(expr.static('../Public'));
// app.listen(3006);

// app.use(expr.static('../Public'),{index:'introExpress.html'});
// app.listen(3006);

// var sp = path.join(__dirname,'../Public');
// app.use(expr.static('../Public'));
// app.get('/',(req,res)=>{
//     res.sendFile(sp+'/index.html');
// });
// app.listen(3006);


//GET Method
// app.use(expr.static('../Public',{index:'index.html'}))
// app.get('/process',(req,res)=>{
//     let uname = req.query.fname;
//     let password = req.query.pwd;
//     res.write(uname+" "+password);
//     res.send();
// });
// app.listen(3006);

//task-2
// app.use(expr.static('../Public',{index: 'index.html'}));
// app.get("/print",(req,res)=>{
// res.set("content-type","text/html");
// t1 = (req.query.msg).split(".");
// for(i in t1){
//     res.write(t1[i]+ "</br>");
// }
// res.send();
// });
// app.listen(3006);

//task-3
// app.use(expr.static('../Public',{index:'index.html'}));
// app.get('/calc',(req,res)=>{
//     var n1 = parseInt(req.query.num1);
//     var n2 = parseInt(req.query.num2);
//     if((n1>0)&&(n2>0)){
//         if(req.query.sel=='add'){
//             a = n1+n2;
//             res.write("<h1>Addition is : " + a + "</h1>");
//         }
//         else if(req.query.sel == "sub"){
//             s = n1-n2;
//             res.write("<h1>Subtraction is : " + s + "</h1>");
//         }
//         else if(req.query.sel == "mul"){
//             m = n1*n2;
//             res.write("<h1>Multiplication is : " + m + "</h1>");
//         }
//         else if(req.query.sel == "div"){
//             d = n1/n2;
//             res.write("<h1>Division is : " + d + "</h1>");
//         }
//         else{
//             res.write("<h1>You have not selected any formula.</h1>");
//         }
//     }
//     else{
//         res.write("<h1>Please enter the valid number/s.</h1>");
//     }
//     res.send();
// });
// app.listen(3006);


//POST Method
// app.use(expr.static('../Public'));
// app.use(expr.urlencoded({extended:false}));
// app.post('/',(req,res)=>{
//     let uname = req.body.fname;
//     let password = req.body.pwd;
//     res.write(uname+" "+password);
//     res.send();
// });
// app.listen(3006);

//task-4
// app.use(expr.static('../Public'));
// app.use(expr.urlencoded({extended:false}));
// app.post('/',(req,res)=>{
//     let uname = req.body.fname;
//     let password = req.body.pwd;
//     let gender = req.body.g;
//     res.write(uname+" "+password+" "+gender);
//     res.send();
// });
// app.listen(3006);

//task-5
// app.use(expr.static('../Public'));
// app.use(expr.urlencoded({extended:false}));
// app.post('/login',(req,res)=>{
//     if( req.body.uname == 'admin' ){
//         res.write(`<h1 style="color:green">Hey ${req.body.uname},Welcome!</h1><br>`)
//     }
//     else{
//         res.write(`<h1 style="color:red">Please login with Admin name</h1>`);
//     }
//     res.send();
// });
// app.listen(3006);


//Middleware
// const cb=(req,res,next)=>{
//     console.log("initially");
//     res.set("content-type","text/html")                  //one time
//     res.write("Welcome");
//     next();
// }
// const cb1=(req,res,next)=>{
//     res.write("Addition = " + (5+5)+"</br>");
//     next();
// }
// app.use("/data",cb,cb1);
// app.get("/data",(req,res)=>{
//     res.write("<h1>Hello Welcome to LJU</h1>");
//     res.send();
// });
// app.listen(3006);

//task-1
// app.use(expr.static('../Public',{index:'index.html'}));
// app.use(expr.urlencoded({extended:false}));
// app.post("/process",(req,res,next)=>{
//     if(req.body.fname == 'admin'){
//         next();
//     }
//     else{
//         res.write("Warning");
//     }
//     res.send();
// });
// app.post("/process",(req,res)=>{
//     res.write("welcome admin");
//     res.send();
// });
// app.listen(5000);

//task-2
// app.use(expr.static('../Public',{index:'index.html'}));
// app.get("/login",(req,res,next)=>{
//     res.set("content-type","text/html");
//     res.write("<center><h1>Welcome " + req.query.fname + "</h1>");
//     res.write("<center><h2>Your email id is " + req.query.mail + "</h2>");
//     next();
// });
// app.get('/login',(req,res)=>{
//     if(req.query.msg == "on"){
//         res.write("<h3>Thank you for your subcsription</h3><a href='/'>Logout</a>");
//     }
//     else{
//         res.write("<h3>You can subcribe to get daily updates</h3><a href='/subscribe'>Subscribe</a></center>");
//     }
//     res.send();
// });
// app.get("/subscribe",(req,res)=>{
//     res.set("content-type","text/html");
//     res.write("<h3>Thank you for your subcsription</h3></center><a href='/'>Logout</a>");
//     res.send();
// });
// app.listen(5000);


//Cookie
// cp = require('cookie-parser');
// app.use(cp());
// app.get('/',(req,res)=>{
//     res.cookie('fname','jeet');
//     res.cookie('lname','darji');
//     res.send('go and inspect');
// });
// app.listen(5000);

// cp = require('cookie-parser');
// app.use(cp());
// app.get('/',(req,res)=>{
//     res.cookie('fname','jeet');
//     res.cookie('lname','darji');
//     res.send('go and inspect');
// });
// app.get('/cookie',(req,res)=>{
//     res.write(JSON.stringify(req.cookies));
//     res.write(req.cookies.fname+" ");
//     res.send();
// });
// app.get('/clear',(req,res)=>{
//     res.clearCookie('fname');
//     res.send(req.cookies);
// });
// app.listen(5000);

//task-1
// cp = require("cookie-parser");
// app.use(cp());
// app.use(expr.static('../Public',{index:'index.html'}));
// app.get('/next',(req,res)=>{
//     res.cookie("uname",req.query.uname);
//     res.cookie("lname",req.query.lname);
//     res.cookie("password",req.query.password);
//     res.redirect("/admin");
// });
// app.get("/admin",(req,res)=>{
//     res.clearCookie('lname');
//     res.write(" Welcome : " + req.cookies.uname);
//     res.write(" Lname : " + req.cookies.lname);
//     res.send();
// });
// app.listen(5000);

//task-2
// cp = require("cookie-parser");
// app.use(cp());
// app.use(expr.urlencoded({extended:false}));
// app.use(expr.static('../Public',{index:'index.html'}));
// app.post('/submit-feedback', (req, res) => {
//     const { name, email, message, rating } = req.body;
//     const feedback = {name,email,message,rating};
//     res.cookie('feedback', feedback, { maxAge: 10000 });
//     res.send('Thank you for your feedback! <br> <a href="/feedback-details"> Show Feedback </a>');
// });
// app.get('/feedback-details', (req, res) => {
//     const feedback = req.cookies.feedback;
//     if (feedback) {
//         res.send(`<h1>Feedback Details</h1><p><strong>Name:</strong> ${feedback.name}</p><p><strong>Email:</strong> 
//             ${feedback.email}</p><p><strong>Message:</strong> ${feedback.message}</p><p><strong>Rating:</strong> 
//             ${feedback.rating}</p><a href="/" > logout </a>`);
//     } 
//     else {
//         res.send('No feedback available.');
//     }
// });
// app.listen(3000);


//Session
// sess = require('express-session');
// app.use(sess({secret:"hello lock",saveUninitialized:true,resave:true}));   
// app.get('/',(req,res)=>{
//     if(req.session.pv){
//         req.session.pv++;
//         res.send(`<h1>You visited page ${req.session.pv} times.`);
//     }
//     else{
//         req.session.pv = 1;
//         res.send("welcome to website");
//     }
// });
// app.listen(3000);

//task-4
// sess = require('express-session');
// app.use(sess({secret:"hello lock",saveUninitialized:true,resave:true}));  
// app.use(expr.static('../Public',{index:'index.html'}));
// app.get('/savesession',(req,res)=>{
//     req.session.uname = req.query.fname;
//     req.session.pwd = req.query.pwd;
//     res.redirect('/fetchsession');
// });
// app.get('/fetchsession',(req,res)=>{
//     res.write(`<h1>Welcome ${req.session.uname}</h1> <a href='/deletesession'>Logout</a>`);
//     res.send();
// });
// app.get('/deletesession',(req,res)=>{
//     req.session.destroy();           //res.clearCookie('connect.sid)
//     res.redirect('/');
// });
// app.listen(3001);

//task-5
sess = require('express-session');
app.use(sess({secret:"hello lock",saveUninitialized:true,resave:true}));  
app.use(expr.static('../Public',{index:'index.html'}));
app.get('/save',(req,res)=>{
    req.session.uname = req.query.fname;
    req.session.pwd = req.query.pwd;
    res.redirect('/fetchdata');
});
app.get('/fetchdata',(req,res)=>{
    if(req.session.uname == 'admin' && req.session.pwd == 'admin@123'){
        res.write(`<h1>Welcome ${req.session.uname}</h1> <a href='/destroy'>Logout</a>`);
    }
    else{
        res.write("<h3>Please enter valid username and password</h3>");
        res.write(`<a href='/'>LogIn</a>`);
    }
    res.send();
});
app.get('/destroy',(req,res)=>{
    req.session.destroy();           
    res.write("<h3>Session destroyed</h3>");
    res.write(`<a href='/'>LogIn</a>`);
    res.send();
});
app.listen(3001);