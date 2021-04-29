const { json } = require('body-parser');
let express = require('express');
let mongosse = require('mongoose');
const Admin = require('../Model/Admin');
let router = express.Router();

let Candidate = require('../Model/Canditate');

let User = require('../Model/User');


router.get('/candidates',(req,res)=>{
    Candidate.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("Error in Retrieving Candiadtes" + JSON.stringify(err,undefined,2));
        }
    });
});

router.post('/addCandidate',(req,res)=>{

    let candidate = new Candidate({
        name : req.body.candidateName,
        partyName : req.body.candidatePartyName,
        vote : 0
    });

    candidate.save((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("Failed to Add Candidate : " + JSON.stringify(err,undefined,2));
        }
    });
});

router.post('/addUser',(req,res)=>{

    let user = new User({
        name : req.body.userName,
        password : req.body.userPassword
    });
    user.save((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("Failed to USer : " + JSON.stringify(err,undefined,2));
        }
    });
});

router.post('/adminLogin',async (req,res)=>{
    var admin = await Admin.findOne({
        adminId : req.body.adminId})

    if(!admin){
        res.status(404).send('Invalid Email');
    }
    else{
        if(admin.adminPassword == req.body.adminPassword){
            res.send(admin);
        }
        else{
            res.status(404).send('Invalid Login');
        }
    }
});

module.exports = router;