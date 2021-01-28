
/*
 * GET home page.
 */

exports.view = function(req, res){
  var Caiyi = req.params.userNamer;
  res.render('hello', {
  	"name": Caiyi,
  });
};
