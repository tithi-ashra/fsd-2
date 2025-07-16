const mg = require('mongoose');
mg.connect('mongodb://127.0.0.1:27017/B1_l4').then(()=> console.log("db connected")).catch((e)=>console.log(e))

const myschema = new mg.Schema(
    {
        name:{
        type:String,
        required:true
    },
        age:{
            type:Number,

        },
        
    }
)

const data= new mg.model('Student',myschema)

const createData = async()=>{
    try{
        const empData = [
    {name:'Khushi',age:20},
    {name:'Khushi1',age:20},
    {name:'Khushi2',age:20},
    {name:'Khushi1',age:20},
    {name:'Khushi4',age:20},
    ]
    const result = await data.insertMany(empData);
    console.log(result)
    // const result1 = await data.find({name:'Khushi1'})
    // console.log(result1)

    // const result2 = await data.find({age:{$gt:18}})
    // console.log(result2)
    // const result3= await data.find({active:false},{_id:0,name:1    // console.log(result3)
    // const result4 = await data.find({name:'Khushi1'},{_id:0me:1})
    // console.log(result4)


    }catch(e){
        console.log(e)
    }
}
createData()

const updateData = async(id,update)=>{
    try{
        const res = await data.findByIdAndUpdate(id,update,{upsert:true,new:true})
        console.log(res)
    }catch(e){
        console.log(e)
    }
}
updateData('6870ae052305045b0268a9f5',{name:'abc',age:20})


