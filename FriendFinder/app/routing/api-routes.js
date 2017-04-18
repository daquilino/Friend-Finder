const FRIENDS = require("../data/friends.js");

module.exports = function(app)
{

	app.get('/api/friends', function(req, res){

		res.json(FRIENDS);
	});


	app.post('/api/friends', function(req,res){


		//CODE TO CHECK FOR MATCH
		/*
			for(let key in FRIENDS)
			{
	



			}
		


		*/

		FRIENDS.push(req.body);

		res.json(FRIENDS[1]);

		console.log("HEllo");
	});

}


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
	
console.log(friend.name, "score", total);


		//If total is the lowest, set bff to current 'friend'
		if(total < lowestTotal)
		{
			lowestTotal = total;
			bff = friend;
		}	



	}	

	console.log("\nYour bff" , bff.name);

}


// test code below


let user = {
	   "name":"user",
	   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	   "scores":[
	      1,
	      1,
	      1,
	      1,
	      1,
	      5,
	      5,
	      5,
	      3,
	      5
	    ]
	};



compareScores(user);