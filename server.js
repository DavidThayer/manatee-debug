var express = require('express');
var app = express();

var controllers = require('./controllers');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/api/manatees', controllers.manatees.index);

// app.get('/api/artists', controllers.artists.index);

app.listen(3001, function(req, res) {
    console.log('App is listening on port 3001');
})