import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../userPrescription/uP.css";
const UserPrescrition_list = () => {
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/user/prescription", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch appointment");
        return res.json();
      })
      .then((data) => {
        setAppointmentList(data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);
//   useEffect(() => {
//     fetch("http://localhost:8000/doctors/get-name", {
//       credentials: "include",
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Not authorized");
//         return res.json();
//       })
//       .then((data) => setName(data.name))
//       .catch((err) => console.error("Failed to get name:", err));
//   }, []);

  const deleteapp = async (id, name) => {
    try {
      const res = await fetch(`http://localhost:8000/patients/delete/${id}`, {
        method: "delete",
        credentials: "include",
      });
      if (res.ok) {
        alert(`Appointment Completed ${name}`);
        setAppointmentList((prev) => prev.filter((appt) => appt.id !== id));
      } else {
        alert("failed to delete");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="doc-list-mian-div">
        <Link className="link-pre-main-h" to="/user_dashboard">back</Link>
        <h3>
           View Your Prescription
        </h3>
        <table>
          <thead>
            <tr>
              <th className="th-appointment">Doctor Specialization</th>
              <th className="th-appointment">Patient Name</th>
              <th className="th-appointment">Patient Message</th>
              <th className="th-appointment">Appointment Time</th>
              <th className="th-appointment">Appointment Date </th>
              <th className="th-appointment">Disease</th>
              <th className="th-appointment"> Prescription</th>
              <th className="th-appointment">Appointment Completed</th>
            </tr>
          </thead>
          <tbody>
            {appointmentList.map((item) => (
              <tr key={item.id}>
                <td className="ids-app-td">{item.specializationDoctor}</td>
                <td className="tds-appointment">{item.fullName}</td>
                <td className="ids-app-td">{item.textArea}</td>
                <td className="tds-appointment">{item.time}</td>
                <td className="ids-app-td">{item.date} </td>
                <td className="tds-appointment">{item.disease} </td>
                <td className="ids-app-td">{item.prescription} </td>
                <td className="tds-appointment">
                  <input
                  className="remove-div"
                    type="button"
                    value="Complete"
                    onClick={() => deleteapp(item.id, item.fullName)}                    
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserPrescrition_list;
