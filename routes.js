/* This file is required by app.js. 
 * It sets up the application endpoints/routes.
 */

module.exports = function(app, controller){
	app.get('/', function(req,res){
		res.render('index.ejs');
	});
	
	app.post('/api/open-attempt', function(req,res){
		controller.open_door();
		
		text = 'Door opening. '
		console.log(text);
		res.send({ message : text });	
	});
	
	app.get('/*', function(req, res){
		res.redirect('/');
	});
};