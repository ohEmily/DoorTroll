/* This file is required by app.js. 
 * It sets up the application endpoints/routes.
 */

module.exports = function(app){
	app.get('/open', function(req,res){
		res.render('open.ejs');
	});
	
	app.post('/api/open', function(req,res){
		res.send('this is a reply from the server!');
	});
	
	app.get('/register', function(req,res){
		res.render('register.ejs');
	});
	
	app.get('/*', function(req, res){
		res.redirect('/open');
	});
};