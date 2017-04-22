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

APP.use(EXPRESS.static(__dirname + 'FriendFinder/app/css'));
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./FriendFinder/app/routing/api-routes.js")(APP);
require("./FriendFinder/app/routing/html-routes.js")(APP);


//Express Listener
APP.listen(PORT, function(){
	console.log("Listening on port:", PORT);
});


