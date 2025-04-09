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
import Admin_LP from "./pages/Admin_pages/adminLogin/admin_lp.jsx";
import ProtectRoutes from "./componets/protectRoutes/protectedRoutes.jsx";
import AdminDashboardPage from "./pages/Admin_pages/adminDashboard/adminDashboard.jsx";
import UserProRoutes from "./componets/protectRoutes/userProtectedRoutes.jsx";
import User_Login from "./componets/login/userlogin/userlogin.jsx";
import Register from "./componets/account/register/register.jsx";
import Doctor_register_page from "./pages/doctor_pages/doctor_reg.jsx";
import Appointment_allist from "./pages/Admin_pages/appointment_list/appointment_allist.jsx";
import AppointmentUpdate from "./pages/Admin_pages/appointment_list/appointmentUpdate.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_p />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/login" element={<Login_l />} />
        <Route path="/create_account" element={<Create_Account />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About_page />} />
        <Route path="/contact" element={<Contact_page />} />
        <Route path="/department" element={<Department_page />} />
        <Route path="/doctor_availabilty" element={<Doctor_availabilty />} />
        <Route path="/appoinment" element={<Appoinment_page />} />
        <Route path="/admin_Login_page" element={<Admin_LP />} />
        <Route path="/user_login" element={<User_Login/>} />
        <Route path="/doctor_register" element={<Doctor_register_page/>}/>
        <Route path="/appointment-list" element={<Appointment_allist/>}/>
        <Route path="/appointment-update/:id" element={<AppointmentUpdate/>}/>
        {/* Protected Routes*/}
        <Route
          path="/user_dashboard"
          element={
            <UserProRoutes>
              <Dashboard_page />
            </UserProRoutes>
          }
        />
        <Route
          path="/admin_dashboard"
          element={
            <ProtectRoutes>
              <AdminDashboardPage />
            </ProtectRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
