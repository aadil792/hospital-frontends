import Layout from "../../componets/layout/layout";
import "../appoinment_page/appoinment_page.css";

const Appoinment_page = () => {
  return (
    <Layout>
      <div className="appoinment-main-page">
        <div className="appoinment-first-div">
          <h2> Call For an Emergency Service</h2>
          <h1>+91 9876545678 </h1>
        </div>
        <div className="appoinment-second-div">
          <div className="second-div-text-div">
            <h1>Book an Appoinment</h1>
            <p className="book-para">
              "Your well-being drives us to make appointments seamless and
              supportive.<br></br> With expertise and care, we guide you to the
              right department and time.<br></br> Trust us to prioritize your
              health with every step you take."
            </p>
          </div>
          <div className="appoinment-table-div">
          <table>
            <tbody>
              <tr className="department-select-div">
                <td >
                  <select name="choose_department">
                    <option value="#">Choose Department</option>
                    <option value="#">Choose Department</option>
                    <option value="#">Choose Department</option>
                    <option value="#">Choose Department</option>
                    <option value="#">Choose Department</option>
                    <option value="#">Choose Department</option>
                  </select>
                </td>
                <td>
                  <select name="choose_doctor">
                    <option value="#">Choose Doctor</option>
                    <option value="#">Choose Doctor </option>
                    <option value="#">Choose Doctor</option>
                    <option value="#">Choose Doctor</option>
                    <option value="#">Choose Doctor</option>
                    <option value="#">Choose Doctor</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="date" />
                </td>
                <td>
                  <input type="time" />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="text" placeholder="Full Name" />
                </td>
                <td>
                  <input type="number" placeholder="Number" />
                </td>
              </tr>
              <tr className="message-div"  >
                <td colspan="2">
                  <textarea  placeholder="Your Message" ></textarea>
                </td>
              </tr >
              <td colspan="2">
                <button className="appoinment-t-button">Make Appoinment</button>
              </td>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Appoinment_page;
