/*
** file: js/global.js
** description: global javascript library containing code for use across the entire chrome extension, for
**              unique functionality for specific pages, create and use a separate file named "pagename.js"
*/

// get quote from encouragement.gunthercox.com
function getQuote(){
	return fetch("https://encouragement.gunthercox.com/api/encouragement/random/").then(function(response) {
  		return response.json();	
	}).then(function(data) {
		return data.text
	});
}

