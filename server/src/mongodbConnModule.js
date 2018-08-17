var mongoose = require('mongoose');

module.exports.connect = function() {

	mongoose.connect('mongodb://heroku_tf2jzmnc:9q7cc13p85v5orgu12o1ucoehp@ds125912.mlab.com:25912/heroku_tf2jzmnc');
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(callback){
	  console.log("Connection Succeeded");
	});
	return db;
}