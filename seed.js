var db = require("./models");

var manateesList = [{
  manateeName: 'Manny',
  age: 2,
  releaseDate: '1994, March 8',
  image: 'https://sharesloth.com/wp-content/uploads/2015/03/8-Back-to-the-wild.jpg'
}, {
  manateeName: 'Minnie',
  age: 1,
  releaseDate: '1991, August 12',
  image: 'https://c1.staticflickr.com/9/8011/6991093088_37c945a940_b.jpg'
}, {
  manateeName: 'Molly',
  age: 1,
  releaseDate: '1994, July 4',
  image: 'http://img.dailymail.co.uk/i/pix/2008/05_02/manatees3BM_468x340.jpg'
}, {
  manateeName: 'Moe',
  age: 2,
  releaseDate: '1996, November 5',
  image: 'https://photos.smugmug.com/Manatees/i-nvkZcSm/0/ed8d8138/S/GS_4331_141219-S.jpg'
}];

db.Manatee.remove({}, function (err, manatees) {
  // code in here runs after all manatees are removed
  db.Manatee.create(manateesList, function (err, manatees) {
    // code in here runs after all manatees are created
    if (err) {
      return console.log('ERROR', err);
    }
    console.log("all manatees:", manatees);
    console.log("created", manatees.length, "manatees");
    process.exit();
  });
});