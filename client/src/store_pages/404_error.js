//import logo from './logo.svg';
import React, {useState} from 'react';
const { io } = require("socket.io-client");



const port = process.env.PORT || 5000;

function Lost() {
  
  
  return (
    <div className="Lost">
      <h1> The page you are looking for doesn't exist </h1>
      <br></br>
      <h2> Redirect to servviio.com if you like </h2>

    </div>
  );
}

export default Lost;
