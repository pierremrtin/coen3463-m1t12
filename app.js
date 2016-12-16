  var express = require("express");
    var app = express();
    var path = require('path');
app.use(express.static(path.join(__dirname, 'public')))


     app.get('/home', function(req, res) {
    	var absPath = path.join(__dirname,"home.html");
    	console.log('absolute path is ' + absPath);
    	res.sendFile(absPath);
    });

      app.get('/member/deasis', function(req, res) {
        var absPath = path.join(__dirname,"deasis.html");
        console.log('absolute path is ' + absPath);
        res.sendFile(absPath);
    });

       app.get('/member/martin', function(req, res) {
        var absPath = path.join(__dirname,"martin.html");
        console.log('absolute path is ' + absPath);
        res.sendFile(absPath);
    });

    var port = Number(process.env.PORT || 5000);
    app.listen(port, function() {
      console.log("Listening on " + port);
    });