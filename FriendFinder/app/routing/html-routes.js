const PATH = require('path');



module.exports = function(app)
{
	//ROUTES

	//'ROOT' Route
	app.get('/', function(req, res){
		 
		 res.sendFile(PATH.join(__dirname, "../public/home.html"));
	});


	//'survey' Route
	app.get('/survey', function(req, res){

		 res.sendFile(PATH.join(__dirname, "../public/survey.html"));
	});

	//404 'Catch-all' any other route gets caught here;
	app.get('*', function(req,res){
		res.writeHead(404, {"Content-Type": "text/html"});
  		res.write("<h1>404 Page Not Found </h1>");
  		res.end("You Can't Even Find The Right Page, Let Alone A Friend :(");

	});


};