//==================================================================
//            CALENDAR EVETNS RETRIEVAL HOOK
//------------------------------------------------------------------
//   Hook searches for the events relating to this service provider
// in firestore, using the providerName prop passed to it 
// to enable to help search firestore for the correct events
//==================================================================



import { useState, useEffect } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage"
import {config} from '../../firebase';
// import { projectFirestore } from '../firebase/config';


let db;
if (!firebase.apps.length) {
    db = firebase.firestore()
    firebase.initializeApp(config);
  }else {
    db = firebase.app().firestore() // if already initialized, use that one


  }



const useGetEvents = (providerName) => {
  const [events, setEvents] = useState([]);

  

//   useEffect(() => {

    useEffect(()=>{
        
        const unsub =  db.collection('serviceProviders').doc(providerName).collection('events')
        .onSnapshot(async (querySnapshot)=>{
            let event_list = []
            querySnapshot.forEach((doc)=>{
                if(doc.data().recurrence_type === "none"){
                    event_list.push({
                                "id": doc.id,
                                "title": "UNAVAILABLE", 
                                "start": doc.data().event_start, 
                                "end": doc.data().event_end,
                                "startStr": doc.data().event_start_datetimeISO, 
                                "endStr": doc.data().event_end_datetimeISO,
                                "notes": doc.data().event_notes,
                                "recurrence_type": "none"
                            })
                }else{
                    if(doc.data().endTime === null){
                        //omit end time from object
                        event_list.push({
                                "id": doc.id,
                                "title": "UNAVAILABLE", 
                                "notes": doc.data().event_notes,
                                "daysOfWeek": doc.data().daysOfWeek,
                                "startTime": doc.data().startTime,
                                "endTime": doc.data().endTime,
                                "startRecur": doc.data().startRecur,
                                "recurrence_type": "simple_recurrence"
                            })
                    }else{
                        event_list.push({
                                "id": doc.id,
                                "title": "UNAVAILABLE", 
                                "notes": doc.data().event_notes,
                                "daysOfWeek": doc.data().daysOfWeek,
                                "startRecur": doc.data().startRecur,
                                "endRecur": doc.data().endRecur,
                                "startTime": doc.data().startTime,
                                "endTime": doc.data().endTime,
                                "recurrence_type": "simple_recurrence"
                            })
                    }
                    
                }
                
                
            })
            setEvents(event_list)
            
        })
        // , ()=>{
        //     console.log("not resetting events_list")
        //     setEvents("DN_EXIST")
        // })
        return () => unsub();

    }, [])
    console.log("events: " + JSON.stringify(events))

    return events
}

export default useGetEvents;