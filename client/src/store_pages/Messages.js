//=========================================================================
//            CLIENT PAGE FOR INITIATING MESSAGE TO PROVIDER   
//=========================================================================


import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
// import Alert from '@mui/material/Alert';

import {app} from '../firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import config from '../firebase';
import mixpanel from 'mixpanel-browser';

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
  
  
  let subdomains = window.location.hostname.toString()



    useEffect(()=>{
      mixpanel.init('a237f239cb8cd02fafc64614c70bb36b')
      if(subdomains.includes('localhost')){
        mixpanel.track('dev_client_side_messages_page_visit')
      }else{
        mixpanel.track('client_side_messages_page_visit')
      }
    }, [])
 
 
  async function onFormSubmit (e){
    e.preventDefault();
    const nameSent = nameRef.current.value;
    const emailSent = emailRef.current.value
    const messageSent = messageRef.current.value
    

    try{
      const currentTime = Date.now()
      const convoref = db.collection('serviceProviders').doc(serviceContent.site_name).collection('conversations').doc()
      const convorefID = convoref.id
      // console.log("convorefID is: " + convorefID)
      await convoref.set({"last_message_sent": messageSent, "last_message_sent_by": "client", "client_name": nameSent, "client_email": emailSent, "timestamp": currentTime, "provider_read_status": "unread"})
      await db.collection('serviceProviders').doc(serviceContent.site_name).collection('conversations').doc(convorefID).collection('messages').add({"message": messageSent, "client_name": nameSent, "client_email": emailSent, "message_sent_by": "client", "timestamp": currentTime, "provider_read_status": "unread"})
      
      // get msgs_notifications array, push new notification and convo docID the notification came from not the messages docID
      const msgNotifRef = db.collection('serviceProviders').doc(serviceContent.site_name)
      msgNotifRef.get().then(async (doc)=>{
        let msg_notif_array = doc.data().msgs_notifications
        let temp_msg_notif_array = msg_notif_array.push(convorefID)
        await msgNotifRef.update({"msgs_notifications" : firebase.firestore.FieldValue.arrayUnion(...msg_notif_array)}) 
      })

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
        <h1>Send a Message</h1> 
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
        {success ? <Alert variant="success">
        Your message was successfully sent to {serviceContent.service_content.page_title}
        <br/>
        We will send you an email when {serviceContent.service_content.page_title} responds to your message.
      </Alert>   :
        <Alert variant="danger">
        Error occurred, please contact support at support@servviio.com
        <br/>
      </Alert>
        }

      </div>
      
    )
  }

}
   
  export default Messages;