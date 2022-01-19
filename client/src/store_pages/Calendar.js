import React, {useState, useEffect} from 'react';
import { Spinner } from 'react-bootstrap';
const { io } = require("socket.io-client");
const axios = require('axios');

const port = process.env.PORT || 5000;

const Calendar = ({ serviceContent }) => {

  // const [content, setContent] = useState(null);
  // const [isPending, setIsPending] = useState(true);


  

    return (
      <div className="Calendar">
          <h1> {serviceContent.site_name}'s calendar events - React page </h1>
          <br></br>
          <h3>More content</h3>
          <br></br>
          <h3>More content</h3>
          <br></br>
          <h3>More content</h3>
      </div>
    );
  }
   
  export default Calendar;