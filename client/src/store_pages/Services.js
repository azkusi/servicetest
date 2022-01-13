import React, { useState, useEffect } from "react";
import { Card, Button, Alert, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import 'react-pro-sidebar/dist/css/styles.css';
import {auth, config} from '../firebase';

let db;
  var store_name;
  var loaded;

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
    db = firebase.firestore();
  }else {
    db = firebase.app().firestore() // if already initialized, use that one
  }


export default function Services({serviceContent}) {
    const [error, setError] = useState("")
    const [servicesReady, setServicesReady] = useState(false)
    const [loggedIn, setIsloggedIn] = useState(true)
    const history = useHistory()
    const [serviceCategories, setServiceCategories] = useState(null)
    const [serviceSubCategories, setServiceSubCategories] = useState(null)
    //setServices(services => ({...services, ...servicesB}))
    const [services, setServices] = useState(null)


    useEffect(()=>{
        dataReadyCheck().then(()=>{
            var servicesB = {}
            var i;
            var j;
            var serviceHolder;
            for(i=0; i < serviceCategories.length; i++){
                //set key in services object i.e. {main categoryM: ""}
                serviceHolder = []
                for(j=0; j < serviceSubCategories.length; j++){
                    console.log("service category: " + serviceCategories[i] + " service name: " + JSON.stringify(serviceSubCategories[j]))
                    if (serviceSubCategories[j].main_category === serviceCategories[i].toString()){
                        serviceHolder.push(serviceSubCategories[j].service_name)
                    }
                    if(j === serviceSubCategories.length -1){
                        //i.e. {maincategory1 : [subcategory1, subcategory2...subcategoryN]..., maincategoryM: []}
                        servicesB[ serviceCategories[i] ] = serviceHolder
                    }
                }
                if(i === serviceCategories.length - 1){
                    console.log("Services inside loop: " + JSON.stringify(services))
                    console.log("ServiceReady has been set to true")
                    setServices(servicesB)
                    setServicesReady(true)
                }
                
            }
        }, ()=>{
            history.push('/admin')
        })
        
        
    }, [serviceSubCategories, serviceCategories])


    function dataReadyCheck(){
      return new Promise((resolve, reject)=>{
        setServiceCategories(serviceContent.service_content.service_categories)
        setServiceSubCategories(serviceContent.service_content.services)
        if(serviceSubCategories!== null && serviceCategories !== null){
          console.log("Servicesubcategories: " + JSON.stringify(serviceSubCategories))
          console.log("Servicecategories: " + JSON.stringify(serviceCategories))
          resolve()
        }
      })
    }


    if(servicesReady === false){
        // console.log("ServiceReady = false atm")
        return(
            <Spinner animation="border"/>
        )
    }
    else{
        console.log("ServiceReady = true atm")
        console.log("services: " + JSON.stringify(services))


        return (
            <>

            <div>
                <h1> Services page </h1>
                <br></br>

                    <div>
                    {Object.keys(services).map((key, index)=>{
                        console.log("key: " + key)
                        console.log("Services: " + JSON.stringify(services))
                        return(
                            <div>
                                <h3> {key} </h3>
                                <div>
                                    {services[key].map((item, i) =>{
                                        return(<h4> {item} </h4>)
                                    })}
                                </div>
                            </div>
                        )
                    })}
                    </div>

            </div>

            </>
        )
    }
}