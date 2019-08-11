var express = require('express');
var router = express.Router();

module.exports = function (app, connection) {


  app.get('/', function(req, res) {

    //res.render('index', { title: 'Express' });
    connection.query("SELECT * FROM temperature;", function (err, data) {
      (err) ? res.send(err) : res.json({temperatures: data});
    })
  });

};
