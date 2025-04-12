import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../doctor_list/doctor_list.css";

const Doctor_list = () => {
  const [appointmentList, setAppointmentList] = useState([]);
  const [doctorName, setDoctorName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/doctors/appointment", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch appointment");
        return res.json();
      })
      .then((data) => {
        setAppointmentList(data);
        if (data.length > 0) {
          setDoctorName(data[0].doctorName);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);
  const deleteapp = async (id, name) => {
    try {
      const res = await fetch(
        `http://localhost:8000/appointment/delete/${id}`,
        {
          method: "delete",
          credentials: "include",
        }
      );
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
          Doctor <span>{doctorName} </span> Your Patient Appointments List
        </h3>

        <table>
          <thead>
            <tr>
              <th className="th-appointment">Doctor Specialization</th>
              <th className="th-appointment">Patient Name</th>
              <th className="th-appointment">Patient Message</th>
              <th className="th-appointment">Appointment Time</th>
              <th className="th-appointment">Appointment Date </th>
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
                <td className="tds-appointment">{item.prescription} </td>
                <td className="ids-app-td">
                  <Link
                    className="link-d-l"
                    to={`/patient_prescription/${item.id}`}
                  >
                    Prescription
                  </Link>
                </td>
                <td className="tds-appointment">
                  <input
                    className="input-app-doc-list"
                    type="button"
                    value="Complete"
                    onClick={() => deleteapp(item.id, item.fullName)}
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

export default Doctor_list;
