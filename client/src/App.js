//import logo from './logo.svg';
import Home from './store_pages/BookingRequest'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Lost from './store_pages/404_error';
import './App.css';
import React, {useState, useEffect} from 'react';
import Gallery from './store_pages/Gallery';
import Services from './store_pages/Services';
import Navigation from './store_components/Navigation';
import BackgroundImage from './store_components/BackgroundImage';
import SecondaryNav from './store_components/SecondaryNav';
import Calendar from './store_pages/Calendar';
import BookingRequest from './store_pages/BookingRequest';
import Messages from './store_pages/Messages';
import Conversations from './store_pages/Conversation';
import BookingDetails from './store_pages/BookingDetails';
import { Spinner } from 'react-bootstrap';

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
      axios.post("https://us-central1-serviiotest.cloudfunctions.net/getStoreContent", datatosend)
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
    <>
      {content && <Navigation serviceContent={content} />}
      {content && <BackgroundImage serviceContent={content}/> }
      {content && <SecondaryNav serviceContent={content}/> }
      <Switch>
        <Route exact path="/">
          <div className="home">
            { isPending && <h4> Loading... </h4> }
            {content && <Services serviceContent={content} />}
          </div>
        </Route>
        <Route exact path="/new">
          <Lost />
        </Route>
        <Route exact path="/calendar">
          <Calendar />
        </Route>
        <Route exact path="/booking-request">
        { isPending && <h4> Loading... </h4> }
          {content && <BookingRequest serviceContent={content} />}
        </Route>
        <Route exact path="/booking-request/details">
          <BookingDetails />
        </Route>
        <Route exact path="/gallery">
          {isPending && <h4> Loading... </h4>}
          {content && <Gallery serviceContent={content} />}
          
        </Route>
        <Route exact path="/messages">
        { isPending && <h4> Loading... </h4> }
          {content && <Messages serviceContent={content} />}
        </Route>
        <Route exact path="/conversations">
          <Conversations />
        </Route>
      </Switch>
    </>
    
  );
}

export default App;
