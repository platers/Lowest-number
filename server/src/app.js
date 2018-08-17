const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require("path")
const history = require('connect-history-api-fallback')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(history({
	index: __dirname + "/dist/index.html"
}))
app.disable('etag')
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(__dirname + "/dist"));
}
const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();

var Event = require("../models/event");

app.get('/', (request, response) => {
	response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/events', (req, res) => {
	// Event.remove({}, function(err) { 
	// 	console.log('collection removed') 
	//  });
	Event.find({}).sort('-game number').exec(function (error, events) {
		if (error) { console.error(error); }
		res.send({
			  events: events
		  })
	  })
  })

app.get('/getGame/:id', (req, res) => {
	var db = req.db;
	Event.find({game: req.params.id}, function (error, events) {
		if (error) { console.error(error); }
		res.send({
			events: events
		})
	})
})

app.post('/currentGame', (req, res) => {
	var db = req.db;
	Event.find({}).sort('-game').limit(1).exec(function (error, event) {
		if (error) { console.error(error); }
		if (event[0]) {
			res.send({
				id: event[0].game
			})
		} else {
			res.send({
				id: 0
			})
		}
		
	})
})

app.post('/add_event', (req, res) => {
	var db = req.db;
	var name = req.body.name;
	var number = req.body.number;
	var game = req.body.game;
	var new_event = new Event({
		name: name,
		number: number,
		game: game
	})

	new_event.save(function (error) {
		if (error) {
			console.log(error)
		}
		res.send({
			success: true
		})
	})
})

app.listen(process.env.PORT || 8081)
