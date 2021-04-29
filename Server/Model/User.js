let mongoose = require('mongoose');

var User = mongoose.Schema({
    name : {type : String ,require : true},
    password : {type : String,require : true}
}); 
module.exports = User = mongoose.model('User',User);