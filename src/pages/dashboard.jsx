import { useNavigate } from "react-router-dom";
import "../pages/pages_css/dashboard.css";
const Dashboard_page = () => {
  const Navigation = useNavigate();

  const handle = async() => {
    try {
      const res = await fetch("http://localhost:8000/user/logout" ,{
        method:"get",
      });
      if(res.ok){
        localStorage.removeItem("user");
        Navigation("/")
      }else{
        alert("logout failed");
      }
      
    } catch (error) {
      console.log(error)
    }
   
  };
 



  return (
    <>
        <div className="dashboard-main-div">
          <main>
            {/* main home div image is add in this page */}
            <div className="home-main-div">
              {/* in this div adding contain to the image div */}
              <div className="home-contain-div">
                <p className="p-p">TOTAL HEALTH CARE SOLUTION </p>
                <h1 className="h-1-h">
                  Your Most Trusted <br></br>
                  Health Partner
                </h1>
                <p className="p-1">
                  A repudiandae ipsam labore ipsa voluptatum quidem quae
                  laudantium quisquam<br></br> aperiam maiores sunt fugit,
                  deserunt rem suscipit placeat
                </p>

                <button className="button-home-contain" onClick={handle}>
                  Logout
                </button>
              </div>
              {/* in this div we add image for three divs and add text */}
              <div className="home-section-1">
                <div> </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </main>
        </div>
     
    </>
  );
};

export default Dashboard_page;
