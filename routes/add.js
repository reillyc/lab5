var data = require("../data.json");

exports.addFriend = function(request, response) {
	var friendName =  request.query.name;
	var friendDesc =  request.query.description;
	var newFriend = {
		"name": friendName,
		"description": friendDesc,
		"imageURL": 'http://lorempixel.com/400/400/people',
	};
	
	data.friends.push(newFriend);
		console.log(newFriend);
	response.render("index.handlebars", data);
};