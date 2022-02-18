
import React, { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import mixpanel from 'mixpanel-browser';



function HomePage({ serviceContent }){


    const search = useLocation().search;
    let subdomains = window.location.hostname.toString()


    useEffect(()=>{
        const searcher = new URLSearchParams(search)
        if( !(searcher.has('source')) ){
            mixpanel.init('a237f239cb8cd02fafc64614c70bb36b')
            if(subdomains.includes('localhost')){
              mixpanel.track('dev_website_page_visit_organic')
            }else{
              mixpanel.track('website_page_visit_organic')
            }
        }else{
            mixpanel.init('a237f239cb8cd02fafc64614c70bb36b')
            if(subdomains.includes('localhost')){
                mixpanel.track('dev_website_page_visit_source_admin')
            }else{
                mixpanel.track('website_page_visit_source_admin')
            }
        }
    }, [])


    const imgUrl = serviceContent.service_content.page_background_image.url
    const text_colour = serviceContent.service_content.title_tagline_colour.hex_code


    console.log("background image URL:" + imgUrl)


    return(
        
        <div style={{"textAlign": "center"}}>
        <div style={{"background-image": `url(${imgUrl})`,
        "background-repeat": "no-repeat", "background-attachment": "fixed", "background-size": "100% 100%",   
        "min-height": "85%", "max-height": "85%", "opacity": "0.4", "min-width": "1024px", "width": "100%",
        "height": "auto", "position": "fixed",
        "bottom": "0","left": "0"}}>
        </div>
        <h1 style={{"font-weight": "bold", "color": text_colour, "position": "absolute", "top": "50%", "left": "20%", "z-index": "10"}}> 
        {serviceContent.service_content.page_title}
        </h1>
            <br></br>
        <h4 style={{"font-weight": "bold", "color": text_colour, "position": "absolute", "top": "58%", "left": "20%", "z-index": "10"}}> {serviceContent.service_content.tagline}</h4>

        </div>
            )
}

export default HomePage