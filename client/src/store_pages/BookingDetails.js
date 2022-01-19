//=========================================================================
//    CLIENT PAGE FOR RESPONDING TO PROVIDER'S RESPONSE TO BOOKING REQUEST 
//=========================================================================

import React, { useEffect, useState, useRef } from 'react';
import Row from "react-bootstrap/Row"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import config from '../firebase';
import { Spinner, Form, Button, Card } from "react-bootstrap";
import {useLocation, Redirect} from 'react-router-dom'
import useGetBookingMessages from './hooks/useGetBookingMessages';
import useGetBookingDetails from './hooks/useGetBookingDetails';

let db;
  var store_name;
  var loaded;

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
    db = firebase.firestore();
  }else {
    db = firebase.app().firestore() // if already initialized, use that one
  }

function BookingDetails({match, location}) {
    // console.log("reached FullConversations component")
    const search = useLocation().search;
    
    const messages = useGetBookingMessages()
    const bookingdetails = useGetBookingDetails()
    const messageRef = useRef()

    // useEffect(()=>{
        
        
    // }, [search, messages])

    async function onFormSubmit (e){
        const providerName = new URLSearchParams(search).get('provider')
        const bookingRefID = new URLSearchParams(search).get('bookingref')
        e.preventDefault();
        const messageSent = messageRef.current.value
        console.log("Message: " + messageSent)
        // setSuccess(true)
        try{
            const currentTime = Date.now()
            //create new message doc for this new message provider has just typed
            const messageRefFB = db.collection('serviceProviders').doc(providerName).collection('bookingrequests').doc(bookingRefID).collection('messages').doc()
            // update the 'most recent message sent field in the conversations collection doc'
            const bookingRef = db.collection('serviceProviders').doc(providerName).collection('bookingrequests').doc(bookingRefID)
            //   console.log("convorefID is: " + convorefID)
            await messageRefFB.set({"message": messageSent, "message_sent_by": "client", "timestamp": currentTime, "provider_read_status": "unread"})
            bookingRef.update({"last_message_sent": messageSent, "last_message_sent_by": "client", "timestamp": currentTime, "provider_read_status": "unread"})
            .then(()=>{
                messageRef.current.value = ''
            })
            // get booking_request_notifications array, push new notification and bookingrequest docID the notification came from not the messages docID
        
            const bookingRequestNotifRef = db.collection('serviceProviders').doc(providerName)
            bookingRequestNotifRef.get().then(async (doc)=>{
            let booking_requests_notif_array = doc.data().booking_requests_notifications
            let temp_msg_notif_array = booking_requests_notif_array.push(bookingRefID)
            await bookingRequestNotifRef.update({"booking_requests_notifications" : firebase.firestore.FieldValue.arrayUnion(...booking_requests_notif_array)}) 
            })

            console.log("message sent: " + messageSent) 
        }
        catch(err){
          console.log("error is: " + err)
        }
    }



      if((bookingdetails === "DN_EXIST" || messages === "DN_EXIST")){
          return(<Redirect to="/" />
              )
      }
      else{
        return(     
            <>
                {
                    (bookingdetails && messages) ?
                        <div>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        {bookingdetails.client_name}
                                    </Card.Title>
                                    <Card.Text>
                                        {bookingdetails.service_requested}
                                        {bookingdetails.service_notes}
                                        {bookingdetails.client_email}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br/>

        
                            <div>
                            {messages.map((item, index)=>{
                            return(
                                <li key={index}>
                                    {/* color={item.message_sent_by} */}
                                    <h4>
                                        {item.message}
                                    </h4>
                                </li>
                            )
                            })}
                            </div>
                            <div>
                                <Card>
                                    <Card.Body>
                                        <Form onSubmit={onFormSubmit}>
                                        
                                        <Form.Group id="message">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control type="text" ref={messageRef} placeholder="Type message" required />
                                        </Form.Group>
                                        <Button type="submit">Send Message</Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    : <Spinner animation='border'/>

                }
                 
            </>
        )
      }

      
      
      
}


export default BookingDetails