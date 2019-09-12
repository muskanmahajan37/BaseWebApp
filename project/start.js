var express = require('express');
var app = express(); //vreate express app

app.set('port', (process.env.PORT || 5000)); //tells port and dir

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs'); //tells it uses ejs as templating language

app.get('/', function(request, response) { //index page rendering
  response.render('pages/index');
});
app.get('/about', function(request, response) { //index page rendering
  response.render('pages/about');
});
app.get('/projects', function(request, response) { //index page rendering
  response.render('pages/projects');
});

app.listen(app.get('port'), function() { //
  console.log('Node app is running on port', app.get('port'));
});


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
