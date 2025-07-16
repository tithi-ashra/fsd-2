const mg = require('mongoose');
mg.connect('mongodb://127.0.0.1:27017/B1_l4').then(()=> console.log("db connected")).catch((e)=>console.log(e))

const myschema = new mg.Schema({name:String,age:Number,date:Date})

const data= new mg.model('Person',myschema)

const sdata = new data({name:'Khushi',age:20,date:new Date()})

sdata.save()

const createData = async ()=>{
    try{
        const pdata = new data({name:'Rahul',age:16,date:new Date()})
        const result = await pdata.save()
        console.log(result)
    }catch(e){
        console.log(e)
    }
}
createData()