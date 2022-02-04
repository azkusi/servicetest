

function BackgroundImage({ serviceContent }){
    var backgroundImage;
    var frontPageTitle;
    var frontPageTagline;

    const imgUrl = serviceContent.service_content.page_background_image.url
    const text_colour = serviceContent.service_content.title_tagline_colour.hex_code


    console.log("background image URL:" + imgUrl)

    // if(serviceContent.service_content.page_styling === "choice_1"){
    //     backgroundImage = "background-image-1";
    //     frontPageTitle = "frontPageTitle-1";
    //     frontPageTagline = "frontPageTagline-1";
    // }
    // else if(serviceContent.service_content.page_styling === "choice_2"){
    //     backgroundImage = "background-image-2";
    //     frontPageTitle = "frontPageTitle-2";
    //     frontPageTagline = "frontPageTagline-2";
    // }
    // else{
    //     backgroundImage = "background-image-3";
    //     frontPageTitle = "frontPageTitle-3";
    //     frontPageTagline = "frontPageTagline-3";
    // }
    

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

export default BackgroundImage