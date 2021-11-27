//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
const { io } = require("socket.io-client");


var subdomain;
var storeContent;
//var storeTitle;
var storeDescription;
var storeTitle;


const port = process.env.PORT || 5000;

function App() {
  
  const socket = io();
  socket.connect(`http://localhost:${port}`);
  const [storename, setStorename] = useState('');
  //const [storeTitle, setStoreTitle] = useState('');
  socket.on("subdomain", (data)=>{
    socket.disconnect();
    subdomain = data.hostname
    storeContent = data["details"]
    console.log("store details are: " + JSON.stringify(data["details"]))
    //storeTitle = data.details["page_title"];

    //make sure these store details set by variable use come before
    //the store details set by useState()->e.g.setStorename
    storeTitle = data.details["page_title"];
    storeDescription = data.details["description"]
    setStorename(data.hostname) 
    //setStoreTitle(data.details["page_title"]) 
    console.log(`data sent is ${JSON.stringify(data)}`);
    console.log(`store title is ${storeTitle}`);
    document.title = data.details["page_title"];
  })
  

  // useEffect(() => {
  //   document.title = storeTitle.toString()
  // }, [])

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
