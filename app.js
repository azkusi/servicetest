const express = require("express");
const app = express();
const port =  process.env.PORT || 5000;
const host = '127.0.0.1'
const path = require('path');
const socket = require("socket.io");
const axios = require('axios');
const cors = require('cors')


var INChostname;
var storename;

var store_front_content;
var booking_page_content;
var account_details;

// let sentHostName = false

app.use(cors());

app.use('*', function(req, res, next){
  const host_name = req.hostname
  io.once("connection", function(socket){
    // if(!sentHostName){
      console.log("New client connected");
      socket.emit("host_name", {"host_name": host_name})
      socket.disconnect()
      // sentHostName = true
    // }
  })
  next()
})

app.use(express.static(path.join(__dirname, "build")))



app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "build", "index.html")) 
});

app.get("/*", function (req, res, next) {
  res.sendFile(path.join(__dirname, "build", "index.html"))
});


const server = app.listen(port, () =>{
  console.log(`Up and listening to port ${port}`)
  console.log(`Testing, testing 1, 2, 1, 2`)
  console.log(`Yes working`)
  console.log(`Hello any change?`)
});


const io = socket(server);




module.exports = app;
