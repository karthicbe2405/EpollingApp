const { json } = require('body-parser');
let express = require('express');
let mongosse = require('mongoose');
let router = express.Router();

let Candidate = require('../Model/Canditate');

let User = require('../Model/User');

router.get('/candidates',(req,res)=>{
    Candidate.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("Error in Retrieving " + JSON.stringify(err,undefined,2));
        }
    });
});

router.post('/userLogin',async (req,res)=>{
    var user = await User.findOne({
        name : req.body.userName})

    if(!user){
        res.status(404).send('Invalid Email');
    }
    else{
        
        if(user.password == req.body.userPassword){
            res.send(user);
        }
        else{
            res.status(404).send('Invalid Login');
        }
    }

});

router.put('/vote',async (req,res) =>{
    const _id = req.body._id;
    try{
        await Candidate.findById(_id,(err,candidate)=>{
            candidate.vote = candidate.vote + 1;
            candidate.save();
            res.json({"status" : "Success"});
        });
    }
    catch{
        console.log("Error in Saving Vote");
    }

});
module.exports = router;