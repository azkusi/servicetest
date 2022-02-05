//=========================================================================
//              CLIENT PAGE FOR INITIATING BOOKING REQUEST 
//=========================================================================

import React, { useRef, useState, useEffect } from "react";
import { Alert, Form, Button, Card } from "react-bootstrap";

import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import useGetEvents from './hooks/useGetEvents';
import DateTimePicker from '../../node_modules/react-datetime-picker'

import { useLocation, useHistory } from 'react-router-dom';

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import config from '../firebase';

let db;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  db = firebase.firestore();
}else {
  db = firebase.app().firestore() // if already initialized, use that one
}

function BookingRequest ({ serviceContent }) {
  const [success, setSuccess] = useState(null)
  const nameRef = useRef()
  const messageRef = useRef()
  const emailRef = useRef()
  const serviceRef = useRef()
  const notesRef = useRef()
  const provider_events = useGetEvents(serviceContent.site_name)

  const [option, setOption] = useState(null)

  const [serviceObjectRequested,setServiceObjectRequested] = useState(null)

  const offerred_services = serviceContent.service_content.services
  const [initialView, setInitialView] = useState("timeGridWeek")
  const [initialDate, setInitialDate] = useState(new Date())
  const [date, setDate] = useState(new Date());
  const [bookingDate, setBookingDate] = useState(new Date())
  const [bookingDateSelected, setBookingDateSelected] = useState(null)
  const [service_requested, setService_Requested] = useState("");
  const { pathname, hash, key } = useLocation();
  const history = useHistory()

  const today = new Date()


  const calendarRef = useRef()

  // useEffect(() => {
  //   // if not a hash link, scroll to top
  //   console.log("pathname is: " + pathname)
  //   if (hash === '') {
  //     window.scrollTo(0, 0);
  //   }
  //   // else scroll to id
  //   else {
  //     setTimeout(() => {
  //       const id = hash.replace('#', '');
  //       const element = document.getElementById(id);
  //       if (element) {
  //         element.scrollIntoView({behavior: "smooth"});
  //       }
  //     }, 0);
  //   }
  // }, [pathname, hash, key]); // do this on route change
  


  useEffect(()=>{
    console.log("services: " + JSON.stringify(serviceContent.service_content.services))
    var i = 0;
    if(offerred_services){
      console.log("running if in useEffect")
      for(i=0; i< offerred_services.length; i++){
          if(offerred_services[i].service_name === service_requested){
              setServiceObjectRequested(offerred_services[i])
          }
      }  
  }
    
}, [service_requested])
 
 
  async function onFormSubmit (e){
    e.preventDefault();
    const nameSent = nameRef.current.value;
    const emailSent = emailRef.current.value
    const messageSent = messageRef.current.value
    const serviceChosen = serviceRef.current.value
    const serviceNotes = notesRef.current.value
    console.log("Name: " + nameSent)
    console.log("Email: " + emailSent)
    console.log("Message: " + messageSent)
    
    try{
      console.log("service_requested is: " + service_requested)
      console.log("offered services are: " + JSON.stringify(serviceObjectRequested))
      if(bookingDateSelected === null){
        alert("Please select a date")
        return null
      }else{
        if(service_requested === null || service_requested === ""){
          alert('Please select a service')
          return null;
        }
        console.log("serviceRequested object: " + JSON.stringify(serviceObjectRequested))
        const currentTime = Date.now()
        const bookingref = db.collection('serviceProviders').doc(serviceContent.site_name).collection('bookingrequests').doc()
        const bookingrefID = bookingref.id

        const startTime = new Date(bookingDate.toISOString())
        let service_length = parseFloat(serviceObjectRequested.duration);
        var addMlSeconds = 60 * 60 * 1000 * service_length;
        const endTime = new Date(startTime.getTime() + addMlSeconds)

        console.log("service length is: " + service_length)
        bookingref.set({
          "last_message_sent": messageSent, "last_message_sent_by": "client", 
          "client_name": nameSent, "client_email": emailSent, 
          "service_requested" : serviceChosen, "service_notes": serviceNotes, 
          "timestamp": currentTime, "booking_status": "pending", 
          "provider_read_status": "unread",
          "startTime": bookingDate.toISOString(), "endTime": endTime.toISOString()
        }).then(()=>{
          db.collection('serviceProviders').doc(serviceContent.site_name).collection('bookingrequests').doc(bookingrefID).collection('messages')
          .add({"message": messageSent, "client_name": nameSent, 
                "client_email": emailSent, "message_sent_by": "client", 
                "timestamp": currentTime, "provider_read_status": "unread"
              }).then(()=>{
                messageRef.current.value = ''
                setSuccess(true)
                return null
              })
          
        })
        // get booking_request_notifications array, push new notification and bookingrequest docID the notification came from not the messages docID
        
        const bookingRequestNotifRef = db.collection('serviceProviders').doc(serviceContent.site_name)
        bookingRequestNotifRef.get().then(async (doc)=>{
          let booking_requests_notif_array = doc.data().booking_requests_notifications
          let temp_booking_notif_array = booking_requests_notif_array.push(bookingrefID)
          await bookingRequestNotifRef.update({"booking_requests_notifications" : firebase.firestore.FieldValue.arrayUnion(...booking_requests_notif_array)}) 
        })
      }
            
    }
    catch(err){
      console.log("error is: " + err)
      setSuccess(false)
    }
}

if(success === null){
  return (
    <>
      <div>
        <h1>Send a Booking Request</h1> 
      </div>

      <div>
      <FullCalendar
            plugins={[ dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin ]}
            initialView={initialView}
            events={provider_events}
            initialDate={initialDate}
            ref={calendarRef}
            customButtons={
              {
                changeToMonthView: {
                  text: "Month",
                  click: function () {
                    calendarRef.current.getApi().changeView("dayGridMonth", date.date);
                  }
                }, changeToWeekView: {
                  text: "Week",
                  click: function(){
                    calendarRef.current.getApi().changeView("timeGridWeek", date.date);
                    }
                  },
                  changeToTodayView: {
                    text: "Today",
                    click: function(){
                      calendarRef.current.getApi().changeView("timeGridDay", today);
                      }
                    }
                  
              }
          }
            dateClick={(date)=>{
              console.log("Full Calendar API date is: " + date.date + " type is: " + typeof(date.date))
              console.log("date.dateStr is: " + date.dateStr + " type is: " + typeof(date.dateStr))
              console.log("date.date is: " + date.date.toDateString())     
              setDate(date.date)
              if(calendarRef.current.getApi().view.type === "timeGridDay"){
                const elementToScrollTo = document.getElementById('sendBookingRequest')
                elementToScrollTo.scrollIntoView({behavior: "smooth"})
                // history.push('#sendBookingRequest')
              }else{
                calendarRef.current.getApi().changeView("timeGridDay", date.date);
              }
              //console.log("current view is: " + JSON.stringify(calendarRef.current.getApi().view))
           }}

           
           headerToolbar={{
            center: "title",
            left: "changeToTodayView changeToWeekView changeToMonthView",
            right: "prev,next"
            
          }}
          />
      </div>
      <div>
      <Card>
        <Card.Title>
          Send Booking Request
        </Card.Title>
      <Card.Body>
        <Form id="sendBookingRequest" onSubmit={onFormSubmit}>
          <Form.Group id="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} placeholder="name" required />
          </Form.Group>

          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} placeholder="email" required />
          </Form.Group>

          <Form.Label>Select Service</Form.Label>
          <Form.Control
           aria-label="Select Service"
           as="select"
            value={service_requested}
            onChange={e => {
              console.log("e.target.value", e.target.value);
              setOption(e)
              setService_Requested(e.target.value)
            }
          }
           >
          <option ref={serviceRef} value=""></option>
          {offerred_services.map((item, index)=>{
            return(
              <option ref={serviceRef} value={item.service_name}>{item.service_name}</option>
            )
            
          })}
          </Form.Control>

          
          <Form.Group id="notes">
            <Form.Label>Extra Notes</Form.Label>
            <Form.Control type="text" ref={notesRef} placeholder="Type message" />
          </Form.Group>

          <br/>

          <DateTimePicker
            onChange={(value)=>{
              setBookingDate(value)
              setBookingDateSelected(true)}}
            value={bookingDate}
            disableClock={true}
          />

          <br/>
          
          <Form.Group id="message">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" ref={messageRef} placeholder="Type message" />
          </Form.Group>
          <Button type="submit">Submit Booking Request</Button>

        </Form>
        </Card.Body>
        </Card>
      </div>
      </>
      //
      //start working on cloud function to send email to serviceProvider and to client

      //on serviomain add firebase function code to retrieve messages and set notifications
      //for each convo retrieve last message sent, whether unread by provider or not and all messages from convo

  )
}
else{
  return (
    <div>
      {/* {success && <h2>Successfully sent</h2>} */}

      {success ? <Alert variant="success">
        Your message was successfully sent to {serviceContent.service_content.page_title}
        <br/>
        We will send you an email when {serviceContent.service_content.page_title} responds to your message.
      </Alert> :
       <Alert variant="danger">
       Error occurred, please contact support
       <br/>
     </Alert>} 
    </div>
    );
}
    
  }
   
  export default BookingRequest;