let mongoose = require('mongoose');

let connectionUrl = "mongodb+srv://karthicbe2405:Tacmpolling@22@cluster0.o2ndu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

let db = mongoose.connect(connectionUrl,{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log("DB Connection Establised Successfully");
    }
    else{
        console.log("DB Connection UnsuccessFull");
    }
})
module.exports=mongoose;