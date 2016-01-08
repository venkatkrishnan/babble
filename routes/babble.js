var dateFormat=require('dateformat');
var now=new Date();


module.exports = function(req, res) {
  res.render('babble', {
    title : 'User',
    classname : 'username',
    lastlogin : dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")
  });
}
