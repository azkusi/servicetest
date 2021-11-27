const express = require("express");
const app = express();
const port =  process.env.PORT || 5000;
const host = '127.0.0.1'
const path = require('path');
const socket = require("socket.io");
const axios = require('axios');

var INChostname;
var storename;

var store_front_content;
var booking_page_content;
var account_details;

// app.use('*', function(req, res, next){
//   //myservvio.com allowed
//   //wepaint.servvio.com allowed
//   //we.paint.servvio.com not allowed
// // if(req.hostname.match(/\./g).length > 2){
// //   //send error page
//     // res.send(static error page)
// // }
// // else if(req.hostname == 'myservvio.com'){
// //   //send error page
// // }
// //else continue i.e. send the react static or dynamic page
//   next()
// })

app.use('/', function(req, res, next){

  INChostname = req.hostname
  storename = req.hostname.replace('.myservviio.com', '')
  //storename = req.hostname.replace('.localhost', '')

  console.log(`hello here works in middleware req.data: ${req}, hostname: ${req.hostname}, subdomain is: ${(req.subdomains)}`);

  //return promise function 
    //inside function get store front content for this store using storename
  //.then(()=>{emit data below})
  //show data on react page initially as words to test working
  const data = {"store_name": storename}
  
    //firebase
  console.log("Store name being sent to firebase is: " + storename)
  axios.post("https://us-central1-dashtest-7cb07.cloudfunctions.net/getStoreContent", data ).then((storeContent)=>{
    //console.log("store content is: " + storeContent);

    console.log("store content data is: " + JSON.stringify(storeContent.data))
    store_front_content = storeContent.data
    io.on("connection", function (socket) {
      console.log(`Made socket connection, socket is ${socket.id}`);
      console.log(`Hostname: ${INChostname}`);
      //io.emit("subdomain", {"socket id": socket.id, "hostname": INChostname.replace('.localhost', ''), "details": store_front_content});
      io.emit("subdomain", {"socket id": socket.id, "hostname": INChostname.replace('.myservviio.com', ''), "details": store_front_content});
      setTimeout(() => socket.disconnect(true), 1000);

    });
    next()
  }, (error)=>{
    console.log("error occurred: " + error)
  })
  
})

// app.use('/bookings', function(req, res, next){
//   INChostname = req.hostname
//   storename = req.hostname.replace('.localhost', '')

//   console.log(`hello here works in middleware req.data: ${req}, hostname: ${req.hostname}, subdomain is: ${(req.subdomains)}`);

//   //return promise function 
//     //inside function get bookings data for this store using storename
//   //.then(()=>{emit data below})

//   io.on("connection", function (data) {
//     console.log(`Made socket connection, socket is ${data.id}`);
//     console.log(`Hostname: ${INChostname}`);
//     io.emit("subdomain", {"socket id": data.id, "hostname": INChostname.replace('.localhost', ''), "bookings_content": booking_page_content});
//     // io.emit("subdomain", {"socket id": data.id, "hostname": INChostname.replace('.myservvio.com', '')});
//   });
//   next()
// })


// app.use('/account', function(req, res, next){
//   INChostname = req.hostname
//   storename = req.hostname.replace('.localhost', '')

//   console.log(`hello here works in middleware req.data: ${req}, hostname: ${req.hostname}, subdomain is: ${(req.subdomains)}`);

//   //return promise function 
//     //inside function get bookings data for this store using storename
//   //.then(()=>{emit data below})

//   io.on("connection", function (data) {
//     console.log(`Made socket connection, socket is ${data.id}`);
//     console.log(`Hostname: ${INChostname}`);
//     io.emit("subdomain", {"socket id": data.id, "hostname": INChostname.replace('.localhost', ''), "account_details": account_details});
//     // io.emit("subdomain", {"socket id": data.id, "hostname": INChostname.replace('.myservvio.com', '')});
//   });
//   next()
// })


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
