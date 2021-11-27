//import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
const { io } = require("socket.io-client");


var subdomain;
var storeContent;
//var storeTitle;
var storeDescription;
const port = process.env.PORT || 5000;

function App() {
  const socket = io();
  socket.connect(`http://localhost:${port}`);
  const [storename, setStorename] = useState('');
  const [storeTitle, setStoreTitle] = useState('');
  socket.on("subdomain", (data)=>{
    socket.disconnect();
    subdomain = data.hostname
    storeContent = data["details"]
    console.log("store details are: " + JSON.stringify(data["details"]))
    //storeTitle = data.details["page_title"];
    storeDescription = data.details["description"]
    setStorename(data.hostname) 
    setStoreTitle(data.details["page_title"]) 
    console.log(`data sent is ${JSON.stringify(data)}`);
    console.log(`store title is ${storeTitle}`);
  })

  useEffect(() => {
    document.title = storeTitle
  }, [])

  // socket.on("connection", function (socket) {
  //   console.log(`Made socket connection, data is: ${socket}`);
  // })
  return (
    <div className="App">
      <h1> Welcome to {subdomain} store </h1>
      <h2> Store name is: {storename} </h2>
      <br></br>
      <h2>Store Title: {storeTitle}</h2>
      <h2>Store Description: {storeDescription}</h2>

      <p>
        Hi Test App works
      </p>
    </div>
  );
}

export default App;
