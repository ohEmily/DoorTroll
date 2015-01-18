var port = 4000;

/** Set up Express with module dependencies */
var express = require('express'),
	http = require('http');

var app = module.exports = express();

/** Configuration */
// all environments
app.set('port', process.env.PORT || port);

/** Routes */
// serve all asset files from necessary directories
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/fonts", express.static(__dirname + "/public/fonts"));
app.use("/img", express.static(__dirname + "/public/img"));

/* linking */
var interfacer = require('./interfacer');
var controller = require('./controller'); // functions controlling microcontroller
require('./routes')(app, controller, interfacer); // sets up endpoints

/** Start Server */
http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});