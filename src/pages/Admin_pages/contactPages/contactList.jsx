import { useEffect, useState  } from "react";
import "../contactPages/contactList.css";
import { Link } from "react-router-dom";

const ContactList = () => {
    
  const [contactList, setContactLsit] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/contact/getAllList", {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("failed to fetch the Contact List");
        return res.json();
      })
      .then((data) => {
        setContactLsit(data);
      })
      .catch((err) => {
        alert(console.error(err));
      });
  },[]);
  const deleteapp = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/contact/delete/${id}`, {
        method: "delete",
        credentials: "include",
      });
      if (res.ok) {
        alert(`Enqiure Review Done`);
        setContactLsit((prev) => prev.filter((appt) => appt.id !== id));
      } else {
        alert("failed to delete");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if(!contactList) return <p>Loading.....</p>
  return <>
  
  <div className="doc-list-mian-div">
        <h3>
        Contact Review Form List 
        </h3>
        <table>
          <thead>
            <tr>
              <th className="th-appointment">Full Name</th>
              <th className="th-appointment">Email</th>
              <th className="th-appointment">Contact Number</th>
              <th className="th-appointment">Subject</th>
              <th className="th-appointment">Thoughts</th>
              <th className="th-appointment">Enquire Completed ?</th>
            </tr>
          </thead>
          <tbody>
            {contactList.map((item) => (
              <tr key={item.id}>
                <td className="ids-app-td">{item.name}</td>
                <td className="tds-appointment">{item.email}</td>
                <td className="ids-app-td">{item.phone}</td>
                <td className="tds-appointment">{item.subject}</td>
                <td className="ids-app-td">{item.thoughts} </td>
                <td className=" ids-app-tdps">
                  <input
                    type="button"
                    value="Completed"
                    onClick={() => deleteapp(item.id, item.fullName)}
                    className="delete-btsn-userAp"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="doctot_userAppLink" to="/admin_dashboard">
          back
        </Link>
      </div>
  
  </>;
};

export default ContactList;
