const mongoose = require('mongoose')
const mongourl = 'mongodb://127.0.0.1:27017/hotel'

mongoose.connect(mongourl)

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server');

});
db.on('error',(err)=>{
    console.log('error is: ',err);

});

module.exports = db;
