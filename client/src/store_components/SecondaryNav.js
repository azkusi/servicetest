import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function SecondaryNav({ serviceContent }){
    
    var secondaryNavColour;

  if(serviceContent.service_content.page_styling === "choice_1"){
    secondaryNavColour = "nav-1a";
}
else if(serviceContent.service_content.page_styling === "choice_2"){
    secondaryNavColour = "nav-2a";
    
}
else{
    secondaryNavColour = "nav-3a";
}

    return(
      <>
        <nav className={secondaryNavColour}>
          <ul className="nav-link">
            <li>
              <Link to="/">
                View Services
              </Link>
            </li>
            <li>
              <Link to="/calendar">
                View Availability
              </Link>
            </li>
            <li>
              <Link to="/booking-request">
                Send Booking Request
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/messages">
                Send Message
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default SecondaryNav
