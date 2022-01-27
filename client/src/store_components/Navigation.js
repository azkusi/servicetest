import React, {useEffect, useState} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import * as themes from '../themes.json';
import useWindowSize from '../store_pages/hooks/useWindowSize';
import {Dropdown, DropdownButton, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { width } from '@mui/system';

function Navigation({ serviceContent }){
  const [screenW, setScreenW] = useState(375)
  const {width, height} = useWindowSize()
  const page_theme = serviceContent.service_content.page_theme.theme_name

  useEffect(()=>{
    setScreenW(width)
  }, [width, height])

  if(screenW < 1024){
    return(
      <>
        <Navbar className='topnav' style={{"background-color": themes.themes[page_theme].colors.background, "height": "15vh"}}>
          <Link style={{ textDecoration: 'none', "color": themes.themes[page_theme].colors.text, "font-weight": "bold" }} to="/">
            <div>
                <h1>{serviceContent.service_content.page_title}</h1>
            </div>
          </Link>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse style={{"z-index": "20"}} id="navbar-dark-example">
            <Nav className='topnav-right'>
              <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menu"
              >
                {/* <DropdownButton id="menu" title="Menu"> */}
                <NavDropdown.Item style={{"color": "black"}} href="/services">Services</NavDropdown.Item>
                <Dropdown.Divider/>
                <NavDropdown.Item style={{"color": "black"}} href="/booking-request">Send Booking Request</NavDropdown.Item>
                <Dropdown.Divider/>
                <NavDropdown.Item style={{"color": "black"}} href="/messages">Send Message</NavDropdown.Item>
                <Dropdown.Divider/>
                <NavDropdown.Item style={{"color": "black"}} href="/gallery">Gallery</NavDropdown.Item>
                {/* </DropdownButton> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
  else{
    return(
      <>
        <div className='topnav' style={{"background-color": themes.themes[page_theme].colors.background, "height": "15vh"}}>
          <Link style={{ textDecoration: 'none', "color": themes.themes[page_theme].colors.text, "font-weight": "bold" }} to="/">
          <div>
              <h1>{serviceContent.service_content.page_title}</h1>
          </div>
          </Link>
          <div className='topnav-right'>
          {/* <li style={{"padding-left": "15px", "padding-right": "15px", "listStyle": "none"}}> */}
              <Link style={{ textDecoration: 'none', "color": themes.themes[page_theme].colors.text, "font-weight": "bold" }} to="/services">
                Service Info & Pricing
              </Link>
            {/* </li> */}
            {/* <li style={{"padding-left": "15px", "padding-right": "15px", "listStyle": "none"}}> */}
              <Link style={{ textDecoration: 'none', "color": themes.themes[page_theme].colors.text, "font-weight": "bold" }} to="/booking-request">
                  Availability & Booking
              </Link>
            {/* </li> */}
            {/* <li style={{"padding-left": "15px", "padding-right": "15px", "listStyle": "none"}}> */}
            {/* </li> */}
            {/* <li style={{"padding-left": "15px", "padding-right": "15px", "listStyle": "none"}}> */}
              <Link style={{ textDecoration: 'none', "color": themes.themes[page_theme].colors.text, "font-weight": "bold" }} to="/messages">
                  Send Message
              </Link>
            {/* </li> */}
            <Link style={{ textDecoration: 'none', "color": themes.themes[page_theme].colors.text, "font-weight": "bold" }} to="/gallery">
                  Gallery              
            </Link>
          </div>
        </div>
      </>
    );
  }
    
}

export default Navigation
