const express = require('express');

const router = express.Router();
const mongoose = require('mongoose')


const personSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    work: {
        type:String,
        required:true,
        enum: ['chef','waiter','manager'],

    },
    salary: {
        type:Number,
    },
});

const Person = mongoose.model("person",personSchema);

router.post('/',async(req,res)=>{
    try{

        const data = req.body 
        const newPerson  = new Person(data);

      const savedPerson = await  newPerson.save()
      console.log('data saved')
      res.status(200).json(savedPerson);
    }catch(err){
       console.log(err);
       res.status(500).json({error:'internal server error'})
    }

  


})



router.get('/',async (req,res)=>{
    try{
        const datafetchd = await Person.find()
        console.log('data fetched')
        res.status(200).json(datafetchd)
    }catch(err){
        console.log(err)
        res.status(500).json({error:'error'})
    }
})


router.get('/:worktype',async(req,res)=>{
    try{
        const worktype = req.params.worktype;
        const response = await Person.find({work: worktype})
        if(worktype=='chef'||worktype=='waiter'||worktype=='manager'){
        console.log('worktype fetched')
        res.status(200).json(response)
        }
        
    }catch(err){
        console.log(err)
        res.status(500).json({error:'error'})
    }
})


router.put('/:id', async(req,res)=>{
   try{
    const personid = req.params.id;
    const  updatedpersondata = req.body;

    const response = await Person.findByIdAndUpdate(personid,updatedpersondata,{
        new:true,
        runValidators:true,

    
    })
    if(!response){
        return res.status(404).json({error:'person not found'});
    }
    console.log('data updated')
        res.status(200).json(response)

   }catch(err){
    console.log(err)
    res.status(500).json({error:'error'})
   } 
})

module.exports = router;
