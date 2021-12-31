import "../styles.css";
import React, { useRef, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
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
  const [success, setSuccess] = useState(null)
  const nameRef = useRef()
  const messageRef = useRef()
  const emailRef = useRef()
  // const [serviceProviderData, setServiceProviderData] = useState(serviceContent);
  // const [value, setValue] = useState()
  // const onInput = ({target:{value}}) => setValue(value)
 
 
  async function onFormSubmit (e){
    e.preventDefault();
    const nameSent = nameRef.current.value;
    const emailSent = emailRef.current.value
    const messageSent = messageRef.current.value
    console.log("Name: " + nameSent)
    console.log("Email: " + emailSent)
    console.log("Message: " + messageSent)
    try{
      const currentTime = Date.now()
      const convoref = db.collection('serviceProviders').doc(serviceContent.service_provider_name).collection('conversations').doc()
      const convorefID = convoref.id
      console.log("convorefID is: " + convorefID)
      await convoref.set({"last_message_sent": messageSent, "last_message_sent_by": "client", "client_name": nameSent, "client_email": emailSent, "timestamp": currentTime})
      await db.collection('serviceProviders').doc(serviceContent.service_provider_name).collection('conversations').doc(convorefID).collection('messages').add({"message": messageSent, "client_name": nameSent, "client_email": emailSent, "message_sent_by": "client", "timestamp": currentTime})
      setSuccess(true)
    }
    catch(err){
      console.log("error is: " + err)
      setSuccess(false);
    }
}

  if(success === null){
    return (
      <>
      <div>
        <h2>Messages</h2> 
      </div>
      <div>
      {!success && 
      <Card>
      <Card.Body>
        <Form onSubmit={onFormSubmit}>
          <Form.Group id="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} placeholder="name" required />
          </Form.Group>

          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} placeholder="email" required />
          </Form.Group>
          
          <Form.Group id="message">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" ref={messageRef} placeholder="Type message" required />
          </Form.Group>
          <Button type="submit">Send Message</Button>
        </Form>
        </Card.Body>
        </Card>}


      {/* {success && <h2>Successfully sent</h2>} */}

      

      </div>
      </>
      //
      //start working on cloud function to send email to serviceProvider and to client

      //on serviomain add firebase function code to retrieve messages and set notifications
      //for each convo retrieve last message sent, whether unread by provider or not and all messages from convo
    );

  }     
  else{
    return(
      <div>
        {success ? <Alert severity="success">
        Your message was successfully sent to {serviceContent.service_content.page_title}
        <br/>
        We will send you an email when {serviceContent.service_content.page_title} responds to your message.
      </Alert>   :
        <Alert severity="danger">
        Error occurred, please contact support
        <br/>
      </Alert>
        }

      </div>
      
    )
  }

}
   
  export default Messages;