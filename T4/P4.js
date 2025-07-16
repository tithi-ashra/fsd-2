const mg = require('mongoose');
mg.connect('mongodb://127.0.0.1:27017/B1_l4').then(()=> console.log("db connected")).catch((e)=>console.log(e))
const v = require('validator')
const express = require('express')
const app = express()
const myschema = new mg.Schema(
    {
        username:{
        type:String,
        required:true,
        minlength:4,
        maxlength:20,
        trim:true,
        uppercase:true    
        
    },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            validate:[v.isEmail,'Enter Valid Email']
        },
        age:{
            type:Number,
            min:18,
            max:65
        },
        role:{
            type:String,
            enum:["admin","user"],
            default:'user',
            required:true
        },

    }
)

const data= new mg.model('Task10',myschema)

const createData = async()=>{
    try{
        const empData = [
    {username:'Khushi',email:'Magnani@gmail.com',age:20,role:'user'},
    {username:'Khushi1',email:'Magnani1@gmail.com',age:21,role:'user'},
    {username:'Khushi2',email:'Magnani2@gmail.com',age:22,role:'admin'},
    {username:'Khushi1',email:'Magnani3@gmail.com',age:23,role:'admin'},
    {username:'Khushi4',email:'Magnani4@gmail.com',age:24,role:'admin'},
    ]
    const result = await data.insertMany(empData);
    console.log(result)
    // const result1 = await data.find({username:'Khushi1'})
    // console.log(result1)

    
    }catch(e){
        console.log(e)
    }
}
createData()


