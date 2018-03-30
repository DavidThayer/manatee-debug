var db = require('../models');

function index (req, res) {
  db.Manatee.find({}, function(err, foundAlbums) {
    if (err) { 
      console.log(err) 
    }
    res.json(foundAlbums);
  })
}

module.exports = {
  basic: index
}