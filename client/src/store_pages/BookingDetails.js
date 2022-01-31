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
import useWindowSize from '../store_pages/hooks/useWindowSize';
import ReturnHome from './components/ReturnHome';


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
    const {width, height} = useWindowSize()
    const [screenW, setScreenW] = useState(0.7*width)

    const msgStyling = {"client": {"padding": "5px", "border-radius": "5px", "background-color": "#0574DD", "color": "white", "maxWidth": `${0.4*width}px`, "margin-right":"5px", "margin-left": "auto"},
    "provider": {"padding": "5px", "border-radius": "5px", "background-color": "white", "color": "black", "maxWidth": `${0.4*width}px`, "margin-left":"5px", "margin-right": "auto"} }

    const search = useLocation().search;
    
    const messages = useGetBookingMessages()
    const bookingdetails = useGetBookingDetails()
    const messageRef = useRef()
    const provider_Name = new URLSearchParams(search).get('provider')

    useEffect(()=>{
        if(width < 672){
          setScreenW(0.8*width)
        }else if(width < 990){
          setScreenW(0.8*width)
        }else{
          setScreenW(0.5*width)
        }
      }, [width, height])

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
            <div style={{"maxHeight": height}}>
            <div>
                <ReturnHome/>
            </div>
            <h2 style={{"position": "absolute", "top": "0%"}}> Your Booking Request</h2>
            <br/>
                {
                    (bookingdetails && messages) ?
                        <div style={{"display": "grid", "place-items": "center", "align-content": "center"}}>
                            <Card style={{"width": `${screenW}px`, "position": "absolute", "maxHeight": `${0.25*height}px`, "overflowY": "auto", "top":"10%"}}>
                                <Card.Body>
                                    <Card.Title>
                                        {bookingdetails.client_name}
                                    </Card.Title>
                                    <Card.Text>
                                        Service: {bookingdetails.service_requested}
                                        Notes: {bookingdetails.service_notes}
                                        <Form.Label>Event Start</Form.Label>
                                        <Card.Text
                                            type="text"
                                            disabled={true}
                                            // ref={eventTodayNotesRef}
                                            placeholder={`${new Date(bookingdetails.startTime).toString()}`}
                                        />
                                        <br/>

                                        <Form.Label>Event End</Form.Label>
                                        <Card.Text 
                                        type="text"
                                        disabled={true}
                                        // ref={eventTodayNotesRef}
                                        placeholder={`${new Date(bookingdetails.endTime).toString()}`}
                                        />
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br/>
        
                           <Card style={{"width": `${screenW}px`, "height": `${0.4*height}px`, "display": "block", "maxHeight": `${0.4*height}px`, "overflowY": "auto", "top":"50%" }}>
                                {messages.map((item, index)=>{
                                return(
                                    <>
                                    <div style={msgStyling[item.message_sent_by]} >
                                    <li key={index} style={{"list-style": "none"}}>
                                    {item.message_sent_by === 'client' ? <h5>you:</h5> : <h5>{provider_Name}:</h5> }
                                        <h4>
                                            {item.message}
                                        </h4>
                                    </li>
                                    </div>
                                    <br/>
                                    <br/>
                                    </>
                                )
                                })}
                            </Card>

                            <div style={{"position": "absolute", "bottom": "0px", "display": "table"}}>
                                <Form inline onSubmit={onFormSubmit}>
                                    <div style={{"display": "table-row"}}>
                                        
                                        <div style={{"display": "table-cell"}}>
                                            <Form.Group id="message">
                                                <Form.Control type="text" ref={messageRef} placeholder="Type message" required />
                                            </Form.Group>
                                        </div>

                                        <div style={{"display": "table-cell"}}>
                                            <Button type="submit">Send Message</Button>
                                        </div>
                                    
                                    </div>
                                    
                                </Form>
                            </div>

                        </div>
                    : <Spinner animation='border'/>

                }
                 
            </div>
        )
      }

      
      
      
}


export default BookingDetails