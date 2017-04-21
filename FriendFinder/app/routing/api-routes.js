const FRIENDS = require("../data/friends.js");

module.exports = function(app)
{
	//
	app.get('/api/friends', function(req, res){

		res.json(FRIENDS);
	});

	//calls compareScores which returs best match.
	//then pushes user info to FRIENDS array.
	app.post('/api/friends', function(req,res){

		res.json(compareScores(req.body));
		FRIENDS.push(req.body);
	});
}

// Loops through scores of each 'friend' and compares to current user's scorses.
// The 
function compareScores(user)
{

	let bff;
	let lowestTotal = 100;


	for(let key in FRIENDS)
	{
		let friend = FRIENDS[key];
		let total = 0;

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


// test code below


// let user = {
// 	   "name":"user",
// 	   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
// 	   "scores":[
// 	      1,
// 	      1,
// 	      1,
// 	      1,
// 	      1,
// 	      5,
// 	      5,
// 	      5,
// 	      3,
// 	      5
// 	    ]
// 	};

