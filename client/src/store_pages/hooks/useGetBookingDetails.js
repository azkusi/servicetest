import { useState, useEffect } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage"
import {config} from '../../firebase';
import {useLocation} from 'react-router-dom';


let db;
if (!firebase.apps.length) {
    db = firebase.firestore()
    firebase.initializeApp(config);
  }else {
    db = firebase.app().firestore() // if already initialized, use that one


  }


const useGetBookingDetails = () => {
    const [bookingDetails, setBookingDetails] = useState(null);
    const search = useLocation().search;
  

    useEffect(()=>{
        const searcher = new URLSearchParams(search)
        if(!(searcher.has('bookingref')) || !(searcher.has('provider'))){
            setBookingDetails("DN_EXIST")
        }else{
            const providerName = new URLSearchParams(search).get('provider')
            const bookingID = new URLSearchParams(search).get('bookingref')
                
            const unsub =  db.collection('serviceProviders').doc(providerName).collection('bookingrequests').doc(bookingID)
            .onSnapshot((doc) => {
                setBookingDetails(doc.data())
            }, ()=>{
                setBookingDetails("DN_EXIST")
            });
            
            return () => unsub();
            
            
        }
}, [])

  

  return bookingDetails
}

export default useGetBookingDetails;