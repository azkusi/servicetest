//==================================================================
//            HOSTNAME RETRIEVAL HOOK
//------------------------------------------------------------------
//   Hook uses the hostname in the window to search for the provider's 
// store content to use as props throughout the rest of the application
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



const useGetHostName = () => {
  const hostName  = window.location.hostname
  const [hostToSend, setHostToSend] = useState(null)

  

  function changeHostName() {
    setHostToSend(hostName);
}
    useEffect(()=>{
        changeHostName()

    }, [hostName])
    console.log("hostname is: " + hostName)

    return hostToSend
}

export default useGetHostName;