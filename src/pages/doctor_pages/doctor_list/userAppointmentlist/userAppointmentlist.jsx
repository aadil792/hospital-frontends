import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../userAppointmentlist/userAppointmentlist.css";
const UserAppointment_list = () => {
  const [appointmentList, setAppointmentList] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/doctors/userAppointment", {
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
  useEffect(() => {
    fetch("http://localhost:8000/doctors/get-name", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Not authorized");
        return res.json();
      })
      .then((data) => setName(data.name))
      .catch((err) => console.error("Failed to get name:", err));
  }, []);

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
        <h3>
          Dr. <span>{name}</span>, these are the appointments scheduled by User
          patients in your department.
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
              <th className="th-appointment">Old Prescription</th>
              <th className="th-appointment">Give Patient Prescription </th>
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
                <td className=" ids-app-td">{item.prescription} </td>
                <td className="tds-appointment">
                  <Link
                    className="ids-apps-tds"
                    to={`/userAppointmentPrescription/${item.id}`}
                  >
                    Give Prescription
                  </Link>
                </td>
                <td className=" id-app-tdp">
                  <input
                    type="button"
                    value="Completed"
                    onClick={() => deleteapp(item.id, item.fullName)}
                    className="delete-btn-userAp"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="doctot_userAppLink" to="/doctor_dashboard">
          back
        </Link>
      </div>
    </>
  );
};

export default UserAppointment_list;
