import React, { useState, useRef, useEffect } from "react";

import {config} from '../firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import { Spinner } from "react-bootstrap";

let db;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  db = firebase.firestore();
}else {
  db = firebase.app().firestore() // if already initialized, use that one
}


export default function Gallery({serviceContent}) {
 
    const [selectedImg, setSelectedImg] = useState(null);
    // const [providerName, setProviderName] = useState(null)
    const providerName = serviceContent.site_name



    // useEffect(()=>{
        

    // }, [])

    if(providerName === null){
        return(
          <Spinner animation="border"/>
        )
    }else{
        return (
          <>
          <h2> Gallery </h2>
          {(serviceContent.service_content.gallery_images.length === 0) ? 
            <h2>No Images Added Yet</h2>
            :
            <div className="Gallery">
              

              

              {providerName && <ImageGrid provider_Name={providerName} setSelectedImg={setSelectedImg} />}
              { selectedImg && (
                <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
              )}
            </div>
          }
          </>
          );

    }


  

}