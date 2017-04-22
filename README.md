# Friend-Finder

Friend Finder is a survey based friend compatability app built with Node and Express Servers.
This full-stack site will take in results of the users' answers to survey questions, then compare their answers with those from other users.  The app will then display the name and picture of the user with the best overall match.

## Getting Started

### Prerequisites

* Web Browser
* Internet Connection 

## Usage

* [Friend Finder](https://fierce-cove-50826.herokuapp.com/)
	- Visit App On Heroku
	- Take Survey.
	- Click 'Submit'
	- Friendship Nirvana

## The Heart of the APP.
	
	* Below is the function used to compare scores.
	* Loops through scores of each 'friend' and compares to current user's scorses.
	* Returns 'friend' with the best match (lowest difference) in scores. 



```javascript


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

```

## Built With

* [Sublime Text](https://www.sublimetext.com/) - Text Editor.
* [Node.js](https://nodejs.org) - JavaScript runtime built on Chrome's V8 JavaScript engine.

###### NPM Packages

* [express](https://www.npmjs.com/package/express)	- Node.js web application framework that provides a robust set of features for web and mobile applications.
* [body-parser]() - Node.js body parsing middleware.
* [path](https://nodejs.org/docs/latest/api/path.html)	-  Utilities for working with file and directory path.  Pre-installed in Node.


## Author

* **Douglas Aquilino** - [https://github.com/daquilino](https://github.com/daquilino)



