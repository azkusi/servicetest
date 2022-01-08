import { useState, useEffect } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage"
import {auth, config} from '../../firebase';
// import { projectFirestore } from '../firebase/config';


let db;
let projectFirestore;
let timestamp;
let admin_data;

if (!firebase.apps.length) {
    db = firebase.firestore()
    firebase.initializeApp(config);
    projectFirestore = firebase.firestore();
    timestamp = firebase.firestore.FieldValue.serverTimestamp;
  }else {
    db = firebase.app().firestore() // if already initialized, use that one
    projectFirestore = firebase.app().firestore();
    timestamp = firebase.firestore.FieldValue.serverTimestamp;

  }

const useFirestore = (provider_name) => {
  const [docs, setDocs] = useState([]);
  

  useEffect(() => {
    
    const unsub = projectFirestore.collection("serviceProviders").doc(provider_name)
    .onSnapshot(doc => {
        let documents;
        documents = doc.data().gallery_images;
        setDocs(documents);
    });
    return () => unsub();
    
  }, [provider_name]);

  

  return { docs };
}

export default useFirestore;