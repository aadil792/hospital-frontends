import Layout from "../componets/layout/layout";
import "../pages/pages_css/home.css"; // Correct relative path
// import drreddy from "../assets/drreddy.png";
// import cipla from "../assets/ciplas.png";
// import mankind from "../assets/mankind.png";
// import himalaya from "../assets/himalaya.png";
import { Link } from "react-router-dom";
const Home_p = () => {
  return (
    <>
      <Layout>
        <div className="home-main-page-div">
          <div className="hosiptal-novena-h1-main">
            <h1>Hosiptal Novena</h1>
            <p>"Looking for quality healthcare? We’re here for you!"</p>
          </div>
          {/* <div className="home-page-footer ">
            <h2 className="titlecolor">Partners who support us</h2>
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
            </div> */}
          {/* </div> */}
        </div>
      </Layout>
    </>
  );
};

export default Home_p;
