const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'test';
// Connect using MongoClient
MongoClient.connect(url, function(err, client) {
  const users=client.db("app").collection("users");
  users.insert({word:"apple"});
  client.close();
});
