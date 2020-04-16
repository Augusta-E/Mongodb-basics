var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/neta_eng";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created by neta_eng");
  db.close();
});