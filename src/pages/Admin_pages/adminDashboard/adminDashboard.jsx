import { useNavigate } from "react-router-dom";

const AdminDashboardPage = () => {
  const navigation = useNavigate();
  const onChange = async () => {
    try {
      await fetch("http://localhost:8000/user/logout", {
        method: "get",
        credentials: "include",
      });
      navigation("/admin_Login_page");
    } catch (err) {
      console.error("logout filed " + err);
    }
  };

  return (
    <>
      <h1>Admin dashboard page</h1>
      <h1> hii</h1>
      <button onClick={onChange}> Logout</button>
    </>
  );
};
export default AdminDashboardPage;
