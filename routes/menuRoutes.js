const express = require('express');

const router = express.Router();
const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    taste: {
        type:String,
        enum:['spicy','sweet','sour'],
        
    },
    ingredients: {
        type:[String],
        
    

    },
    price: {
        type:Number,
        required:true,
    },

});

const Menu = mongoose.model("menu",menuSchema);

router.post('/',async(req,res)=>{
    try{

        const data = req.body 
        const newMenu  = new Menu(data);

      const savedMenu = await  newMenu.save()
      console.log('data saved')
      res.status(200).json(savedMenu);
    }catch(err){
       console.log(err);
       res.status(500).json({error:'internal server error'})
    }

  


})



router.get('/',async (req,res)=>{
    try{
        const datafetchd = await Menu.find()
        console.log('data fetched')
        res.status(200).json(datafetchd)
    }catch(err){
        console.log(err)
        res.status(500).json({error:'error'})
    }
})








module.exports = router;