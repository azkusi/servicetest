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
          <h2> {serviceContent.service_content.page_title} </h2>
          <ul className="nav-link">
            {/* <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link to="/bookings">
                Bookings
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                Gallery
              </Link>
            </li> */}
          </ul>
        </nav>
      </>
    );
}

export default Navigation
