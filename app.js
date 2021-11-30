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


app.use(cors());


app.use('*', function(req, res, next){

  INChostname = req.hostname
  storename = req.hostname.replace('.myservviio.com', '')
  //storename = req.hostname.replace('.localhost', '')

  //console.log(`hello here works in middleware req.data: ${req}, hostname: ${req.hostname}, subdomain is: ${(req.subdomains)}`);

  const data = {"store_name": storename}
  
  //firebase
  console.log("Store name being sent to firebase is: " + storename)
  axios.post("https://us-central1-dashtest-7cb07.cloudfunctions.net/checkStoreExists", data ).then((storeContent)=>{
    console.log("store check result is: " + JSON.stringify(storeContent.data));

    if("Error" in storeContent.data){
      if(storeContent.data["Error"] == "Unknown_Provider_Name"){
        console.log("Unknown provider name searched")
        res.redirect("http://google.com")
        return null;
      }
      else{
        console.log("Other error check logs")
        res.sendFile(path.join(__dirname, "client", "public", "404.html"));
        res.end()
        return null;
      }
    }

    //console.log("store content data is: " + JSON.stringify(storeContent.data))
    //store_front_content = storeContent.data
    io.on("connection", function (socket) {
      console.log(`Made socket connection, socket is ${socket.id}`);
      console.log(`Hostname: ${INChostname}`);
      //should send site name only then do request for data on client side using 
      //site name and show loading sign in the meantime
      //io.emit("subdomain", {"socket id": socket.id, "hostname": INChostname.replace('.localhost', ''), "details": store_front_content});
      //io.emit("subdomain", {"socket id": socket.id, "hostname": INChostname.replace('.myservviio.com', ''), "details": store_front_content});
      //setTimeout(() => socket.disconnect(true), 1000);

      io.emit("store_check", {"store_name": storename});

    });
    next()
  }, (error)=>{
    console.log("error occurred: " + error)
  })
  
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
