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

    const [messages, setMessages] = useState([])
    const [redirect, setRedirect] = useState(false);
    const [finishedLoading, setFinishedLoading] = useState(false)
    const messageRef = useRef()
    var messageList = [];

    useEffect(()=>{

        paramCheck().then(()=>{
            getConversation().then((msgListResult)=>{
                setMessages(msgListResult)
                setFinishedLoading(true)
            }, (value)=>{
                console.log(value)
                setRedirect(true)
            })
        }, (value)=>{
            console.log(value)
            setRedirect(true)
        })
        
    }, [search, messages])

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
          const messageRef = db.collection('serviceProviders').doc(providerName).collection('conversations').doc(conversationID).collection('messages').doc()
        // update the 'most recent message sent field in the conversations collection doc'
          const convoRef = db.collection('serviceProviders').doc(providerName).collection('conversations').doc(conversationID)
        //   console.log("convorefID is: " + convorefID)
          await messageRef.set({"message": messageSent, "message_sent_by": "client", "timestamp": currentTime, "provider_read_status": "unread"})
          await convoRef.update({"last_message_sent": messageSent, "last_message_sent_by": "client", "timestamp": currentTime, "provider_read_status": "unread"})
       
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


    function paramCheck(){
        return new Promise((resolve, reject)=>{
            const searcher = new URLSearchParams(search)
            if(!(searcher.has('chat')) || !(searcher.has('provider'))){
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
        const conversationID = new URLSearchParams(search).get('chat')
        return new Promise((resolve, reject)=>{ 
            // console.log("running get convo function")
            const providerRefTest = db.collection('serviceProviders').doc(providerName)
            const fullConvoRefTest = db.collection('serviceProviders').doc(providerName).collection('conversations').doc(conversationID)
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

                            const fullConvoRef = db.collection('serviceProviders').doc(providerName).collection('conversations').doc(conversationID).collection('messages')
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

      if(redirect){
          return(<Redirect to="/" />
              )
      }
      else{
        return(     
            <>
                {/* {loading ? <Spinner animation="border"/> : <> <h3>firebase conversationID:</h3> {firebaseConversationID} </>}
                 <h3>firebase conversationID:</h3> {firebaseConversationID}
                 <p>
                    {JSON.stringify(location)}
                 </p> */}
    
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
        )
      }

      
      
      
}


export default Conversations