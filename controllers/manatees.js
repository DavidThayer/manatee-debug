var db = require('../models');

function index (req, res) {
  db.Manatee.find({}, function(err, foundManatees) {
    if (err) {
      console.log(err)
    }
    res.json(foundManatees);
  })
}

module.exports = {
  index: index
}
