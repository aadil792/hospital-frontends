import Layout from "../componets/layout/layout";
import "../pages/pages_css/home.css"; // Correct relative path
import drreddy from "../assets/drreddy.png";
import cipla from "../assets/ciplas.png";
import mankind from "../assets/mankind.png";
import himalaya from "../assets/himalaya.png";
import { Link } from "react-router-dom";
const Home_p = () => {
  return (
    <>
      <Layout>
        <div className="home-main-page-div">
          {/* change this admin login diraction */}
           <div className="appinment-button-home" id="appoinment-text">
            <Link to="/admin_login_page" className="appinment-button-homes">
              <span>admin login </span>
            </Link>
          </div> 
          <div className="appinment-button-home" id="appoinment-text">
            <Link to="/user_login" className="appinment-button-homes">
              <span>Patient login</span>
            </Link>
          </div> 
          <div className="appinment-button-home" id="appoinment-text">
            <Link to="/doctor_register" className="appinment-button-homes">
              <span>Doctor Register</span>
            </Link>
          </div> 
          <div className="appinment-button-home" id="appoinment-text">
            <Link to="/doctor_login" className="appinment-button-homes">
              <span>Doctor Login</span>
            </Link>
          </div> 

          <div className="home-page-footer ">
            <h2 className="titlecolor">
              Partners who support us</h2>
            <p id="supportline">
              Lets know moreel necessitatibus dolor asperiores illum possimus
              sint <br></br>voluptates incidunt molestias nostrum laudantium.
              Maiores porro <br></br> cumque quaerat.
            </p>
            <div class="home-image-container">
              <img
                src={cipla}
                alt=""
                style={{ width: "190px", height: "125px" }}
                id="first"
                className="home-image-logo"
              ></img>
              <img
                src={drreddy}
                alt=""
                style={{ width: "190px", height: "125px" }}
                id="first"
                className="home-image-logo"
              ></img>
              <img
                src={mankind}
                alt=""
                style={{ width: "190px", height: "125px" }}
                id="first"
                className="home-image-logo"
              ></img>
              <img
                src={himalaya}
                alt=""
                style={{ width: "190px", height: "125px" }}
                id="first"
                className="home-image-logo"
              ></img>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home_p;
