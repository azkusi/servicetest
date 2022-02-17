import React, { useState, useRef, useEffect } from "react";

import {config} from '../firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import { Spinner } from "react-bootstrap";

import mixpanel from 'mixpanel-browser';

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
    
    let subdomains = window.location.hostname.toString()



    useEffect(()=>{
      mixpanel.init('a237f239cb8cd02fafc64614c70bb36b')
      if(subdomains.includes('localhost')){
        mixpanel.track('dev_client_side_gallery_page_visit')
      }else{
        mixpanel.track('client_side_gallery_page_visit')
      }
    }, [])


    if(providerName === null){
        return(
          <Spinner animation="border"/>
        )
    }else{
        return (
          <>
          <h1> Gallery </h1>
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