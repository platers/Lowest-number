const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();

var Post = require("../models/post");
var Event = require("../models/event");

app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function (error, posts) {
	  if (error) { console.error(error); }
	  res.send({
			posts: posts
		})
	}).sort({_id:-1})
})

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

app.get('/currentGame', (req, res) => {
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

app.post('/add_post', (req, res) => {
	var db = req.db;
	var title = req.body.title;
	var description = req.body.description;
	var new_post = new Post({
		title: title,
		description: description
	})

	new_post.save(function (error) {
		if (error) {
			console.log(error)
		}
		res.send({
			success: true
		})
	})
})

app.get('/post/:id', (req, res) => {
	var db = req.db;
	Post.findById(req.params.id, 'title description', function (error, post) {
	  if (error) { console.error(error); }
	  res.send(post)
	})
})

app.listen(process.env.PORT || 8081)
