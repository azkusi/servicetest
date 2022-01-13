//import logo from './logo.svg';
import React, {useState} from 'react';
const { io } = require("socket.io-client");



const port = process.env.PORT || 5000;

function NonExistentStore() {
  
  
  return (
    <div className="Lost">
      <h1> The page you are looking for doesn't exist </h1>
      <br></br>
      <h2> Navigate to servviio.com to create a site for your service </h2>

    </div>
  );
}

export default NonExistentStore;
