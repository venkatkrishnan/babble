var express=require('express');
router=express.Router();
var chats=require('../model/chats');  //to retrieve chat data from Mongo

router.get('/',function(req,res,next){
  res.render('index',{
    title:'Babble - Home',
    classname:'Home'
  });
});

router.get('/chats',function(req,res,next){
  console.log("Serving chat data request");
  chats.findUser('arun',function(data){
    // var result={
    //   sender:data.sender,
    //   reciever:data.reciever,
    //   timestamp:data.timestamp,
    //   message:data.message
    // };
    res.send(data);
    })
});

module.exports = router;
