//import logo from './logo.svg';
import Home from './store_pages/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Lost from './store_pages/404_error';
import './App.css';
import React, {useState, useEffect} from 'react';
import Bookings from './store_pages/Bookings';
import Gallery from './store_pages/Gallery';
import Services from './store_pages/Services';

const { io } = require("socket.io-client");
const axios = require('axios');



const port = process.env.PORT || 5000;

function App() {

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
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="home">
            { isPending && <div>Loading...</div> }
            {content && <Home serviceContent={content} />}
          </div>
        </Route>
        <Route exact path="/new">
          <Lost />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/bookings">
          <Bookings />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
