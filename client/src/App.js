//import logo from './logo.svg';
import './App.css';
import Home from './store_pages/BookingRequest'
import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import Lost from './store_pages/NonExistentRoute';

import React, {useState, useEffect} from 'react';
import Gallery from './store_pages/Gallery';
import Services from './store_pages/Services';
import Navigation from './store_components/Navigation';
import BackgroundImage from './store_components/BackgroundImage';

import Calendar from './store_pages/Calendar';
import BookingRequest from './store_pages/BookingRequest';
import Messages from './store_pages/Messages';
import Conversations from './store_pages/Conversation';
import BookingDetails from './store_pages/BookingDetails';
import { Alert, Spinner } from 'react-bootstrap';
import Advertisements from './store_pages/components/Advertisements';
import NonExistentRoute from './store_pages/NonExistentRoute';
import NonExistentStore from './store_pages/NonExistentStore';


import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import {config} from './firebase';
import useGetHostName from './store_pages/hooks/useGetHostName';

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
  const [error, setError] = useState(false)
  // const host_name = useGetHostName()
  const [host_name, setHost_Name] = useState(null)



  useEffect(() => {
    firebase.auth().signInAnonymously().then(()=>{
      getSubdomain()
    },()=>{
      setError(true)
    })
    

  }, [])


  function getSubdomain(){
    // const subdomainString = window.location.hostname
  
      // console.log("user is: " + JSON.stringify(user))
      // console.log("email is: " + user.email)
      console.log("href url: " + window.location.href)
      console.log("document url: " + document.URL)
      const baseURL = new URL(document.URL)

      console.log("hostname: " + baseURL.hostname)
      // const subdomainString = document.URL.replace('http://', '').replace(':5000','')
      const subdomainString = baseURL.hostname
      providerName = subdomainString.replace('.myservviio.com', '')
      providerName = providerName.replace('.localhost', '')

      if(content === null){
        db.collection("serviceProviders").doc(providerName)
        .get().then((doc) => {
                if (doc.exists) {
                    // console.log("Store exists: " + JSON.stringify(doc.data()))
                    setContent({"site_name" : doc.id, "service_content":doc.data()})
                    setIsPending(false)
                } else {
                    // console.log("No such provider!");
                    setErrorPage(true)
                }
        },(err)=>{
          console.log("provider probably doesn't exist, error was: " + err)
        })
      }
    
    


  }
  if(errorPage === true){
    return(
      <NonExistentStore/>
    )
  }else if(error){
    <Alert variant='danger'>
      Error occurred please contact help@servviio.com
    </Alert>
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
        <div className='landingPage'>

          <div style={{"padding": "40px"}}>
        
            {(!noNav && location.pathname !== '/booking-request/details' && location.pathname !== '/conversations') && <Navigation serviceContent={content} />}
    
            {/* {((location.pathname !== "/") && (!noNav)) && 
              <div>
                <Advertisements/>
              </div>
            } */}
          </div>

          <div>
  
          <Switch>
  
            <Route exact path="/">
            { !content && <Spinner/> }
              {content && <BackgroundImage serviceContent={content}/>}
            </Route>
  
            <Route exact path="/services">
              <div>
              { (!content) && <Spinner/> }
                <Services serviceContent={content} />
              </div>
            </Route>
  
            <Route exact path="/send-me-a-booking-request">
            { (!content) && <Spinner/> }
              {content && <BookingRequest serviceContent={content} />}
            </Route>
  
            <Route exact path="/booking-request/details">
            { (!content) && <Spinner/> }
              <BookingDetails />
            </Route>
  
            <Route exact path="/gallery">
            { (!content) && <Spinner/> }
              <Gallery serviceContent={content} />
            </Route>
  
            <Route exact path="/send-me-a-message">
            { (!content) && <Spinner/> }
              {content && <Messages serviceContent={content} />}
            </Route>

            {/* <Route exact path="/calendar">
            { (!content) && <Spinner/> }
              {content && <Calendar serviceContent={content} />}
            </Route> */}
  
            <Route exact path="/conversations">
            {/* { (!content) && <Spinner/> } */}
              <Conversations />
            </Route>
  
            <Route>
              <NonExistentRoute/>
            </Route>
            
          </Switch>
          </div>
        </div>
        </>
        
      );
    }
  }

  


  
}

export default App;
