import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import * as themes from '../themes.json';
function Navigation({ serviceContent }){
  const page_theme = serviceContent.service_content.page_theme.theme_name

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
        <nav style={{"background-color": themes.themes[page_theme].colors.background, "height": "15vh"}}>
          <div>
            <Link style={{ textDecoration: 'none', "color": themes.themes[page_theme].colors.text, "font-weight": "bold" }} to="/">
              {serviceContent.service_content.page_title}
            </Link>
          </div>
          <ul className="nav-link">
          <li style={{"padding-left": "15px", "padding-right": "15px"}}>
              <Link style={{ textDecoration: 'none', "color": themes.themes[page_theme].colors.text, "font-weight": "bold" }} to="/services">
                Service Info & Pricing
              </Link>
            </li>
            <li style={{"padding-left": "15px", "padding-right": "15px"}}>
              <Link style={{ textDecoration: 'none', "color": themes.themes[page_theme].colors.text, "font-weight": "bold" }} to="/booking-request">
                  Availability & Booking
              </Link>
            </li>
            <li style={{"padding-left": "15px", "padding-right": "15px"}}>
              <Link style={{ textDecoration: 'none', "color": themes.themes[page_theme].colors.text, "font-weight": "bold" }} to="/gallery">
                  Gallery              
              </Link>
            </li>
            <li style={{"padding-left": "15px", "padding-right": "15px"}}>
              <Link style={{ textDecoration: 'none', "color": themes.themes[page_theme].colors.text, "font-weight": "bold" }} to="/messages">
                  Send Message
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Navigation
