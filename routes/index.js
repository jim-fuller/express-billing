var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Billing' });
});

router.get('/home', function(req, res, next) {
  var MongoClient = require('mongodb').MongoClient

  MongoClient.connect('mongodb://localhost:27017/test', function (err, client) {
  if (err) throw err

  var db = client.db('databases')

  db.collection('mammals').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  })
})
  res.render('home', { title: 'Home' });
});

module.exports = router;
