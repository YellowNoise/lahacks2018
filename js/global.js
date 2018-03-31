/*
** file: js/global.js
** description: global javascript library containing code for use across the entire chrome extension, for
**              unique functionality for specific pages, create and use a separate file named "pagename.js"
*/

// get quote from encouragement.gunthercox.com, Returns Promise (string)
function getQuote() {
	return fetch("https://encouragement.gunthercox.com/api/encouragement/random/").then(function(response) {
  		return response.json();	
	}).then(function(data) {
		return data.text
	});
}
//get Sentiment from Google Cloud API, Returns Promise (array of sentences)
//each sentence has text and sentiment (magnitude and score)
function getSentiment(textstr){
	var data = {
		encodingType: 'UTF8',
  		document: {
    		type: 'PLAIN_TEXT',
    		content: textstr
		} 
	}	
	return fetch("https://language.googleapis.com/v1/documents:analyzeSentiment", {
    body: JSON.stringify(data), // must match 'Content-Type' header
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Authorization': 'insert key here',
      'Content-Type': 'Content-Type: application/json; charset=utf-8'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // *manual, follow, error
    referrer: 'no-referrer', // *client, no-referrer
  }).then(function(response){
  	return response.json().sentences
  }); 
}


