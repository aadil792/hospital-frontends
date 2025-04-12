import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "../userAppointmentlist/userAppointmentPre.css";
const UserAppointmentPrescription = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);
  const [prescription, setPrecription] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/patients/get/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setAppointment(data);
        setPrecription(data.prescription);
      })
      .catch((error) => {
        console.error(error);
        alert("Error fetching the appointment data");
      });
  }, [id]);

  const handleUpdate = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/patients/prescription?id=${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ ...appointment, prescription }),
        }
      );

      if (res.ok) {
        alert(`Prescription Sent to ${appointment.fullName}!`);
        navigate("/userAppointment_list");
      } else {
        alert("Failed to reschedule  appointment");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!appointment) return <p>Loading...</p>;

  return (
    <div className="patient-pre-reschedule-main" id="uap">
      <Link className="doctot_userAppLink" to="/userAppointment_list">
        back
      </Link>

      <h2>Prescription for "{appointment.fullName}" Patient</h2>
      <table className="patient-pre-table-update">
        <thead>
          <tr>
            <th className="th-papre-app"> Patient Name </th>
            <th className="th-papre-app"> Prescription</th>
            <th className="th-papre-app"> Sent Prescription </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td-pa-app"> {appointment.fullName} </td>
            <td className="td-pa-app">
              <textarea
                className="text-area-pa"
                value={prescription}
                onChange={(e) => setPrecription(e.target.value)}
                placeholder="Prescription"
              ></textarea>
            </td>
            <td className="tds-pa-app">
              <button
                className="papr-tu-app"
                id="pre-user"
                onClick={handleUpdate}
              >
                Done
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserAppointmentPrescription;
