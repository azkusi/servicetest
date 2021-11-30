import React, {useState, useEffect} from 'react';
const { io } = require("socket.io-client");
const axios = require('axios');

const port = process.env.PORT || 5000;

const Services = ({ bookings_events }) => {

  const [content, setContent] = useState(null);
  const [isPending, setIsPending] = useState(true);


  useEffect(() => {
    var data = {}
    var datatosend;
    const socket = io();
    socket.connect(`http://localhost:${port}`);
    
    return new Promise((resolve, reject) =>{
      socket.on("store_check", (info)=>{
        socket.disconnect();
        //subdomain = domain.hostname
        
        data["store_name"] = info.store_name
        datatosend = data
        
        document.title = info.store_name;
        if(datatosend !== undefined){
          resolve(datatosend)
        }
        
      })
      
    }).then(()=>{
      console.log("data to send is: " + JSON.stringify(datatosend))
      axios.post("https://us-central1-dashtest-7cb07.cloudfunctions.net/getStoreContent", datatosend)
      .then(res => {
        return res.data;
      })
      .then(data => {
        setIsPending(false);
        setContent(data);
      })
    })

  }, [])

    return (
      <div className="Services">
          { isPending && <div>Loading...</div> }
          {content && <h1> {content.service_provider_name}'s offered services - React page </h1>}
      </div>
    );
  }
   
  export default Services;