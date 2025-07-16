const mg = require('mongoose');
mg.connect('mongodb://127.0.0.1:27017/B1_l4').then(()=> console.log("db connected")).catch((e)=>console.log(e))

const myschema = new mg.Schema(
    {
        name:{
        type:String,
        required:true
    },
        surname:{
            type:String,
            required:true
        },
        age:{
            type:Number,

        },
        active:{
            type:Boolean,
            required:true
        },

    }
)

const data= new mg.model('Employee',myschema)

const createData = async()=>{
    try{
        const empData = [
    {name:'Khushi',surname:'Magnani',age:20,active:true},
    {name:'Khushi1',surname:'Magnani1',age:20,active:true},
    {name:'Khushi2',surname:'Magnani2',age:20,active:false},
    {name:'Khushi1',surname:'Magnani3',age:20,active:false},
    {name:'Khushi4',surname:'Magnani4',age:20,active:true},
    ]
    //const result = await data.insertMany(empData);
    //console.log(result)
    // const result1 = await data.find({name:'Khushi1'})
    // console.log(result1)

    const result2 = await data.find({age:{$gt:18}})
    console.log(result2)
    const result3= await data.find({active:false},{_id:0,name:1,active:1})
    console.log(result3)
    const result4 = await data.find({name:'Khushi1'},{_id:0,active:1,name:1})
    console.log(result4)
    }catch(e){
        console.log(e)
    }
}
createData()


