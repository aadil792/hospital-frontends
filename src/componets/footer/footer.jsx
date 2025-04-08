import "../footer/footer.css";
import main_logo from "../../assets/main_logo.png";
import twitterlogo from "../../assets/twitterlogo.png";
import Facebooklogo from "../../assets/Facebooklogo.png";
import linkedinlogo from "../../assets/linkedInlogo.png";
import { Link } from "react-router-dom";

const Footer_f = () => {


  return (
    <>
      <div class="footer-container">
        <div class="footer-section_about">
          <h2>
            <img src={main_logo} alt="Logo"></img>
          </h2>
          <p>
            Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad
            eos obcaecati tenetur veritatis eveniet distinctio possimus.
          </p>
          <div class="social-icons">
            <a href="#">
              <img src={Facebooklogo} alt="Facebook"></img>
            </a>
            <a href="#">
              <img src={twitterlogo} alt="Twitter"></img>
            </a>
            <a href="#">
              <img src={linkedinlogo} alt="LinkedIn"></img>
            </a>
          </div>
        </div>
        <div class="footer-section department">
          <h3>Department</h3>
          <ul>
            <li>Surgery</li>
            <li>Women's Health</li>
            <li>Radiology</li>
            <li>Cardiology</li>
            <li>Medicine</li>
          </ul>
        </div>
        <div class="footer-section support">
          <h3>Support</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Company Support</li>
            <li>FAQs</li>
            <li>Company License</li>
          </ul>
        </div>
        <div class="footer-section contact">
          <h3>Get In Touch</h3>
          <p>
            <strong>Email:</strong> Support@email.com
          </p>
          <p>
            <strong>Phone:</strong> +23-456-6588
          </p>
          <p>
            <strong>Hours:</strong> Mon to Fri: 08:30 - 18:00
          </p>
        <Link to="/register" className="subscribe-btn">
        <span>Subscribe</span>
        </Link>
        </div>
      </div>
      <p class="footer-bottom">
        &copy; Copyright Reserved to Novena by Themefisher | Distributed by
        Themewagon
      </p>
    </>
  );
};
export default Footer_f;
