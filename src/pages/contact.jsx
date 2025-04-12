import { useState } from "react";
import Layout from "../componets/layout/layout";
import "../pages/pages_css/contact.css";
const Contact_page = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [thoughts, setThoughts] = useState("");

  const OnHandle = async (e) => {
    e.preventDefault();
    const useData = {
      name,
      phone,
      email,
      subject,
      thoughts,
    };

    try {
      const res = await fetch("http://localhost:8000/contact/addContact", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(useData),
      });
      if (res.ok) {
        alert("your message is sented");
        setName(""),
          setEmail(""),
          setPhone(""),
          setSubject(""),
          setThoughts("");
      }
    } catch (error) {
      alert(console.error(error));
      setName(""), setEmail(""), setPhone(""), setSubject(""), setThoughts("");
    }
  };
  return (
    <>
      <Layout>
        <div className="contact-parent-main">
          /
          <div className="contact-main-div-table">
            <h2 className="h2-connect-with-us">Connect with us</h2>
            <p className="p-connect-with-us">By Filling Form </p>
            <div className="contact-input-main-div">
              <form onSubmit={OnHandle}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=" Your Full Name"
                    required
                  ></input>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    required
                  ></input>
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder=" Your Phone Number"
                  ></input>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="topic"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject of Your Message"
                  ></input>
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    value={thoughts}
                    onChange={(e) => setThoughts(e.target.value)}
                    placeholder="Your valuable  thoughts — we’re listening!"
                    required
                  ></textarea>
                </div>
                <div className="button-container">
                  <button type="submit" className="btn-contact-sub">SEND MESSAGE</button>
                </div>
              </form>
            </div>
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
            <div className="contact-card" id="contact-email">
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
          
        </div>
      </Layout>
    </>
  );
};
export default Contact_page;
