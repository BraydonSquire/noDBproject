var express = require('express')

var bodyParser = require('body-parser')
var cors = require('cors')
var sc = require(__dirname + '/server/controller.js')

var app = express();

var controller = './controller.js'

app.use(bodyParser.json())
app.use(cors())
app.get('/api/images',sc.read)  
    



app.listen(3001,function(){console.log("listening")});