//Douglas Aquilino	April 22, 2017 'Friends Finder' server.js
//https://github.com/daquilino/Friend-Finder


//Dependencies
const EXPRESS = require('express');
const BODYPARSER = require('body-parser');
const PATH = require('path');

const PORT = process.env.PORT || 9999;
const APP = EXPRESS();


// BodyParser makes it possible for our server to interpret data sent to it.
APP.use(BODYPARSER.json());
APP.use(BODYPARSER.urlencoded({ extended: true }));
APP.use(BODYPARSER.text());
APP.use(BODYPARSER.json({ type: "application/vnd.api+json" }));

//path to serve static files.
APP.use(EXPRESS.static(PATH.join(__dirname, 'FriendFinder/app/')));

// ROUTER - Below points our server to a series of "route" files.

require("./FriendFinder/app/routing/api-routes.js")(APP);
require("./FriendFinder/app/routing/html-routes.js")(APP);


//Express Listener
APP.listen(PORT, function(){
	console.log("Listening on port:", PORT);
});


