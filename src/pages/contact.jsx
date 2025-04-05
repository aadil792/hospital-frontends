import Layout from "../componets/layout/layout";
import "../pages/pages_css/contact.css";
const Contact_page=()=>{
    return(
        <>
        <Layout>
<div className="contact-parent-main">
            <div class="header">
        <p>Contact Us</p>
        <h1>Get In Touch</h1>
    </div>

    <div class="contact-container">
        <div class="contact-card">
            <img src="https://img.icons8.com/ios-filled/50/000000/headset.png" alt="Call Icon"></img>
            <h3>Call Us</h3>
            <p>+823-4565-13456</p>
        </div>
        <div class="contact-card">
            <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="Email Icon"></img>
            <h3>Email Us</h3>
            <p>contact@mail.com</p>
        </div>
        <div class="contact-card">
            <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" alt="Location Icon"></img>
            <h3>Location</h3>
            <p>North Main Street, Brooklyn, Australia</p>
        </div>
    </div>
    <div class="content">
        <h2>Contact us</h2>
        <p>Laboriosam exercitationem molestias beatae eos pariatur, similique,
        <br></br> excepturi mollitia sit perferendis maiores ratione aliquam?</p>
    </div>
    <form>
        <div class="form-group">
            <label for="name">Your Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" required></input>
        </div>
        
        <div class="form-group">
            <label for="email">Your Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required></input>
        </div>
        
        <div class="form-group">
            <label for="phone">Your Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number"></input>
        </div>
        
        <div class="form-group">
            <label for="topic">Your Query Topic</label>
            <input type="text" id="topic" placeholder="Enter query topic"></input>
        </div>
        
        <div class="form-group">
            <label for="message">Your Message</label>
            <textarea id="message" placeholder="Write your message here" required></textarea>
        </div>
        <div class="button-container">
            <button type="submit">SEND MESSAGE</button>
        </div>
    </form>
</div>







        </Layout>
        </>
    );
};
export default Contact_page;