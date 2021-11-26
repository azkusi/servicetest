//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
const { io } = require("socket.io-client");


var subdomain;

function App() {
  const socket = io();
  socket.connect("http://localhost:5000");
  const [storename, setStorename] = useState('');
  socket.on("subdomain", (data)=>{
    subdomain = data.hostname
    setStorename(data.hostname) 
    console.log(`data sent is ${JSON.stringify(data)}`);
    socket.disconnect();
  })

  // socket.on("connection", function (socket) {
  //   console.log(`Made socket connection, data is: ${socket}`);
  // })
  return (
    <div className="App">
      <h1> Welcome to {subdomain} store </h1>
      <h2> Store name is: {storename} </h2>
      <p>
        Hi Test App works
      </p>
    </div>
  );
}

export default App;
