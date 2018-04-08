var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/manatees-debug");

var ManateeModel = require('./manatee.js');

module.exports = {
    Manatee: ManateeModel
}

// OR
// module.exports.Album = require('./album.js')