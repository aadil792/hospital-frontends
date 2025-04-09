import { useEffect, useState } from "react";
import "../appointment_list/appointment_allist.css";
import { Link } from "react-router-dom";

const Appointment_allist = () => {
  const [appointmentList, setAppointmentList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/appointment/getAllList")
      .then((res) => res.json())
      .then((data) => {
        setAppointmentList(data);
      })
      .catch((error) => {
        console.error(error);
      });
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
      <div className="appointmentList-main-div">
       <div className="nav-app-l-m">
        <h1 className="ap-h1-l-m">Patient Appointment List</h1> 
         <Link to="/admin_dashboard">back </Link>
       </div>
        <table cellSpacing={0} className="table-appointmentlist">
          <thead>
            <tr className="tr-appointment">
              <th className="th-appointment">Required Department </th>
              <th className="th-appointment">Required Doctor </th>
              <th className="th-appointment">Appointment Date</th>
              <th className="th-appointment">Appointment Timing </th>
              <th className="th-appointment">Patient Name</th>
              <th className="th-appointment">Patient Number</th>
              <th className="th-appointment">Patient Message </th>
              <th className="th-appointment">Completed Appointment? </th>
              <th className="th-appointment">Reschedule Appointment? </th>
            </tr>
          </thead>
          <tbody>
            {appointmentList.map((appointment) => (
              <tr key={appointment.id}>
                <td className="id-app-td">{appointment.chooseDepartment} </td>
                <td className="td-appointment">{appointment.chooseDoctor} </td>
                <td className="id-app-td">{appointment.date} </td>
                <td className="td-appointment">{appointment.time} </td>
                <td className="id-app-td">{appointment.fullName} </td>
                <td className="td-appointment">{appointment.number} </td>
                <td className="id-app-td"> {appointment.textArea}</td>
                <td className="td-appointment">
                  <button
                    className="status-complete"
                    onClick={() =>
                      deleteapp(appointment.id, appointment.fullName)
                    }
                  >
                    Delete
                  </button>
                </td>
                <td className="id-app-tds">
                  <Link
                    className="apt-link-u"
                    id="h-i"
                    to={`/appointment-update/${appointment.id}`}
                  >
                    Reschedule
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Appointment_allist;
