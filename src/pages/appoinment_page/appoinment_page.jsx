import { useState } from "react";
import Layout from "../../componets/layout/layout";
import "../appoinment_page/appoinment_page.css";

const Appoinment_page = () => {
  const [fullName, setFullname] = useState("");
  const [specializationDoctor, setSpecializationDoctor] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const Handlesubmit = async (e) => {
    e.preventDefault();
    const useData = {
      fullName,
      specializationDoctor,
      doctorName,
      time,
      date,
      number,
      textArea: message,
    };
    try {
      const response = await fetch(
        "http://localhost:8000/appointment/saveAppointment",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(useData),
        }
      );
      if (response.ok) {
        alert("Appointment Booked");
        setDoctorName("");
        setSpecializationDoctor("");
        setDate("");
        setTime("");
        setNumber("");
        setMessage("");
      } else {
        setDoctorName("");
        setSpecializationDoctor("");
        setDate("");
        setTime("");
        setNumber("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
      setDoctorName("");
      setSpecializationDoctor("");
      setDate("");
      setTime("");
      setNumber("");
      setMessage("");
    }
  };

  return (
    <Layout>
      <div className="appointment-main-page-div">
        <div className="appoinment-main-page">
          <div className="appoinment-second-div">
            <div className="second-div-text-div">
              <h1>Book an Appointment</h1>
              <p className="book-para">
                "Your well-being drives us to make appointments seamless and
                supportive.<br></br> With expertise and care, we guide you to
                the right department and time.<br></br> Trust us to prioritize
                your health with every step you take."
              </p>
            </div>
            <div className="appoinment-table-div" id="app-div-tb">
              <form onSubmit={Handlesubmit}>
                <table>
                  <tbody>
                    <tr className="department-select-div">
                      <td>
                        <input
                          type="text"
                          value={specializationDoctor}
                          onChange={(e) =>
                            setSpecializationDoctor(e.target.value)
                          }
                          placeholder="Which Specialization Need ? "
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={doctorName}
                          onChange={(e) => setDoctorName(e.target.value)}
                          placeholder="Doctor Name?"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="time"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullname(e.target.value)}
                          placeholder="Full Name"
                          required
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          placeholder="Number"
                          required
                        />
                      </td>
                    </tr>
                    <tr className="message-div">
                      <td colSpan="2">
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </td>
                    </tr>
                    <td colSpan="2">
                      <button className="appoinment-t-button">
                        Make Appointment
                      </button>
                    </td>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Appoinment_page;
