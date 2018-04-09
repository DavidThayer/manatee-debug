var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/tunely-debug");

var Manatee = require('./manatee');

module.exports = {
    Manatee: Manatee
}

// OR
// module.exports.Album = require('./album.js')
