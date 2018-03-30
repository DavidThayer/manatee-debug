var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AlbumSchema = new Schema({
  manateeName: String,
  age: Number,
  releaseDate: String,
  image: String
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;