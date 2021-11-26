const express = require("express");
const app = express();
const port = 5000;
const host = '127.0.0.1'
const path = require('path');
const socket = require("socket.io");

var INChostname;
var storename;


app.use('/', function(req, res, next){
  //myservvio.com allowed
  //wepaint.servvio.com allowed
  //we.paint.servvio.com not allowed
// if(req.hostname.match(/\./g).length > 2){
//   //send error page
// }
// else if(req.hostname == 'myservvio.com'){
//   //send error page
// }
//else continue i.e. send the react static or dynamic page

  INChostname = req.hostname
  storename = req.hostname.replace('.localhost', '')

  console.log(`hello here works in middleware req.data: ${req}, hostname: ${req.hostname}, subdomain is: ${(req.subdomains)}`);
  io.on("connection", function (data) {
    console.log(`Made socket connection, socket is ${data.id}`);
    console.log(`Hostname: ${INChostname}`);
    io.emit("subdomain", {"socket id": data.id, "hostname": INChostname.replace('.localhost', '')});
    // io.emit("subdomain", {"socket id": data.id, "hostname": INChostname.replace('.myservvio.com', '')});
  });
  next()
})

app.use(express.static(path.join(__dirname, "build")))

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "build", "index.html"))
  //res.send("IT WORKED");
});


app.get("/new", function (req, res) {
  res.send("On new level...");
  //res.sendFile(path.join(__dirname, "client", "public", "index.html"));
});

const server = app.listen(port, () =>{
  console.log(`Up and listening to port ${port}`)
  console.log(`Testing, testing 1, 2, 1, 2`)
  console.log(`Yes working`)
  console.log(`Hello any change?`)
});


const io = socket(server);




module.exports = app;
