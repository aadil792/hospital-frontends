import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_p from "./pages/home.jsx";
import Membership from "./pages/membership.jsx";
import Login_l from "./componets/login/login.jsx";
import Create_Account from "./componets/account/create.jsx";
import Dashboard_page from "./pages/dashboard.jsx";
import About_page from "./pages/about.jsx";
import Contact_page from "./pages/contact.jsx";
import Department_page from "./pages/department.jsx";
import Doctor_availabilty from "./pages/doctor_availabilty.jsx";
import Appoinment_page from "./pages/appoinment_page/appoinment_page.jsx";
import Admin_LP from "./pages/Admin_pages/admin_lp.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_p />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/login" element={<Login_l />} />
        <Route path="/create_account" element={<Create_Account />} />
        <Route path="/about" element={<About_page />} />
        <Route path="/contact" element={<Contact_page />} />
        <Route path="/department" element={<Department_page />} />
        <Route path="/doctor_availabilty" element={<Doctor_availabilty />} />
        <Route path="/appoinment" element={<Appoinment_page />} />
        <Route path="/dashboard" element={<Dashboard_page />} />
        <Route path="/admin_Login_page" element={<Admin_LP/>}/>
      </Routes>
    </Router>
  );
};

export default App;
