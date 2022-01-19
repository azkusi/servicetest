import { useState, useEffect } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage"
import {config} from '../../firebase';
import {useLocation} from 'react-router-dom';
// import { projectFirestore } from '../firebase/config';


let db;
if (!firebase.apps.length) {
    db = firebase.firestore()
    firebase.initializeApp(config);
  }else {
    db = firebase.app().firestore() // if already initialized, use that one
  }



const useGetBookingMessages = () => {
  const [messages, setMessages] = useState([]);
//   const [unreadMessages, setUnreadMessages] = useState([]);
  const search = useLocation().search;

    // console.log("useGetBookingMessages location and location query..." + JSON.stringify(location) + '' + JSON.stringify(location.query))
    
    useEffect(()=>{
        const searcher = new URLSearchParams(search)
        if(!(searcher.has('bookingref')) || !(searcher.has('provider'))){
            setMessages("DN_EXIST")
            // setUnreadMessages("DN_EXIST")
        }else{
            // var messageList = [];
            // var unreadMessageList = []
            const providerName = new URLSearchParams(search).get('provider')
            const bookingRefID = new URLSearchParams(search).get('bookingref')
            const unsub = db.collection('serviceProviders').doc(providerName).collection('bookingrequests').doc(bookingRefID).collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(async (querySnapshot)=>{
                let messageList = [];
                // let unreadMessageList = []
                console.log("convo hook rerunning")
                querySnapshot.forEach((snapshot) =>{
                    // console.log("snapshot data: " + JSON.stringify(snapshot.data()))
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
                setMessages(messageList)
                // setUnreadMessages(unreadMessageList)
                
                
            }, ()=>{
                // console.log("not resetting messageList")
                // setUnreadMessages("DN_EXIST")
                setMessages("DN_EXIST")
            })
            return () => unsub();
            
        }
    }, [])
    console.log("messages: " + JSON.stringify(messages))

    return messages
}

export default useGetBookingMessages;