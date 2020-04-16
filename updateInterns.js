var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var updatemovie = db.db("neta-eng");
  var myquery = { movie: "The Banker", year: "2020", rating: 8 };
  var newvalues = { $set: {movie: "War Room", year: "2019", rating: 9 } };
  updatemovie.collection("myMovies").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
