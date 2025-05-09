const expr = require('express');
const router = expr.Router();
// var mvi = [{id:101,name:'Avengers',rating:9.5,release:2019},
//             {id:102,name:'Saaho',rating:8.0,release:2020},
//             {id:103,name:'Chaavaa',rating:9.0,release:2025}]
// router.get('/',(req,res)=>{
//     res.json(mvi);
// });
// router.get('/:id',(req,res)=>{
//     var cm = mvi.filter((b)=>{
//         if(b.id == req.params.id){
//             return true;
//         }
//     });
//     if(cm.length == 1){
//         res.json(cm[0]);
//     }
//     else{
//         res.send('Not Found');
//     }
// });
// module.exports = router;

const data=[
    { id:101,name:"ABC",branch:"CSE",contact:9876543210,city:"Ahmedabad" },
    { id:102,name:"BCD",branch:"CE",contact:9876543210,city:"Ahmedabad"  },
    { id:103,name:"XYZ",branch:"CSE",contact:9876543210,city:"Rajkot" },
    { id:104,name:"PQR",branch:"IT",contact:9876543210,city:"Ahmedabad" },
    { id:105,name:"ABC",branch:"CSE",contact:9876543210,city:"Surat" },
    { id:106,name:"ABC",branch:"IT",contact:9876543210,city:"Rajkot" }]
router.get('/',(req,res)=>{
    res.json(data);
});
router.get('/id/:id/branch/:branch',(req,res)=>{
    var cm = data.filter((b)=>{
        if(b.id == req.params.id && (b.branch.toLocaleLowerCase() == req.params.branch.toLocaleLowerCase())){
            return true;
        }
    });
    if(cm.length == 1){
        res.json(cm[0]);
    }
    else{
    res.send('Not Found');
    }
});
module.exports = router;