console.log('The bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var params = {
	q: 'tiny%20star%20field',
	count: 1
}

//T.get('users/search', params, gotData);

function gotData(err, data, response){
	console.log(data)
	/*var tweets = data.statuses
	for(var i = 0; i < tweets.length; i++){
		console.log(tweets[i].text);
	}*/
}

console.log('----------------------------------------');
var user = {
	user_id: 2607163646,
    Name: '⋆✵tiny star fields✵⋆',
    screen_name: 'tiny_star_field',
    count:1
}

T.get('statuses/user_timeline',user,getTweet);

function formatText(s) {
	const alien = '👽'
	var m = s.split('\n');
	var rows = 0;
	for(var i = 0; i < m.length; i++) rows = rows < m[i].length ? m[i].length : rows;
	for(i = 0; i < m.length; i++) m[i]=m[i].concat(' '.repeat(rows-m[i].length));
	m = m.join('\n');
	
	var indices = [];
	for(i = 0; i < m.length; i++) {
	    if (m[i] === " ") indices.push(i);
	}
	index = Math.floor(Math.random() * indices.length);
	return m.substr(0,index)+alien+m.substr(index+1);
}


function getTweet(err,data, response) {
	if(data.length == 0){
		console.log('No tweet available????')
		err = {message:'No tweet to be handled', code:1}
		return;
	}
	console.log('\033[7m',data[0].text,'\033[0m')
	var t = formatText(data[0].text);
	console.log(t);
}