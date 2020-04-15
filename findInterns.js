var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var movies = db.db("neta-eng");
  movies.collection("myMovies").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  var query = { rating: 7 };
  movies.collection("myMovies").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  movies.collection("myMovies").find({}, { projection: { _id: 0, movie: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});



