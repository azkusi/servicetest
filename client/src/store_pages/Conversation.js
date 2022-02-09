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

function Conversations({match, location}) {
    const search = useLocation().search;
    const {width, height} = useWindowSize()
    const [screenW, setScreenW] = useState(0.7*width)

    const msgStyling = {"client": {"padding": "5px", "border-radius": "5px", "background-color": "#0574DD", "color": "white", "maxWidth": `${0.8*screenW}px`, "margin-right":"5px", "margin-left": "auto"},
    "provider": {"padding": "5px", "border-radius": "5px", "background-color": "white", "color": "black", "maxWidth": `${0.8*screenW}px`, "margin-left":"5px", "margin-right": "auto"} }

    const provider_Name = new URLSearchParams(search).get('provider')

    const messages = useGetConvo()
    const [redirect, setRedirect] = useState(false);
    const [finishedLoading, setFinishedLoading] = useState(false)
    const messageRef = useRef()
    var messageList = [];

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
          <div style={{"maxHeight": height}}>   
          <ReturnHome/>
            <div style={{"display": "grid", "place-items": "center", "align-content": "center", "paddingLeft": "5px"}}>
                {/* <h2 style={{"position": "absolute", "top": "0", "padding-bottom": "5px"}}> Your Messages</h2> */}

                {messages ?
                <>
                  <Card style={{"width": `${screenW}px`, "height": `${0.7*height}px`, "position": "absolute", "maxHeight": `${0.7*height}px`, "overflowY": "auto", "top":"10%" }}>

                        {messages.map((item, index)=>{
                        return(
                          <>
                          <br/>
                          <div style={msgStyling[item.message_sent_by]}>
                            <li key={index} style={{"listStyle": "none"}}>
                            {item.message_sent_by === 'client' ? <h5>you:</h5> : <h5>{provider_Name}:</h5> }
                                <h4>
                                    {item.message}
                                </h4>
                            </li>
                            </div>
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
                </>
                :
                <Spinner animation='border'/>
                }
                 
            </div>
            </div>
        )
      }

      
      
      
}


export default Conversations