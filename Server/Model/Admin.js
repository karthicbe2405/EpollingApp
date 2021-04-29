let mongoose = require('mongoose');


var Admin = mongoose.Schema({
    adminId : {type : String ,require : true},
    adminPassword : {type : String,require : true}
}); 


module.exports = Admin = mongoose.model('Admin',Admin);