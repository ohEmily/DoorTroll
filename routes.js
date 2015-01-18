/* This file is required by app.js. 
 * It sets up the application endpoints/routes.
 */

module.exports = function(app){
	app.get('/', function(req,res){
		res.render('index.ejs');
	});
	
	app.post('/api/open', function(req,res){
		res.send({ message : 'this is a reply from the server!' });
		
		try {
			var spawn = require("child_process").spawn;
			var process = spawn('python', ["scripts/open-door.py"]);
		} catch (e) {
			return e;
		}
		
		console.log('Door opening. ');
	});
	
	app.get('/register', function(req,res){
		res.render('register.ejs');
	});
	
	app.get('/*', function(req, res){
		res.redirect('/');
	});
};