

function BackgroundImage({ serviceContent }){
    var backgroundImage;
    var frontPageTitle;
    var frontPageTagline;

    console.log("service content:" + JSON.stringify(serviceContent))

    if(serviceContent.service_content.page_styling === "choice_1"){
        backgroundImage = "background-image-1";
        frontPageTitle = "frontPageTitle-1";
        frontPageTagline = "frontPageTagline-1";
    }
    else if(serviceContent.service_content.page_styling === "choice_2"){
        backgroundImage = "background-image-2";
        frontPageTitle = "frontPageTitle-2";
        frontPageTagline = "frontPageTagline-2";
    }
    else{
        backgroundImage = "background-image-3";
        frontPageTitle = "frontPageTitle-3";
        frontPageTagline = "frontPageTagline-3";
    }

    return(
        <div className={backgroundImage}>
            {/* <h3 style={{color: "white", fontWeight:"bold"}}> Service Provider Name goes here and tagline </h3> */}
            <h1 className={frontPageTitle}> {serviceContent.service_content.page_title}</h1>
            <br></br>
            <h3 className={frontPageTagline}> {serviceContent.service_content.description}</h3>
        </div>
        // <style>
        //     body {
        //         background-image: url('img_girl.jpg');
        //         background-repeat: no-repeat;
        //         background-attachment: fixed;
        //         background-size: 100% 100%;
        //     }

        // </style>
    )
}

export default BackgroundImage