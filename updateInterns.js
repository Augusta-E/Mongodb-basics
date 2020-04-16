var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var updateMovie = db.db("neta_eng");
  var oldMovie = { movie: "The Banker", year: "2020", rating: 8 };
  var newMovie = { $set: {movie: "War Room", year: "2019", rating: 9 } };
  updateMovie.collection("myMovies").updateOne(oldMovie, newMovie, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
  updateMovie.collection("myMovies").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
