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

const useServiceList = (providerName) => {
//   const [services, setServices] = useState([]);
//   const [categories, setCategories] = useState([]);
    console.log("admin_data in useServicList: " + providerName)
    const [services, setServices] = useState(null)
    console.log("serviceList render ran again...")
  

//   useEffect(() => {

    useEffect(()=>{
        const unsub =  db.collection("serviceProviders").doc(providerName)
        .onSnapshot((doc) => {
            let servicesFB;
            let serviceCategoriesFB
            return new Promise((resolve, reject)=>{
                servicesFB = doc.data().services  
                serviceCategoriesFB = doc.data().service_categories       
                console.log("useEffect serviceList ran again...")
                resolve({"services": servicesFB, "serviceCategories": serviceCategoriesFB})
            }).then(async (result)=>{
                return new Promise((resolve, reject)=>{
                    let servicesArray = [];
                    let serviceSubCategories = result.services
                    let serviceCategories = result.serviceCategories

                    
                    var i;
                    var j;
                    var serviceHolder;
                    if(serviceSubCategories && serviceCategories){

                        console.log("services and categories set")
                        for(i=0; i < serviceCategories.length; i++){
                            //set key in services object i.e. {main categoryM: ""}
                            var servicesB = {}
                            serviceHolder = []
                            for(j=0; j < serviceSubCategories.length; j++){
                                console.log("service category: " + serviceCategories[i] + " service name: " + JSON.stringify(serviceSubCategories[j]))
                                if (serviceSubCategories[j].main_category === serviceCategories[i].toString()){
                                    serviceHolder.push(serviceSubCategories[j])
                                }
                                if(j === serviceSubCategories.length -1){
                                    //i.e. {maincategory1 : [subcategory1, subcategory2...subcategoryN]..., maincategoryM: []}
                                    servicesB[ serviceCategories[i] ] = serviceHolder
                                    servicesArray.push(servicesB)
                                }
                            }
                            if(i === serviceCategories.length - 1){
                                console.log("Services inside loop: " + JSON.stringify(servicesB))
                                console.log("ServiceReady has been set to true")
                                // setServices(servicesB)
                                // setServicesReady(true)
                                resolve(servicesArray)
                            }
                            
                        }
                    }
                        console.log("numbers is about to change/cause rerender...")
                        // setNumber((value + 10));
                })
            }).then((result)=>{
                setServices(result)
            })
                

        });
    return () => unsub();
}, [])


    // const unsub =  db.collection("serviceProviders").where("email", "==", provider_email)
    // .onSnapshot(doc => {
    //     let servicesList;
    //     let categoryList;

    //     servicesList = doc.data().services;
    //     categoryList = doc.data().services;

    //     setServices(servicesList);              
    //     setCategories(categoryList);
    //     console.log("serviceList subscription ran...")
    // });
    // return () => unsub();
        
    

    
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
//   }, []);

  

  return services
}

export default useServiceList;