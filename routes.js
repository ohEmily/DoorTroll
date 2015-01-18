/* This file is required by app.js. 
 * It sets up the application endpoints/routes.
 */

module.exports = function(app, controller, interfacer){
	app.get('/', function(req,res){
		res.render('index.ejs');
	});
	
	app.post('/api/open-attempt', function(req, res){
	
		var file = 'index.html';
		var password = req;
		
		if (interfacer.is_user(file, password))
			controller.open_door();
		
		var text = 'Door opening. '
		console.log(text);
		res.send({ message : text });	
	});
	
	app.get('/*', function(req, res){
		res.redirect('/');
	});
};