/*
** file: js/global.js
** description: global javascript library containing code for use across the entire chrome extension, for
**              unique functionality for specific pages, create and use a separate file named "pagename.js"
*/

// get quote from encouragement.gunthercox.com, Returns Promise (string)
function getQuote() {
	return fetch("https://encouragement.gunthercox.com/api/encouragement/random/")
		.then(res => res.json())
		.then(data => data.text);
}

//get Sentiment from Google Cloud API, Returns Promise (array of sentences)
//each sentence has text and sentiment (magnitude and score)
function getSentiment(textstr){
	return fetch(`http://streamlyne.stream:3003/sentiment?q=${encodeURI(textstr)}`).then(res => res[0]);
}

getSentiment("This is a test sentence. I love text sentences").then(res => {
	$("#main-outer").html(res);
});