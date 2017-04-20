var express= require('express');
var path = require('path');
var app = express();

app.use('/', express.static(path.resolve("build")))
console.log("serving static files at: ",path.resolve("build"));

var host = process.env.HOST || "localhost";
var port = process.env.PORT || "5000";
const url = 'http://'+host+":"+port;

var server = app.listen(port,host,function(){
  console.log("Application started at ===> "+url)
})

module.exports = app;


