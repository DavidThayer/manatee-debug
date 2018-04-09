var express = require('express');
var app = express();

var db = require('./models');
var controllers = require('./controllers');
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api', controllers.api.basic);
app.get('/api/manatees', controllers.manatees.index);

// app.get('/api/artists', controllers.artists.index);

app.listen(3000, function(req, res) {
    console.log('App is listening on port 3000');
})
