import React, { useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';

import useServiceList from './hooks/useServiceList'

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {config} from '../firebase';
import { Card, Button, Alert, Spinner, ListGroup, Modal, Form } from "react-bootstrap";



let db;
  var store_name;
  var loaded;

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
    db = firebase.firestore();
  }else {
    db = firebase.app().firestore() // if already initialized, use that one
  }


function Services({ serviceContent }){
    console.log("Calendar rerendered")
    console.log("admin_data in Calendar: " + serviceContent.site_name)
    const services = useServiceList(serviceContent.site_name)

    
    if(serviceContent.service_content.service_categories.length !== 0){
        if(services === null){
            return(
                <>
                    <Spinner animation="border" />
                </>
                
            )
        }
        else{
            return(
        
                <>
                    
                    <div>
                        {/* {console.log("" + JSON.stringify(services))} */}
                        {services.map((item, index)=>{
                            return(
                                <>
                                <Card>
                                    {/* <Card.Img> </Card.Img> */}
                                    <Card.Header>
                                        {Object.keys(item)[0]} 
                                        <br/>
                                        
                                    </Card.Header>
                                    
                                    <ListGroup variant="flush">
                                        {Object.values(item)[0].map((service, i) =>{
                                            return(
                                                <>
                                                <Card>
                                                    {/* <Button onClick={deleteService(item.service_name)}> Delete Service </Button> */}
                                                <ListGroup.Item>
                                                    
                                                    <Card.Title> 
                                                        {service.service_name}
                                                        <br/>
                                                    </Card.Title>
                                    
                                                        <br/>
                                                    <Card.Subtitle> 
                                                        Price: {service.price}
                                                    </Card.Subtitle>
                                                    <br/>
                                                    <Card.Subtitle>
                                                    Duration: {service.duration}
                                                    </Card.Subtitle>
                                                
                                                    <br/>
                                                    <Card.Text>
                                                        {service.description}
                                                    </Card.Text>
                                                    </ListGroup.Item>
                                                
                                                </Card>
                                                <br/>
                                                </>
                                            )
                                        })}
                                    </ListGroup>
                                </Card>
                                <br/>
                                <br/>
                                </>
                            )
                            
                        })}
                        
                    </div>
                </>
                );
        }
    
    }
    else{
        return(
            <h2>No Services Added Yet</h2>
        )
    }

    

        
    }

export default Services
