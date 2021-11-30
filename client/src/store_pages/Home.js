import "../styles.css";

const Home = ({ serviceContent }) => {
    return (
      <div className="service-content">
          <h1> Welcome to {serviceContent.service_provider_name} store </h1>
       <h2> Service Provider's name is: {serviceContent.service_provider_name} </h2>
       <br></br>
       <h2>Store Title: {serviceContent.service_content.page_title}</h2>
       <h2>Store Description: {serviceContent.service_content.description}</h2>
       <img src={serviceContent.service_content.display_image} alt="" className="photo"/>
      </div>
    );
  }
   
  export default Home;