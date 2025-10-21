const mongoose= require('mongoose');

const sessionSchema= new mongoose.Schema({
   userid:{type:mongoose.Schema.Types.ObjectId, required:true},
   ip:{type:'String', required:true},
   agent:{type:'String', required:true}
},{
    timestamps:true
});

const Session= mongoose.model('Session', sessionSchema);

module.exports=Session;