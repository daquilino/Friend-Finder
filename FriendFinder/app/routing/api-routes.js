//Douglas Aquilino	April 22, 2017 'Friends Finder' api-routes.js
//https://github.com/daquilino/Friend-Finder

// Express routes APIs.

const FRIENDS = require("../data/friends.js");


// Function excepts parameter for calling Express.
// Contains two routes for  ('/'), survey ('/survey'), and 404 'catch all' ('*').
module.exports = function(app)
{
	//responds with FRIENDS array in JSON format.
	app.get('/api/friends', function(req, res){

		res.json(FRIENDS);
	});

	//calls compareScores which returns best match.
	//then pushes user info to FRIENDS array.
	app.post('/api/friends', function(req,res){

		res.json(compareScores(req.body));
		FRIENDS.push(req.body);
	});
}

// Loops through scores of each 'friend' and compares to current user's scorses.
// Returns 'friend' with the best match (lowest difference) in scores.
function compareScores(user)
{
	// Contains the 'friend' with the best match (lowest difference)  
	let bff;

	// Containes the lowest total difference of scores.
	let lowestTotal = 100;

	for(let key in FRIENDS)
	{
		//current friend in array 
		let friend = FRIENDS[key];
		
		// total difference between scores.
		let total = 0;

		//compares user scores with 'friend' scores and sums absolute value of difference.
		for(let i =0; i < user.scores.length; i++)
		{
			total += Math.abs(user.scores[i] - friend.scores[i])		
		}	
	
		//If total is the lowest, set bff to current 'friend'
		if(total < lowestTotal)
		{
			lowestTotal = total;
			bff = friend;
		}	
	}	

	return(bff);

}//END compareScores()
