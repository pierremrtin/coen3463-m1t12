  var express = require("express");
    var app = express();
    var path = require('path');

    app.get('/', function(req, res) {
      res.send('<h1>Welcome to Elijah and Pier website!!!</h1>') ;
    });

    //app.get('/home', function(req, res) {
    //	var absPath = path.join(__dirname,"profile/home.html");
    //	console.log('absolute path is ' + absPath);
    //	res.sendFile(absPath);
    //});

     app.get('/home', function(req, res) {
    	var absPath = path.join(__dirname,"home.html");
    	console.log('absolute path is ' + absPath);
    	res.sendFile(absPath);
    });


    var port = Number(process.env.PORT || 5000);
    app.listen(port, function() {
      console.log("Listening on " + port);
    });