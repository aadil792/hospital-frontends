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
        </div>
      </Layout>
    </>
  );
};

export default Home_p;
