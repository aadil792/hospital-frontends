import Layout from "../componets/layout/layout";
import "../pages/pages_css/contact.css";
const Contact_page = () => {
  return (
    <>
      <Layout>
        <div className="contact-main-div">
          <div className="contact-matter-main">
            <h2 className="h2-contact-main">Contact Us</h2>
            <h2 className="h2-contact-h">Hospital Novena</h2>
            <div className="tags-contact">
              <h3>📍 Address: [Street Address, Hyderabad,Pin Code: 898732]</h3>
              <h3>📞 Phone: +91 [98764567777]</h3>
              <h3>📧 Email: [novena@gmail.com]</h3>
              <h3>🌐 Website: [https://hospital-frontends.vercel.app/]</h3>

              <h3>
                🕒 Working Hours: Monday - Saturday: 8:00 AM - 8:00 PM Sunday:
                9:00 AM - 2:00 PM
              </h3>
              <h3>
                Emergency Contact 🚑 24/7 Emergency Helpline: +91 [Emergency
                Number]
              </h3>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Contact_page;
