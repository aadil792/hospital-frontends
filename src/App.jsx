import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home_p from "./pages/home.jsx";
import Membership from "./pages/membership.jsx";
import About_page from "./pages/about.jsx";
import Contact_page from "./pages/contact.jsx";
import Department_page from "./pages/department.jsx";
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
import Doctor_login from "./pages/doctor_pages/doctor login/doctor_login.jsx";
import Doctor_dashboard from "./pages/doctor_pages/doctor dashboard/doctor_dashboard.jsx";
import DoctorProctetedRoutes from "./componets/routes/doctorRoutes.jsx";
import Doctor_list from "./pages/doctor_pages/doctor_list/doctor_list.jsx";
import UpdatePrescription from "./pages/doctor_pages/doctor_list/patient_pre.jsx";
import UserDashboard_page from "./componets/login/userDashboard/userDashboard.jsx";
import UserAppointment from "./componets/login/userAppointment/userAppointment.jsx";
import UserAppointment_list from "./pages/doctor_pages/doctor_list/userAppointmentlist/userAppointmentlist.jsx";
import UserAppointmentPrescription from "./pages/doctor_pages/doctor_list/userAppointmentlist/userAppointmentPresc.jsx";
import UserPrescrition_list from "./componets/login/userPrescription/userPrescription.jsx";
import ContactList from "./pages/Admin_pages/contactPages/contactList.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_p />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/about" element={<About_page />} />
        <Route path="/contact" element={<Contact_page />} />
        <Route path="/department" element={<Department_page />} />
        <Route path="/appoinment" element={<Appoinment_page />} />
        <Route path="/admin_Login_page" element={<Admin_LP />} />
        <Route path="/user_login" element={<User_Login/>} />
        <Route path="/doctor_register" element={<Doctor_register_page/>}/>
        <Route path="/appointment-list" element={<Appointment_allist/>}/>
        <Route path="/appointment-update/:id" element={<AppointmentUpdate/>}/>
        <Route path="/doctor_login" element={<Doctor_login/>}/>
        <Route path="/doctor_list" element={<Doctor_list/>}/>
        <Route path="/patient_prescription/:id" element={<UpdatePrescription/>}/>
        <Route path="/userAppointment_page" element={<UserAppointment/>}/>
        <Route path="/userAppointment_list" element={<UserAppointment_list/>}/>
        <Route path="/userAppointmentPrescription/:id" element={<UserAppointmentPrescription/>}/>
        <Route path="/userPrescrition" element={<UserPrescrition_list/>}/>
        <Route path="/contact_list" element={<ContactList/>}/>
         {/* Protected Routes*/}
        <Route
          path="/user_dashboard"
          element={
            <UserProRoutes>
              <UserDashboard_page />
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
         <Route path="/doctor_dashboard" element={
          <DoctorProctetedRoutes>
            <Doctor_dashboard/>
          </DoctorProctetedRoutes>
         }
          />
        
      </Routes>
    </Router>
  );
};

export default App;
