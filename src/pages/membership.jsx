import Create_Account from "../componets/account/create";
import Layout from "../componets/layout/layout";
import Login_l from "../componets/login/login";
import "../pages/pages_css/membership.css";
const Membership = () => {
  return (
    <>
      <Layout>
        <div className="matter-div" id="section-1">
          <h1 className="join-div-h1">
            Join Our Hospital Premium Membership <br></br>
          </h1>
          <div className="matter-join-para">
            <p className="f-para">
              Enjoy priority healthcare, exclusive discounts, and personalized
              care with our membership plans.<br></br>
            </p>
            {/* first div */}
            <div className="a-create-login">
              <div className="create-matter-div">
                <button
                  className="a-create"
                  onClick={() => (window.location.href = "#section-2")}
                >
                  Join MemberShip!!
                </button>
              </div>

              <div className="login-matter-div">
                <button
                  className="a-login"
                  onClick={() => (window.location.href = "#section-3")}
                >
                  Login
                </button>
              </div>
            </div>
            <div className="benefits-div">
              <h5 className="benefits-para">
                -: Benefits :-<br></br>
              </h5>

              <div className="contain-benefits">
                ✔ Priority Appointments – Faster access to doctors
                <br></br>✔ Discounts – Save on consultations, tests & treatments
                <br></br>✔ Free Checkups – Annual health screenings<br></br>✔
                24/7 Emergency Support – Immediate assistance <br></br>✔
                Personalized Care – Wellness plans & expert guidance <br></br>
              </div>
            </div>
            <div className="membership-div-matter">
              <h5 className="benefits-para">
                -: Membership Plans :-<br></br>
              </h5>
              <div className="contain-membership">
                🩺 Basic – Priority appointments + discounts
                <br></br>
                💙 Premium – Extra discounts + free checkups <br></br>
                🏆 Elite – VIP care + personalized wellness <br></br>
              </div>
            </div>
            <div className="join-div">
              <h5 className="benefits-para">
                -: Join Now ! :- <br></br>
              </h5>
              <div className="contain-join">
                <p>
                  Visit us : Hyderabad<br></br>
                  call +91 XXXXXXXXXX<br></br>
                  📩 Email: novenasupport@gmail.com <br></br>
                  Your Health, Our Priority!
                </p>
              </div>
            </div>
          </div>
        </div>
        <Create_Account />
        <Login_l />
      </Layout>
    </>
  );
};

export default Membership;
