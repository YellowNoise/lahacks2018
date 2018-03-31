/*
** file: js/global.js
** description: global javascript library containing code for use across the entire chrome extension, for
**              unique functionality for specific pages, create and use a separate file named "pagename.js"
*/
const language = require('@google-cloud/language');
const client = new language.LanguageServiceClient();

// get quote from encouragement.gunthercox.com, Returns Promise (string)
function getQuote() {
	return fetch("https://encouragement.gunthercox.com/api/encouragement/random/")
		.then(res => res.json())
		.then(data => data.text);
}

//get Sentiment from Google Cloud API, Returns Promise (array of sentences)
//each sentence has text and sentiment (magnitude and score)
function getSentimentNode(text){
	const document = {
	  	content: text,
	  	type: 'PLAIN_TEXT',
	};
	
	// Detects the sentiment of the text
	client
		.analyzeSentiment({ document })
		.then(results => results[0].sentences)
		.catch(err => {
			console.error('ERROR:', err);
		});
}