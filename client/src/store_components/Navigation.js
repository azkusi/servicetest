import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navigation({ serviceContent }){

  var topNavColour;

  if(serviceContent.service_content.page_styling === "choice_1"){
    topNavColour = "nav-1";
}
else if(serviceContent.service_content.page_styling === "choice_2"){
  topNavColour = "nav-2";
    
}
else{
  topNavColour = "nav-3";
}
    return(
      <>
        <nav className={topNavColour}>
          <div>
            <Link style={{ textDecoration: 'none' }} to="/">
              <h2> {serviceContent.service_content.page_title} </h2>
            </Link>
          </div>
          <ul className="nav-link">
          <li>
              <Link style={{ textDecoration: 'none' }} to="/services">
                <h4> Service Info & Pricing </h4>
              </Link>
            </li>
            <li>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/booking-request">
                Availability & Booking
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none' }} to="/messages">
                Send Message
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Navigation
