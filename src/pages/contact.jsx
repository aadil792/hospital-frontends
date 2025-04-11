import Layout from "../componets/layout/layout";
import "../pages/pages_css/contact.css";
const Contact_page = () => {
  return (
    <>
      <Layout>
        <div className="contact-parent-main">
          <div className="header">
            <p className="p-c-m">Contact Us</p>
            <h3 className="h3-c-m">Get In Touch</h3>
          </div>

          <div className="contact-container">
            <div className="contact-card">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/headset.png"
                alt="Call Icon"
              ></img>
              <h3>Call Us</h3>
              <p>+823-4565-13456</p>
            </div>
            <div className="contact-card">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/email.png"
                alt="Email Icon"
              ></img>
              <h3>Email Us</h3>
              <p>Novena@mail.com</p>
            </div>
            <div className="contact-card">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/marker.png"
                alt="Location Icon"
              ></img>
              <h3>Location</h3>
              <p>North Main Street, Brooklyn, Australia</p>
            </div>
          </div>
         
            <h2 className="h2-connect-with-us">Connect with us</h2>
            <p className="p-connect-with-us">By Filling Form </p>
          <div className="contact-input-main-div">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  placeholder=" Your Full Name"
                  required
                ></input>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                  required
                ></input>
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  id="phone"
                  placeholder=" Your Phone Number"
                ></input>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="topic"
                  placeholder="Subject of Your Message"
                ></input>
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  placeholder="Your valuable  thoughts — we’re listening!"
                  required
                ></textarea>
              </div>
              <div className="button-container">
                <button type="submit">SEND MESSAGE</button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Contact_page;
