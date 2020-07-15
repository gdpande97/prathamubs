// var express = require('express');
// var http = require('http').Server(app);
// var io = require('socket.io')(http);
// var path = require('path');
// var app=express();

// app.use(express.static('audio'));
// app.use(express.static('css'));
// app.use(express.static('images'));
// app.use(express.static('js'));
// app.use(express.static('resources'));
// app.use(express.static('templates'));
// app.use(express.static('videos'));
// app.get('/', function (req, res) {
//     res.sendfile('index.html');
// });

// http.listen(3000, function () {
//     console.log('listening on localhost:3000');
//  });
 

const express = require('express');
const app = express();
var path =require('path');

app.use(express.static(__dirname + 'audio'));
app.use(express.static(__dirname + 'css'));
app.use(express.static(__dirname + 'images'));
app.use(express.static(__dirname + 'js'));
app.use(express.static(__dirname + 'resources'));
app.use(express.static(__dirname + 'templates'));
app.use(express.static(__dirname + 'videos'));

// app.use('/images', express.static(__dirname + '/images'));
app.use('/images', express.static(process.cwd() + '/images'))
console.log(__dirname);
// app.get('/', (req, res) => {
//     res.sendfile(path.join(__dirname+'/index.html'));
// });

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));


// var express = require('express');
// //var server = express.createServer();
// // express.createServer()  is deprecated. 
// var server = express(); // better instead
// server.configure(function(){
//   server.use('/images', express.static(__dirname + '/images'));
//   server.use(express.static(__dirname + '/public'));
// });

// server.listen(3000);