const mg = require('mongoose');
mg.connect('mongodb://127.0.0.1:27017/B1_l4').then(()=> console.log("db connected")).catch((e)=>console.log(e))
const v = require('validator')
const express = require('express')
const app = express()

app.use(express.static(__dirname,{index:'Form.html'}))
const myschema = new mg.Schema(
    {
        uname:{
        type:String,
        required:true,
        minlength:4,
        maxlength:20,
        trim:true,
        uppercase:true    
        
    },
        password:{
            type:String,
            required:true,
            minlength:8,
            maxlength:10
        }

    }
)

const data= new mg.model('Express',myschema)

app.get('/login',async (req,res)=>{
    const pdata = new data({
        uname:req.query.uname,
        password:req.query.password
    })
    
    const result = await pdata.save()
    res.send(result)
    console.log(result)
})

app.listen(3000,()=>{
    console.log("server started at port 3000")
})

// const createData = async()=>{
//     try{
        
//     const result = await data.insertMany(empData);
//     console.log(result)
//     // const result1 = await data.find({username:'Khushi1'})
//     // console.log(result1)

    
//     }catch(e){
//         console.log(e)
//     }
// }
// createData()


