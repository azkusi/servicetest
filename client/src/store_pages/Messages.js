import "../styles.css";
import React, { useRef, useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";
import Alert from '@mui/material/Alert';

import {app} from '../firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import config from '../firebase';

let db;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  db = firebase.firestore();
}else {
  db = firebase.app().firestore() // if already initialized, use that one
}

function Messages ({ serviceContent }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)
  // const [serviceProviderData, setServiceProviderData] = useState(serviceContent);
  // const [value, setValue] = useState()
  // const onInput = ({target:{value}}) => setValue(value)
 
 
  function onFormSubmit (e){
    setSuccess(true)
    e.preventDefault();
    console.log("Name: " + name)
    console.log("Email: " + email)
    console.log("Message: " + message)
  }


    return (
      <>
      <div>
        <h2>Hi, {serviceContent.service_provider_name}</h2> 
      </div>
      <div>
      {!success && <form onSubmit={onFormSubmit}>
        

        <input
          placeholder="Name" 
          value={name}
          onChange={(e) => {setName(e.target.value)
          console.log("Name is: " + name)}}
        />


        <input
          label="email" 
          value={email}
          onChange={(e) => {setEmail(e.target.value)
          console.log("Email is: " + email)}}
        />

          <textarea
            type="text" 
            placeholder="Type message"
            value={message}
            onChange={(e) => {setMessage(e.target.value)
            console.log("Message is: " + message)}}
          />
        <input type="submit" value="Send Message" />
      </form> }


      {success && <h2>Successfully sent</h2>}

      {/* {success && <Alert severity="success">
        Your message was successfully sent to {serviceContent.service_content.page_title}
        We will send you an email when {serviceContent.service_content.page_title} responds to your message.
      </Alert> }  */}

      </div>
      </>
      //
      //start working on cloud function to send email to serviceProvider and to client

      //on serviomain add firebase function code to retrieve messages and set notifications
      //for each convo retrieve last message sent, whether unread by provider or not and all messages from convo
    );
  }
   
  export default Messages;