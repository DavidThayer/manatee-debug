var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ManateeSchema = new Schema({
  name: String,
  age: Number,
  releaseDate: String,
  image: String
});

var Manatee = mongoose.model('Manatee', ManateeSchema);

module.exports = Manatee;
