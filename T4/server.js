const expr = require('express')
const mg = require('mongoose')
const cors = require('cors')
const app = expr()
app.use(cors())
app.use(expr.json())
mg.connect('mongodb://127.0.0.1:27017/B1_23')
const userschema = new mg.Schema({username:String})
const user = new mg.model('user',userschema)
app.post('/signup',async(req,res)=>{
    try{
        const {username} = req.body
        const newuser = new user({username})
        await newuser.save()
        res.send()
    }
    catch(err){
        res.send(err)
    }
});

app.get('/users', async (req, res) => {
  try {
    const users = await user.find();  
    res.json(users);                   
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});
app.listen(5000);