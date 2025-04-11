import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "../appointment_list/appointmentupdate.css";

const AppointmentUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/appointment/get/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAppointment(data);
        setDate(data.date);
        setTime(data.time);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleUpdate = async (name) => {
    try {
      const res = await fetch(
        ` http://localhost:8000/appointment/update?id=${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ ...appointment, date, time }),
        }
      );

      if (res.ok) {
        alert(`Appointment Reschedule Successfully Done for ${name}!`);
        navigate("/appointment-list");
      } else {
        alert("Failed to reschedule  appointment");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!appointment) return <p>Loading...</p>;

  return (
    <div className="appointment-reschedule-main">
       <h2>Appointment Reschedule for {appointment.fullName}!</h2>
      <table className="app-table-update">
        <thead>
          <th className="th-update-app"> Patient Name </th>
          <th  className="th-update-app">Doctor Name </th>
          <th className="th-update-app"> Date</th>
          <th className="th-update-app">Time </th>
          <th className="th-update-app"> Reschedule </th>
        </thead>
        <tbody>
          <td className="td-up-app"> {appointment.fullName} </td>
          <td className="td-ups-apps"> {appointment.doctorName}</td>
          <td className="td-up-app" >
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </td>
          <td className="td-ups-apps">
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </td>
          <td className="td-up-app">
            <button className="btn-tu-app" onClick={()=>handleUpdate(appointment.fullName)}>Reschedule</button>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentUpdate;
