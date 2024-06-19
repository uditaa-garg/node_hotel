const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongourl = 'mongodb://127.0.0.1:27017/hotel'
mongoose.connect(mongourl).then(()=>console.log("mongodb connected"))
.catch((err)=>console.log("mongo error",err));



const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send('<h1>welcome to hotel lemonade</h1>');
    //res.sendFile(path.join(__dirname,'/index.html'));
})

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);




app.listen(3000,()=>{console.log('server is running')})

//express js ka use ad get ka use

