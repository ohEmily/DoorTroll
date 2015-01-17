/* This file is required by app.js. 
 * It sets up the application endpoints/routes.
 */

module.exports = function(app){
	app.get('/open', function(req,res){
		res.render('open.ejs');
	});
	
	app.get('/register', function(req,res){
		res.render('register.ejs');
	});


	app.get('/*', function(req, res){
		res.redirect('/open');
	});
};