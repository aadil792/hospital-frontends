import Layout from "../componets/layout/layout";

import { Link } from "react-router-dom";

import "../pages/pages_css/membership.css";
const Membership = () => {
  return (
    <>
      <Layout>
        <div className="matter-div" id="section-1">
          <h1 className="join-div-h1">
          Login to Your Hospital Account for Quick and Easy Access to Care
          </h1>
          <div className="matter-join-para">
            <p className="f-para">
              Enjoy priority healthcare and Personalized
              care  <br></br>
            </p>            
          </div>
          <div className="appinment-button-home" id="appoinment-text">
              <Link to="/register" className="appinment-button-homes">
                <span>Register</span>
              </Link>
            </div> 
          <div className="appinment-button-home" id="appoinment-text">
              <Link to="/user_login" className="appinment-button-homes">
                <span>Patient login</span>
              </Link>
            </div>  
            <div className="appinment-button-home" id="appoinment-text">
              <Link to="/doctor_login" className="appinment-button-homes">
                <span>Doctor Login</span>
              </Link>
            </div>
          <div className="appinment-button-home" id="appoinment-text">
              <Link to="/admin_login_page" className="appinment-button-homes">
                <span>Admin login </span>
              </Link>
            </div>
                    
            
        </div>
      </Layout>
    </>
  );
};

export default Membership;
