import Layout from "../componets/layout/layout";
import "../pages/pages_css/about.css";
import kidshealthcare from "../assets/kidshealthcare.jpg";
import counselling from "../assets/counselling.jpg";
import equipment from "../assets/equipment.jpg";
import bestdoctors from "../assets/bestdoctors.avif";
import AUHENTIC from "../assets/AUHENTIC.jpg";
import RETRO from "../assets/RETRO.avif";
import AAMC from "../assets/AAMC.jpg";
import HEALTH from "../assets/HEALTH.jpeg";
import GERMAN from "../assets/GERMAN.jpeg";
import MOCHA from "../assets/MOCHA.png";
import John from "../assets/John.webp";
import sameer from "../assets/sameer.jpg";
import Harrision from "../assets/Harrision.jpeg";
import Rishat from "../assets/Rishat.jpg";
import doctors from "../assets/doctors.jpg";

const About_page = () => {
  return (
    <>
      <Layout>
        <section class="about-header">
          <div class="overlay">
            <h3>About Us</h3>
            <h1>About Us</h1>
          </div>
        </section>

        <section class="about-content">
          <div class="text-left">
            <h2>
              Personal care <br></br> for your healthy <br></br> living
            </h2>
          </div>

          <div class="text-right">
            <p>
              "The strength of a nation lies not only in its defense, but in the
              health and well-being of its people. True progress begins with
              compassion, care, and a commitment to healing. Let every life we
              touch be a step toward a healthier, brighter future."
            </p>
            <p class="signature">K. Atatürk</p>
          </div>
        </section>
        <section class="services">
          <div class="service-box">
            <img src={kidshealthcare} alt="Healthcare for Kids"></img>
            <h3>Healthcare for Kids</h3>
            <p>
              “With unwavering dedication to excellence and empathy, we strive
              to heal, support, and uplift every individual who walks through
              our doors.”
            </p>
          </div>
          <div class="service-box">
            <img src={counselling} alt="Medical Counseling"></img>
            <h3>Medical Counseling</h3>
            <p>
              "Our expert medical counselors provide personalized guidance to
              help patients make informed decisions about their health and
              treatment."
            </p>
          </div>
          <div class="service-box">
            <img src={equipment} alt="Modern Equipments"></img>
            <h3>Modern Equipments</h3>
            <p>
              "With compassion, integrity, and a heart devoted to healing, we
              are committed to delivering exceptional care to every life we
              touch."
            </p>
          </div>
          <div class="service-box">
            <img src={bestdoctors} alt="Qualified Doctors"></img>
            <h3>Qualified Doctors</h3>
            <p>
              "Our team of experienced and certified doctors ensures the highest
              standards of medical excellence and compassionate care for every
              patient."
            </p>
          </div>
        </section>

        <section class="achievements">
          <h2>
            Our Doctors <br></br>achievements
          </h2>
          <div class="logos">
            <img src={AUHENTIC} alt="Logo 1"></img>
            <img src={RETRO} alt="Logo 2"></img>
            <img src={AAMC} alt="Logo 3"></img>
            <img src={HEALTH} alt="Logo 4"></img>
            <img src={GERMAN} alt="Logo 5"></img>
            <img src={MOCHA} alt="Logo 6"></img>
          </div>
        </section>
        <section class="specialist-section">
          <h2>Meet Our Specialist</h2>
          <p class="description">
            Today’s users expect effortless experiences. Don’t let essential
            people and<br></br>
            processes stay stuck in the past. Speed it up, skip the hassles
          </p>

          <div class="specialist-container">
            <div class="specialist-card">
              <img src={John} alt="John Marshal"></img>
              <h3>John Marshal</h3>
              <p>
                <span>Internist</span>, Emergency Physician
              </p>
            </div>
            <div class="specialist-card">
              <img src={sameer} alt="Marshal Root"></img>
              <h3>Marshal Root</h3>
              <p>
                <span>Surgeon</span>, Cardiologist
              </p>
            </div>
            <div class="specialist-card">
              <img src={Harrision} alt="Siamon John"></img>
              <h3>Siamon John</h3>
              <p>
                <span>Internist</span>, General Practitioner
              </p>
            </div>
            <div class="specialist-card">
              <img src={Rishat} alt="Rishat Ahmed"></img>
              <h3>Rishat Ahmed</h3>
              <p>
                <span>Orthopedic Surgeon</span>
              </p>
            </div>
          </div>
        </section>
        <section class="testimonial-section">
          <div class="testimonial-content">
            <div class="testimonial-image">
              <img src={doctors} alt="Doctors Group"></img>
            </div>
            <div class="testimonial-text">
              <h2>What they say about us</h2>
              <h3>Amazing service!</h3>
              <p class="name">John Partho</p>
              <p class="feedback">
                They provide great service facility consectetur adipisicing
                elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel
                eos adipisci suscipit fugit placeat. Quibusdam laboriosam
                eveniet nostrum nemo commodi numquam quod.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default About_page;
