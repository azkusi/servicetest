import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Advertisements({ serviceContent }){
  const ads = [
    {"image": "Nike", "url": ""}, 
    {"image": "Adidas", "url": ""}, 
    {"image": "PLT", "url": ""},
    {"image": "Mac Make up", "url": ""},
    {"image": "Missguided", "url": ""},
    {"image": "Boohoo.com", "url": ""},
    {"image": "Ugg", "url": ""},
    {"image": "Calvin Klein", "url": ""},
    {"image": "Chanel Perfume", "url": ""},
    {"image": "Prada Perfume", "url": ""}
  ] 

  const [adchoice, setAdChoice] = useState(null)
    
useEffect(()=>{
  const randomNumber = Math.floor(Math.random() * 11);
  if(adchoice !== null){
    setAdChoice(ads[randomNumber])
  }

}, [])

  if(adchoice === null || adchoice === undefined){
    return(
        <h5> </h5>
    )
  }
  else{
    console.log("adchoice" + JSON.stringify(adchoice))
    return(
        <>
          <div className="ad-box">
            Ad box
            {adchoice.image}
            {adchoice.url}
          </div>
        </>
      );
  }
}

export default Advertisements
