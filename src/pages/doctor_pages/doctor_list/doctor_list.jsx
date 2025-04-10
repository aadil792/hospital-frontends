import { useEffect, useState } from "react";
import "../doctor_list/doctor_list.css";

const Doctor_list = () => {
  const [appointment, setAppointment] = useState([]); 
 const [doctorName ,setDoctorName]=useState("");

  useEffect(() => {
    fetch("http://localhost:8000/doctors/appointment", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch appointment");
        return res.json();
      })
      .then((data) => {

          setAppointment(data)
          if (data.length > 0) {
            setDoctorName(data[0].doctorName); // show first doctor name
          }
    }
        

      
    )               
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <>
    <div className="doc-list-mian-div">
<h3>Doctor <span>{doctorName} </span> Your Patient Appointment List</h3>

      <table>
        


        <thead>
          <tr>
            <th className="th-appointment">Doctor Specialization</th>
            <th className="th-appointment">Patient Name</th>
            <th className="th-appointment">Patient Message</th>
            <th className="th-appointment">Appointment Time</th>
            <th className="th-appointment">Appointment Date </th>
          </tr>
        </thead>
        <tbody>
          {appointment.map((item) => (
            <tr key={item.id}>
              <td  className="id-app-td">{item.specializationDoctor}</td>
              <td  className="td-appointment">{item.fullName}</td>
              <td  className="id-app-td">{item.textArea}</td>
              <td className="td-appointment">{item.time}</td>
              <td  className="id-app-td">{item.date} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Doctor_list;
