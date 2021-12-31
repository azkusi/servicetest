import React, { useEffect, useState, useRef } from 'react';
import Row from "react-bootstrap/Row"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import config from '../firebase';
import { Spinner, Form, Button, Card } from "react-bootstrap";
import {useLocation, Redirect} from 'react-router-dom'

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
    
    // const [firebaseConversationID, setfirebaseConversationID] = useState("") 

    const [messages, setMessages] = useState([])
    const [redirect, setRedirect] = useState(false);
    const [finishedLoading, setFinishedLoading] = useState(false)
    const [bookingdetalis, setBookingDetails] = useState('')
    const messageRef = useRef()
    var messageList = [];

    useEffect(()=>{

        paramCheck().then(()=>{
            getBookingDetails().then(()=>{
                getConversation().then(()=>{
                    setMessages(messageList)
                    setFinishedLoading(true)
                }, (value)=>{
                    console.log(value);
                    setRedirect(true)
                })
            },(err)=>{
                console.log("error occurred: " + err);
            })
        }, (value)=>{
            console.log(value)
            setRedirect(true)
        })
        
    }, [search, messages])

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
          const messageRef = db.collection('serviceProviders').doc(providerName).collection('bookingrequests').doc(bookingRefID).collection('messages').doc()
        // update the 'most recent message sent field in the conversations collection doc'
          const bookingRef = db.collection('serviceProviders').doc(providerName).collection('bookingrequests').doc(bookingRefID)
        //   console.log("convorefID is: " + convorefID)
          await messageRef.set({"message": messageSent, "message_sent_by": "client", "timestamp": currentTime})
          await bookingRef.update({"last_message_sent": messageSent, "last_message_sent_by": "client", "timestamp": currentTime})
            console.log("message sent: " + messageSent) 
        }
        catch(err){
          console.log("error is: " + err)
        }
    }


    function paramCheck(){
        return new Promise((resolve, reject)=>{
            const searcher = new URLSearchParams(search)
            if(!(searcher.has('bookingref')) || !(searcher.has('provider'))){
                reject("missing params");
            }
            else{
                resolve("params present")
            }
        })
    }

    function getConversation(){
        // const providerName = location.query.provider
        // const conversationID = location.query.chat
        const providerName = new URLSearchParams(search).get('provider')
        const bookingrefID = new URLSearchParams(search).get('bookingref')
        return new Promise((resolve, reject)=>{ 
            // console.log("running get convo function")
            const providerRefTest = db.collection('serviceProviders').doc(providerName)
            const fullConvoRefTest = db.collection('serviceProviders').doc(providerName).collection('bookingrequests').doc(bookingrefID)
            providerRefTest.get()
            .then((docSnapshot)=>{
                // console.log("got 1st snap")
                if(!docSnapshot.exists){
                    // console.log("retailer does not exist")
                    reject("conversation does not exist")
                }
                else{
                    fullConvoRefTest.get()
                    .then((docSnapshot)=>{
                        // console.log("got 2nd snap")
                        if(!docSnapshot.exists){
                            // console.log("convo does not exist")
                            reject("conversation does not exist")
                        }
                        else{

                            const fullConvoRef = db.collection('serviceProviders').doc(providerName).collection('bookingrequests').doc(bookingrefID).collection('messages')
                            fullConvoRef.orderBy('timestamp', 'asc')
                            .onSnapshot(async (querySnapshot)=>{
                                // console.log("got messages snap")
                                querySnapshot.forEach((snapshot) =>{
                                    // console.log("snapshot data: " + JSON.stringify(snapshot.data()))
                                    // console.log("messageList inside snapshot loop: " + JSON.stringify(messageList))
                                    const messageID = snapshot.id
                                    if(snapshot.data().message_sent_by === "client"){
                                        //place unread colour or notification on message
                                        // console.log("adding client msg")
                                        messageList.push({
                                        "message": snapshot.data().message,
                                        "timestamp": snapshot.data().timestamp,
                                        "message_sent_by": snapshot.data().message_sent_by,
                                        "messageID": messageID})
                                    }else{
                                    //simply place message
                                    //   console.log("adding provider msg")
                                    messageList.push({
                                        "message": snapshot.data().message,
                                        "timestamp": snapshot.data().timestamp,
                                        "message_sent_by": snapshot.data().message_sent_by,
                                        "messageID": messageID})
                                    }
                                    
                                })
                            // console.log("MSGList inside function" + JSON.stringify(messageList))
                            resolve(messageList);
                            })
                            
                        }
                        
                    })
                }
            })
          
        })
        
      }

      function getBookingDetails(){
        return new Promise((resolve, reject)=>{
            const providerName = new URLSearchParams(search).get('provider')
            const bookingID = new URLSearchParams(search).get('bookingref')
            const bookingDeetsRef = db.collection('serviceProviders').doc(providerName).collection('bookingrequests').doc(bookingID)
            bookingDeetsRef.get().then((doc)=>{
                setBookingDetails(doc.data())
                resolve(bookingdetalis)
            }, (err)=>{
                reject(err)
            })
        })
    }

      if(redirect){
          return(<Redirect to="/" />
              )
      }
      else{
        return(     
            <>
                {
                    finishedLoading ?
                        <div>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        {bookingdetalis.client_name}
                                    </Card.Title>
                                    <Card.Text>
                                        {bookingdetalis.service_requested}
                                        {bookingdetalis.service_notes}
                                        {bookingdetalis.client_email}
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
                        : <Spinner animation="border"></Spinner>

                }
                 
            </>
        )
      }

      
      
      
}


export default BookingDetails