const expr = require('express');
const app = expr();
const path = require('path');
var sp = path.join(__dirname,'../Public')
app.use(expr.static('../Style'));
app.use(expr.static('../Image'));
app.get('/',(req,res)=>{
    res.sendFile(sp+'/index.html');
});
app.listen(3006);