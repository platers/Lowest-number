var mongoose = require('mongoose');

module.exports.connect = function() {

	mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/MEVN-boilerplate');
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(callback){
	  console.log("Connection Succeeded");
	});
	return db;
}