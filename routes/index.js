module.exports = function(req, res) {

  res.render('index', {
    title : 'Home',
    classname : 'home',
    users: ['Name1', 'Name2', 'Name3']
  });
}
