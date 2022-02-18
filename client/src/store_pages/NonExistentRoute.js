//import logo from './logo.svg';
import React, {useState} from 'react';
const { io } = require("socket.io-client");



const port = process.env.PORT || 5000;

function NonExistentRoute() {
  
  
  return (
    <div className="Lost">
      <h1> The page you are looking for doesn't exist </h1>
      <br></br>
      <h2> Use navigation bar above to navigate to existing pages </h2>

    </div>
  );
}

export default NonExistentRoute;
