//pug
const expr = require('express');
const app = expr();
// app.set('view engine','pug');
// app.set('views',__dirname);     //app.set('Views',__dirname+"/../Public");
// app.get('/',(req,res)=>{
//     res.render("one");
// });
// app.listen(3007);

//task-2
// app.get('/',(req,res)=>{
//     res.render("one");
// });
// app.get("/data",(req,res)=>{
//     res.set("content-type","text/html")
//     res.write("<h2>Welcome " + req.query.name + "</h2>");
//     res.write("<h3>Your Email Id is : " + req.query.email + "</h3>");
//     res.send();
// });
// app.listen(3007);

//task-3
// app.get('/',(req,res)=>{
//     res.render("one",{msg:"hello",name:"deep",id:4})
// });
// app.listen(3007);

//task-4
// app.get('/',(req,res)=>{
//     res.render('one');
// });
// app.get('/data',(req,res)=>{
//     // res.set('content-type','text/html');
//     // res.write("<h2>Welcome "+req.query.name+" </h2");
//     // res.write("<h2>Ypur Email id is : "+req.query.email+" </h2");
//     // res.write("<h2>You have taken course is "+req.query.course+" </h2");
//     res.render("two",{name:req.query.name, email:req.query.email,course:req.query.course});
//     // res.send();
// });
// app.listen(3007);


//File Upload
// multer = require('multer');
// var store = multer.diskStorage({destination:'single',filename:(req,file,cb)=>{cb(null,file.originalname)}});
// var upload = multer({storage:store}).single('myfile');
// app.use(expr.static('../Public',{index:'index.html'}));
// app.post('/data',upload,(req,res)=>{
//     if(req.file){
//         res.send(`<h1>File ${req.file.originalname} is uploaded in ${req.file.destination}`);
//     }
//     else {
//         res.status(400).send('File upload failed.');
//     }    
// });
// app.listen(3007);

// multer = require('multer');
// var store = multer.diskStorage({destination:'single',filename:(req,file,cb)=>{cb(null,file.originalname)}});
// var upload = multer({storage:store}).array('myfile',5);
// app.use(expr.static('../Public',{index:'index.html'}));
// app.post('/data',upload,(req,res)=>{
//     if(req.files){
//         for(i of req.files){
//             res.write(`<h1>file ${i.originalname} is uploaded in ${i.destination}`);
//         }
//         res.send();
//     }
// });
// app.listen(3007);


//Restful APIs
// app.use('/',m);
// app.listen(3007);

// var m = require('./data');
// app.use('/',m);
// app.listen(3007);


//node-mailer
var nm = require('nodemailer');
var cm = nm.createTransport({host:'smtp.gmail.com',
                            port:465,
                            auth:{user:"tithiashra@gmail.com",pass:'tithi@2005'}
                        });
var mailoption = {from:"tithiashra@gmail.com",
                to:"ashratithi@gmail.com",
                subject:"hello test",
                text:"node mailer",
            };
cm.sendMail(mailoption,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(info);
    }
});