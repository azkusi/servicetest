//=========================================================================
//              CLIENT PAGE FOR INITIATING BOOKING REQUEST 
//=========================================================================

import React, { useRef, useState, useEffect } from "react";
import { Alert, Form, Button, Card } from "react-bootstrap";
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'
// import Alert from '@mui/material/Alert';

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

function BookingRequest ({ serviceContent }) {
  const [success, setSuccess] = useState(null)
  const nameRef = useRef()
  const messageRef = useRef()
  const emailRef = useRef()
  const serviceRef = useRef()
  const notesRef = useRef()
  // const [serviceProviderData, setServiceProviderData] = useState(serviceContent);
  // const [value, setValue] = useState()
  // const onInput = ({target:{value}}) => setValue(value)
  const offerred_services = serviceContent.service_content.services
  


  useEffect(()=>{
    console.log("store content" + JSON.stringify(serviceContent))
    //.then()
    
}, [])
 
 
  async function onFormSubmit (e){
    e.preventDefault();
    const nameSent = nameRef.current.value;
    const emailSent = emailRef.current.value
    const messageSent = messageRef.current.value
    const serviceChosen = serviceRef.current.value
    const serviceNotes = notesRef.current.value
    console.log("Name: " + nameSent)
    console.log("Email: " + emailSent)
    console.log("Message: " + messageSent)
    
    try{
      setSuccess(true)
      const currentTime = Date.now()
      const convoref = db.collection('serviceProviders').doc(serviceContent.site_name).collection('bookingrequests').doc()
      const convorefID = convoref.id
      console.log("convorefID is: " + convorefID)
      await convoref.set({"last_message_sent": messageSent, "last_message_sent_by": "client", "client_name": nameSent, "client_email": emailSent, "service_requested" : serviceChosen, "service_notes": serviceNotes, "timestamp": currentTime, "booking_status": "pending", "provider_read_status": "unread"})
      db.collection('serviceProviders').doc(serviceContent.site_name).collection('bookingrequests').doc(convorefID).collection('messages').add({"message": messageSent, "client_name": nameSent, "client_email": emailSent, "message_sent_by": "client", "timestamp": currentTime, "provider_read_status": "unread"})
      .then(()=>{
        messageRef.current.value = ''
      })
      // get booking_request_notifications array, push new notification and bookingrequest docID the notification came from not the messages docID
      
      const bookingRequestNotifRef = db.collection('serviceProviders').doc(serviceContent.site_name)
      bookingRequestNotifRef.get().then(async (doc)=>{
        let booking_requests_notif_array = doc.data().booking_requests_notifications
        let temp_msg_notif_array = booking_requests_notif_array.push(convorefID)
        await bookingRequestNotifRef.update({"booking_requests_notifications" : firebase.firestore.FieldValue.arrayUnion(...booking_requests_notif_array)}) 
      })      
    }
    catch(err){
      console.log("error is: " + err)
      setSuccess(false)
    }
}

if(success === null){
  return (
    <>
      <div>
        <h1>Send a Booking Request</h1> 
      </div>
      <div>
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

          <Form.Label>Select Service</Form.Label>
          <Form.Select aria-label="Select Service">

          {offerred_services.map((item, index)=>{
            return(
              <option ref={serviceRef} value={index.toString()}>{item.service_name}</option>
            )
            
          })}
          </Form.Select>

          
          <Form.Group id="notes">
            <Form.Label>Extra Notes</Form.Label>
            <Form.Control type="text" ref={notesRef} placeholder="Type message" required />
          </Form.Group>

          <Form.Group id="message">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" ref={messageRef} placeholder="Type message" required />
          </Form.Group>
          <Button type="submit">Submit Booking Request</Button>

          <Form.Label>Input service time using calendar:</Form.Label>
        </Form>
        </Card.Body>
        </Card>
      </div>
      </>
      //
      //start working on cloud function to send email to serviceProvider and to client

      //on serviomain add firebase function code to retrieve messages and set notifications
      //for each convo retrieve last message sent, whether unread by provider or not and all messages from convo

  )
}
else{
  return (
    <div>
      {/* {success && <h2>Successfully sent</h2>} */}

      {success ? <Alert variant="success">
        Your message was successfully sent to {serviceContent.service_content.page_title}
        <br/>
        We will send you an email when {serviceContent.service_content.page_title} responds to your message.
      </Alert> :
       <Alert variant="danger">
       Error occurred, please contact support
       <br/>
     </Alert>} 
    </div>
    );
}
    
  }
   
  export default BookingRequest;