let mongoose = require('mongoose');

var Candidate = mongoose.Schema({
    name : {type : String ,require : true},
    partyName : {type : String,require : true},
    vote : {type : Number,require : true}
}); 
module.exports = Candidate = mongoose.model('Candidate',Candidate);