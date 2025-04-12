import { useEffect, useState } from "react";
import "../userAppointment/userAppointment.css";
import { useNavigate } from "react-router-dom";

const UserAppointment = () => {
  // const [fullName, setFullname] = useState("");
  const [specializationDoctor, setSpecializationDoctor] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [disease, setDisease] = useState("");
  const [name,setName]=useState("");
  const navigation = useNavigate("");

  useEffect(() => {
    fetch("http://localhost:8000/user/get-name", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not authorized");
        return res.json();
      })
      .then((data) => setName(data.name))  
      .catch((err) => console.error("Failed to get name:", err));
  }, []);
 

  const Handlesubmit = async (e) => {
    e.preventDefault();
    const useData = {
      specializationDoctor,
      doctorName,
      time,
      date,
      number,
      textArea: message,
      disease,
      fullName:name,
    };
    try {
      const response = await fetch("http://localhost:8000/patients/add", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(useData),
      });
      if (response.ok) {
        alert(`Appointment Booked${name}`);
        navigation("/user_dashboard");
      } else {
        setDoctorName("");
        setSpecializationDoctor("");
        setDate("");
        setTime("");
        setNumber("");
        setMessage("");
        setDisease("");
        // setFullname("");
      }
    } catch (error) {
      console.error(error);
      setDoctorName("");
      setSpecializationDoctor("");
      setDate("");
      setTime("");
      setNumber("");
      setMessage("");
      setDisease("");
      // setFullname("");
    }

    
  };

  return (
    <>
      <div className="userAppoints-main-table-div">
        <h2 className="h1-userAppointment"> Hi {name}! Book your Appointment </h2>
        <div className="appoinment-table-div">
          <form onSubmit={Handlesubmit}>
                  <h3 className="h2-k-l-p">Fill the form !</h3>
            <table className="tb-app-user">
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      value={specializationDoctor}
                      onChange={(e) => setSpecializationDoctor(e.target.value)}
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
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                <tr className="disease-div-td">
                  <td colSpan="2">
                    <input
                      type="text"
                      value={disease}
                      onChange={(e) => setDisease(e.target.value)}
                      placeholder="Disease Info"
                      className="di-div-td"
                      required
                    />
                  </td>
                </tr>
                <tr className="message-div-hi">
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
                    Book Appointment
                  </button>
                </td>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};
export default UserAppointment;
