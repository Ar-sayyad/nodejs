// // // var sayHi = function(){
// // //   console.log("hi");
// // // }
// // //
// // // sayHi();
// // var stuff = require('./stuff');
// // console.log(stuff.counter(['asif','suraj','anuj']));
// // console.log(stuff.adder(5,6));
// // console.log(stuff.adder(stuff.pi, 5));
//
// var events = require('events');
// var util = require('util');
//
// var Person = function(name){
//   this.name = name;
// };
//
// util.inherits(Person, events.EventEmitter);
//
// var anuj = new Person('Anuj');
// var asif = new Person('Asif');
// var suraj = new Person('Suraj');
// var people = [anuj,asif,suraj];
//
// people.forEach(function(person){
//   person.on('speak', function(mssg){
//     console.log(person.name + ' said: '+ mssg);
//   });
// });
//
// asif.emit('speak','Hey Dude');
// anuj.emit('speak','whatsapp dude');




//
// var fs = require('fs');
//
// // var readMe = fs.readFileSync('readme.txt','utf8');
// fs.readFile('readme.txt', 'utf8', function(err, data){
//   //console.log(data);
//   fs.writeFile('writeMe.txt', data);
// });
// //console.log(readMe);
// //fs.writeFileSync('writeMe.txt',readMe);


/****adddd****/

// var fs = require('fs');
// fs.mkdir('stuff', function(){
//   fs.readFile('readme.txt', 'utf8', function(err, data){
//     fs.writeFileSync('./stuff/writeMe.txt', data);
//   });
// });


/***Remove directory********/

// var fs = require('fs');
//
// fs.unlink('./stuff/writeMe.txt', function(){
//   fs.rmdirSync('stuff');
// });

//CREATE SERVER
/*
var http = require('http');

var server = http.createServer(function(req, res){
  console.log('request was made: '+ req.url);
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('Hey Asif');
});

server.listen(3000,'127.0.0.1');
console.log('hey your, now listening port 3000');
*/
//READABLE STREAMS

/*var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
  console.log('new chunk received: ');
  console.log(chunk);
});

*/

//WRITABLE STREAM
/*var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
  console.log('new chunk received: ');
  myWriteStream.write(chunk);
});
*/


//PIPES
/*
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8');

myReadStream.pipe(myWriteStream);

*/

//READING FROM OTHER FILE
/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: '+ req.url);
  res.writeHead(200,{'Content-Type': 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('hey your, now listening port 3000');
*/

//SERVING HTML PAGES

/*var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: '+ req.url);
  res.writeHead(200,{'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('hey your, now listening port 3000');
*/

//SERVING JSON DATA

/*
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: '+ req.url);
  res.writeHead(200,{'Content-Type': 'application/json'});
  var myObj = {
    name: 'anuj',
    job: 'Developer',
    age:30
  };
res.end(JSON.stringify(myObj));
});

server.listen(3000,'127.0.0.1');
console.log('hey your, now listening port 3000');
*/

//BASIC URL ROUTING
/*var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: '+ req.url);
if(req.url === '/home' || req.url === '/'){
  res.writeHead(200, { 'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/index.html').pipe(res);
} else if(req.url === '/contact'){
  res.writeHead(200, { 'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/contact.html').pipe(res);
}else if(req.url === '/api/asif'){
  var arr = [{name:'anuj',age:30},{name:'suraj',age:32}];
  res.writeHead(200, { 'Content-Type': 'application/json'});
  res.end(JSON.stringify(arr));
}else{
  res.writeHead(200, { 'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/404.html').pipe(res);
}
});

server.listen(3000,'127.0.0.1');
console.log('hey your, now listening port 3000');
*/

//NODE PACKAGE MANAGER


//INTRODUCTION TO EXPRESS
/*var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('this is the homepage');
});

app.get('/contact', function(req, res){
  res.send('this is the contact');
});

app.listen(3000);
*/


//EXPRESS ROUTE PARAMS
/*var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('this is the homepage');
});

app.get('/contact', function(req, res){
  res.send('this is the contact');
});

app.get('/profile/:id', function(req, res){
  res.send('you requested to see a profile with the id of '+ req.params.id);
});
app.listen(3000);
*/


//READING EXCEL SHEET DATA AND CONVERT IT INTO JSON
/*var http = require('http');
var fs = require('fs');
var xlsx = require('xlsx');

var server = http.createServer(function(req, res){
  console.log('request was made: '+ req.url);
  const myReadStream = xlsx.readFileSync(__dirname + '/Sample.xlsx');
  const sheet_name_list = myReadStream.SheetNames;
  console.log(xlsx.utils.sheet_to_json(myReadStream.Sheets[sheet_name_list[0]]));
});

server.listen(3000,'127.0.0.1');
console.log('hey your, now listening port 3000');
*/


//TEMPLATE ENGINES
/*var express = require('express');
var app = express();
app.set('View engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname +'/index.html');
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname +'/contact.html');
});

app.get('/profile/:name', function(req, res){
  //res.send('you requested to see a profile with the name of '+ req.params.name);
  var data = {age: 26, job: 'Developer', hobbies: ['eating', 'drinking', 'fishing', 'playing']};
  res.render('profile.ejs', { person: req.params.name, data: data });
});
app.listen(3000);
*/

//PARTIAL TEMPLATE
/*var express = require('express');
var app = express();
app.set('View engine', 'ejs');

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/contact', function(req, res){
  res.render('contact.ejs');
});

app.get('/profile/:name', function(req, res){
  //res.send('you requested to see a profile with the name of '+ req.params.name);
  var data = {age: 26, job: 'Developer', hobbies: ['eating', 'drinking', 'fishing', 'playing']};
  res.render('profile.ejs', { person: req.params.name, data: data });
});
app.listen(3000);
*/


//MIDDLEWARE & STATIC FILES
var express = require('express');
var app = express();
app.set('View engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/contact', function(req, res){
  res.render('contact.ejs');
});

app.get('/profile/:name', function(req, res){
  //res.send('you requested to see a profile with the name of '+ req.params.name);
  var data = {age: 26, job: 'Developer', hobbies: ['eating', 'drinking', 'fishing', 'playing']};
  res.render('profile.ejs', { person: req.params.name, data: data });
});
app.listen(3000);
