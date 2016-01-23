    var mongoose = require('mongoose');
    var Conversation = mongoose.Schema({
        sender: String,
        reciever: String,
        timestamp: Date,
        message: String
    });


    Conversation.statics.findUser=function(username,callback){
      this.model('Conversation').find({sender:'arun'},function (err,data ) {
        if (err) return console.error(err);
        callback(data);
    })
  };
module.exports=mongoose.model('Conversation',Conversation);
