var express = require ('express');
var app = express();
var jade = require ('jade');


}
app.get('/', function (req, res){
  response.sendfile("This would be some HTML");
});

app.get('/about', function (req, res){
  res.sendfile('./views/about.html');
});

app.get('/article', function (req, res){
  res.sendfile('./views/article.html');
});


app.listen(3000);