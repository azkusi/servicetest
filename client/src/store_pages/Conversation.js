//=========================================================================
//    CLIENT PAGE FOR RESPONDING TO PROVIDER'S RESPONSE TO MESSAGE 
//=========================================================================


import React, { useEffect, useState, useRef } from 'react';
import Row from "react-bootstrap/Row"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import config from '../firebase';
import { Spinner, Form, Button, Card } from "react-bootstrap";
import {useLocation, Redirect} from 'react-router-dom'
import useGetConvo from './hooks/useGetConvo';

let db;
  var store_name;
  var loaded;

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
    db = firebase.firestore();
  }else {
    db = firebase.app().firestore() // if already initialized, use that one
  }

function Conversations({match, location}) {
    // console.log("reached FullConversations component")
    const search = useLocation().search;
    
    // const [firebaseConversationID, setfirebaseConversationID] = useState("") 

    // const [messages, setMessages] = useState([])
    const messages = useGetConvo()
    const [redirect, setRedirect] = useState(false);
    const [finishedLoading, setFinishedLoading] = useState(false)
    const messageRef = useRef()
    var messageList = [];

    // useEffect(()=>{
        
    // }, [])

    async function onFormSubmit (e){
        const providerName = new URLSearchParams(search).get('provider')
        const conversationID = new URLSearchParams(search).get('chat')
        e.preventDefault();
        const messageSent = messageRef.current.value
        console.log("Message: " + messageSent)
        // setSuccess(true)
        try{
            const currentTime = Date.now()
        //create new message doc for this new message provider has just typed
          const messageRefFB = db.collection('serviceProviders').doc(providerName).collection('conversations').doc(conversationID).collection('messages').doc()
        // update the 'most recent message sent field in the conversations collection doc'
          const convoRef = db.collection('serviceProviders').doc(providerName).collection('conversations').doc(conversationID)
        //   console.log("convorefID is: " + convorefID)
          await messageRefFB.set({"message": messageSent, "message_sent_by": "client", "timestamp": currentTime, "provider_read_status": "unread"})
          convoRef.update({"last_message_sent": messageSent, "last_message_sent_by": "client", "timestamp": currentTime, "provider_read_status": "unread"})
          .then(()=>{
            messageRef.current.value = ''
          })
       
          // get msgs_notifications array, push new notification and convo docID the notification came from not the messages docID
        const msgNotifRef = db.collection('serviceProviders').doc(providerName)
        msgNotifRef.get().then(async (doc)=>{
          let msg_notif_array = doc.data().msgs_notifications
          let temp_msg_notif_array = msg_notif_array.push(conversationID)
          await msgNotifRef.update({"msgs_notifications" : firebase.firestore.FieldValue.arrayUnion(...msg_notif_array)}) 
        })
            console.log("message sent: " + messageSent) 
        }
        catch(err){
          console.log("error is: " + err)
        }
    }





      if(messages === "DN_EXIST"){
          return(<Redirect to="/" />
              )
      }
      else{
        return(     
            <>
                {messages ?
                <>
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
                </>
                :
                <Spinner animation='border'/>
                }
                 
            </>
        )
      }

      
      
      
}


export default Conversations