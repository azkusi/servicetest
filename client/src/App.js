//import logo from './logo.svg';
import Home from './store_pages/BookingRequest'
import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import Lost from './store_pages/NonExistentRoute';
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
import Advertisements from './store_pages/components/Advertisements';
import NonExistentRoute from './store_pages/NonExistentRoute';
import NonExistentStore from './store_pages/NonExistentStore';


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {config} from './firebase';

const { io } = require("socket.io-client");
const axios = require('axios');
var providerName;
let db;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  db = firebase.firestore();
}else {
  db = firebase.app().firestore() // if already initialized, use that one
}



const port = process.env.PORT || 5000;

function App() {

  const [content, setContent] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const location = useLocation();
  const [errorPage, setErrorPage] = useState(false)
  const [noNav, setNoNav] = useState(false)


  useEffect(() => {
    getSubdomain()

  }, [content, errorPage, noNav])


  function getSubdomain(){
    const subdomainString = window.location.hostname
    providerName = subdomainString.replace('.myservviio.com', '')
    providerName = providerName.replace('.localhost', '')

    if(providerName){
      db.collection("serviceProviders").doc(providerName)
      .get().then((doc) => {
              if (doc.exists) {
                  // console.log("Store exists: " + JSON.stringify(doc.data()))
                  setContent({"service_provider_name" : doc.id, "service_content":doc.data()})
                  setIsPending(false)
              } else {
                  // console.log("No such provider!");
                  setErrorPage(true)
              }
      })
    }
    


  }
  if(errorPage === true){
    return(
      <NonExistentStore/>
    )
  }
  else{

    if((content === null) || (content === undefined) || (!content)){
      return (
        <Spinner animation="border"/>
      )
    }
    else{
      return (
        <>
        
         {(!noNav) && <Navigation serviceContent={content} />}
  
          {((location.pathname !== "/") && (!noNav)) && 
            <div>
              <Advertisements/>
            </div>
          }
  
          <Switch>
  
            <Route exact path="/">
            { isPending && <Spinner/> }
              <BackgroundImage serviceContent={content}/>
            </Route>
  
            <Route exact path="/services">
              <div>
              { isPending && <Spinner/> }
                <Services serviceContent={content} />
              </div>
            </Route>
  
            <Route exact path="/booking-request">
            { isPending && <Spinner/> }
              <BookingRequest serviceContent={content} />
            </Route>
  
            <Route exact path="/booking-request/details">
            { isPending && <Spinner/> }
              <BookingDetails />
            </Route>
  
            <Route exact path="/gallery">
            { isPending && <Spinner/> }
              <Gallery serviceContent={content} />
            </Route>
  
            <Route exact path="/messages">
            { isPending && <Spinner/> }
              {content && <Messages serviceContent={content} />}
            </Route>
  
            <Route exact path="/conversations">
            { isPending && <Spinner/> }
              <Conversations />
            </Route>
  
            <Route>
              <NonExistentRoute/>
            </Route>
            
          </Switch>
        </>
        
      );
    }
  }

  


  
}

export default App;
