var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var db = require('./db')

var server = express()
var databaseToUse

module.exports = server

server.useDb = function(db) {
    databaseToUse = db
}
// Middleware
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

// Routes
server.get('/whiskys', function(req, res) {
    var search = req.query.q

    db.getWhiskys(search, databaseToUse)
        .then(function (whiskys) {
            res.status(200).send(whiskys)
        })
        .catch(function (err) {
            res.status(500).send(err.message)
        })
})

server.get('/checkins', function(req, res) {
    db.getCheckins(databaseToUse)
        .then(function(checkins) {
            res.status(200).send(checkins)
        })
        .catch(function(err) {
            res.status(500).send(err.message)
        })
})

server.post('/checkins', function(req, res) {
    console.log('BODY', req.body)
    try {
        db.checkin(req.body.whiskyId, req.body)
            .then(function() {
                res.status(200)
            })
            .catch(function(err) {
                res.status(500).send(err.message)
            })
    } catch (err) {
        console.log(err)
    }
})
